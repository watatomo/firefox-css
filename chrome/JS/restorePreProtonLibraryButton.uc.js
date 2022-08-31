// ==UserScript==
// @name           Restore pre-Proton Library Button
// @version        1.2.2
// @author         aminomancer
// @homepage       https://github.com/aminomancer/uc.css.js
// @description    The library toolbar button used to have an animation that
// played when a bookmark was added. It's another casualty of the proton
// updates. This script restores the library button animation in its entirety,
// with one small change. The library animation always looked just a tiny bit
// off for certain window scaling factors — the animation would appear about
// half a pixel from where the static icon is, causing it to appear to move when
// the animation finishes. In order to fix this in my version of the animation,
// I added some constants at the top of the script (allowScalingFix and
// forceScalingFix) that will adjust the icon if enabled. I don't know exactly
// which scaling factors or OSes have this problem, but 150% scaling on Windows
// 10 definitely has it. So by default the script will only enable the scaling
// fix if the OS is Windows and the scaling factor is 1.5. However, if you
// notice that you have the scaling bug too, you can toggle "forceScalingFix" to
// true and it will adjust the icon regardless of your OS or scaling factor.
// Conversely, if you're using 150% scaling on Windows but for whatever reason
// the scaling fix is making it look worse somehow, toggling "allowScalingFix"
// to false will turn the feature off entirely. This standalone version of the
// script doesn't require any additional CSS or icon downloads. If you use my
// other stylesheets or icons, you probably want the non-standalone version.
// @license        This Source Code Form is subject to the terms of the Creative Commons Attribution-NonCommercial-ShareAlike International License, v. 4.0. If a copy of the CC BY-NC-SA 4.0 was not distributed with this file, You can obtain one at http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
// ==/UserScript==

(function () {
    const allowScalingFix = true;
    const forceScalingFix = false;
    class LibraryUIBase {
        constructor() {
            if (
                allowScalingFix &&
                (forceScalingFix ||
                    (window.devicePixelRatio === 1.5 && this.OS === "WINNT"))
            ) {
                this.libButtonFragOrNode.setAttribute(
                    "scaling",
                    window.devicePixelRatio
                );
            }
            this._libraryButtonAnimationEndListeners = {};
            this._windowResizeRunning = false;
            this.animBox = document.createXULElement("box");
            this.animImg = document.createXULElement("image");
            this.animBox.id = "library-animatable-box";
            this.animBox.className = "toolbarbutton-animatable-box";
            this.animImg.className = "toolbarbutton-animatable-image";
            this.animBox.appendChild(this.animImg);
            document.getElementById("nav-bar").appendChild(this.animBox);
        }

        get OS() {
            return Services.appinfo.OS;
        }

        get libButtonFragOrNode() {
            return CustomizableUI.getWidget("library-button").forWindow(window)
                .node;
        }

        triggerLibraryAnimation(animation) {
            let libraryButton = document.getElementById("library-button");
            if (
                !libraryButton ||
                libraryButton.getAttribute("cui-areatype") == "menu-panel" ||
                libraryButton.getAttribute("overflowedItem") == "true" ||
                !libraryButton.closest("#nav-bar") ||
                !window.toolbar.visible ||
                gReduceMotion
            ) {
                return false;
            }

            let navBar = document.getElementById("nav-bar");
            let iconBounds = window.windowUtils.getBoundsWithoutFlushing(
                libraryButton.icon
            );
            let libraryBounds =
                window.windowUtils.getBoundsWithoutFlushing(libraryButton);

            this.animBox.style.setProperty(
                "--library-button-height",
                libraryBounds.height + "px"
            );
            this.animBox.style.setProperty(
                "--library-icon-x",
                iconBounds.x + "px"
            );
            if (navBar.hasAttribute("brighttext"))
                this.animBox.setAttribute("brighttext", "true");
            else this.animBox.removeAttribute("brighttext");

            this.animBox.removeAttribute("fade");
            libraryButton.setAttribute("animate", animation);
            this.animBox.setAttribute("animate", animation);
            if (!this._libraryButtonAnimationEndListeners[animation]) {
                this._libraryButtonAnimationEndListeners[animation] = (
                    event
                ) => {
                    this._libraryButtonAnimationEndListener(event, animation);
                };
            }
            this.animBox.addEventListener(
                "animationend",
                this._libraryButtonAnimationEndListeners[animation]
            );
            window.addEventListener("resize", this);
            return true;
        }

        _libraryButtonAnimationEndListener(aEvent, animation) {
            if (
                aEvent.animationName.startsWith(
                    `library-${animation}-animation`
                )
            ) {
                this.animBox.setAttribute("fade", "true");
            } else if (aEvent.animationName == `library-${animation}-fade`) {
                this.animBox.removeEventListener(
                    "animationend",
                    window.LibraryUI._libraryButtonAnimationEndListeners[
                        animation
                    ]
                );
                this.animBox.removeAttribute("animate");
                this.animBox.removeAttribute("fade");
                window.removeEventListener("resize", this);
                let libraryButton = document.getElementById("library-button");
                libraryButton.removeAttribute("animate");
            }
        }

        handleEvent(aEvent) {
            if (this._windowResizeRunning) return;
            this._windowResizeRunning = true;
            requestAnimationFrame(() => {
                let libraryButton = document.getElementById("library-button");
                if (
                    !libraryButton ||
                    libraryButton.getAttribute("cui-areatype") ==
                        "menu-panel" ||
                    libraryButton.getAttribute("overflowedItem") == "true" ||
                    !libraryButton.closest("#nav-bar")
                ) {
                    return;
                }

                let iconBounds = window.windowUtils.getBoundsWithoutFlushing(
                    libraryButton.icon
                );
                this.animBox.style.setProperty(
                    "--library-icon-x",
                    iconBounds.x + "px"
                );
                this._windowResizeRunning = false;
            });
        }
    }

    /**
     * for a given node, find its scrollable parent and return true if the node is scrolled out of view
     * @param {object} node (the potential anchor node)
     * @returns {boolean} true if the node is scrolled out of view
     */
    function scrolledOutOfView(node) {
        let scrollBox = node.closest(".slider-container, arrowscrollbox");
        if (!scrollBox) return false;
        let ordinals =
            scrollBox.getAttribute("orient") === "horizontal"
                ? ["left", "right", "width"]
                : ["top", "bottom", "height"];
        let nodeRect = node.getBoundingClientRect();
        let scrollRect = scrollBox.getBoundingClientRect();
        return (
            scrollRect[ordinals[0]] >
                nodeRect[ordinals[0]] + nodeRect[ordinals[2]] / 2 ||
            scrollRect[ordinals[1]] + nodeRect[ordinals[2]] / 2 <
                nodeRect[ordinals[1]]
        );
    }

    function init() {
        let sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(
            Ci.nsIStyleSheetService
        );

        window.LibraryUI = new LibraryUIBase();

        StarUI.showConfirmation = function showConfirmation() {
            let animationTriggered =
                window.LibraryUI.triggerLibraryAnimation("bookmark");
            const HINT_COUNT_PREF =
                "browser.bookmarks.editDialog.confirmationHintShowCount";
            const HINT_COUNT = Services.prefs.getIntPref(HINT_COUNT_PREF, 0);
            if (animationTriggered && HINT_COUNT >= 3) return;
            Services.prefs.setIntPref(HINT_COUNT_PREF, HINT_COUNT + 1);

            let anchor;
            if (window.toolbar.visible) {
                for (let id of ["library-button", "bookmarks-menu-button"]) {
                    let element = document.getElementById(id);
                    if (
                        element &&
                        element.getAttribute("cui-areatype") != "menu-panel" &&
                        element.getAttribute("overflowedItem") != "true" &&
                        isElementVisible(element) &&
                        !scrolledOutOfView(element)
                    ) {
                        anchor = element;
                        break;
                    }
                }
            }

            if (!anchor)
                anchor = document.getElementById("PanelUI-menu-button");
            ConfirmationHint.show(anchor, "pageBookmarked2");
        };

        const css = `/*Restore_pre-Proton_Library_Button_Stylesheet*/#navigator-toolbox{position:relative;}#library-animatable-box{display:none;}#library-animatable-box[animate]{display:block;}#library-button{list-style-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><path fill='context-fill' fill-opacity='context-fill-opacity' d='M5 3a1 1 0 00-1 1v10a1 1 0 002 0V4a1 1 0 00-1-1zm3-1a1 1 0 00-1 1v11a1 1 0 002 0V3a1 1 0 00-1-1zm7.939 11.658l-4-11a1 1 0 10-1.879.684l4 11a1 1 0 101.879-.684zM2 1a1 1 0 00-1 1v12a1 1 0 002 0V2a1 1 0 00-1-1z'/></svg>");}#library-button[scaling]{list-style-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='.3 -.2 16 16'><path fill='context-fill' fill-opacity='context-fill-opacity' d='M5 3a1 1 0 00-1 1v10a1 1 0 002 0V4a1 1 0 00-1-1zm3-1a1 1 0 00-1 1v11a1 1 0 002 0V3a1 1 0 00-1-1zm7.939 11.658l-4-11a1 1 0 10-1.879.684l4 11a1 1 0 101.879-.684zM2 1a1 1 0 00-1 1v12a1 1 0 002 0V2a1 1 0 00-1-1z'/></svg>");}@keyframes library-bookmark-animation{from{transform:translateX(0);fill:inherit}25%{fill:inherit}50%{fill:var(--toolbarbutton-icon-fill-attention);fill-opacity:1}to{transform:translateX(-1056px);fill:var(--toolbarbutton-icon-fill-attention);fill-opacity:1}}@keyframes library-bookmark-animation-rtl{from{transform:translateX(1056px);fill:inherit}25%{fill:inherit}50%{fill:var(--toolbarbutton-icon-fill-attention);fill-opacity:1}to{transform:translateX(0);fill:var(--toolbarbutton-icon-fill-attention);fill-opacity:1}}@keyframes library-bookmark-fade{from{fill:var(--toolbarbutton-icon-fill-attention);fill-opacity:1}to{fill:inherit}}#library-button[animate]>.toolbarbutton-icon{fill:transparent;}#library-animatable-box[animate]{top:calc(var(--library-button-height) / 2 - 27px);left:calc(var(--library-icon-x) + (16px + 2 * var(--toolbarbutton-inner-padding) - 22px) / 2);width:22px;height:54px}#library-animatable-box[animate]>.toolbarbutton-animatable-image{min-height:54px;width:1078px;animation-duration:800ms;animation-timing-function:steps(48);}#library-animatable-box[animate][fade]>.toolbarbutton-animatable-image{animation-duration:2s;animation-timing-function:ease-out;}#library-animatable-box[animate="bookmark"]>.toolbarbutton-animatable-image{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDc4IiBoZWlnaHQ9IjU0IiBmaWxsPSJjb250ZXh0LWZpbGwiIGZpbGwtb3BhY2l0eT0iY29udGV4dC1maWxsLW9wYWNpdHkiPjxkZWZzPjxtYXNrIGlkPSJhIiBtYXNrLXR5cGU9ImFscGhhIj48cGF0aCBkPSJNLTI5LjEtNzYuOWwtMTUuNSA0OC43IDIxLjQgMTIgNS40LS44IDMtLjMgMi4zIDQuNyA1LjUuMS44LTIuMWgxMEwxMyAxMC44bDQuMi0zOS4yIDYtMjUuMi0uOC0yMi4zLTUxLjYtMXoiIHRyYW5zZm9ybT0ibWF0cml4KC41IDAgMCAuNSAxMy4xMDggMjguMzEzKSIvPjwvbWFzaz48cGF0aCBpZD0iYm9va3MiIGQ9Ik04IDIyYTEgMSAwIDAgMC0xIDF2MTBhMSAxIDAgMCAwIDIgMFYyM2ExIDEgMCAwIDAtMS0xem0zLTFhMSAxIDAgMCAwLTEgMXYxMWExIDEgMCAwIDAgMiAwVjIyYTEgMSAwIDAgMC0xLTF6bTggMTEuN2wtNC0xMWExIDEgMCAxIDAtMiAuNmw0IDExYTEgMSAwIDEgMCAyLS42ek01IDIwYTEgMSAwIDAgMC0xIDF2MTJhMSAxIDAgMCAwIDIgMFYyMWExIDEgMCAwIDAtMS0xeiIvPjwvZGVmcz48c3ZnPjx1c2UgaHJlZj0iI2Jvb2tzIi8+PC9zdmc+PHN2ZyB4PSIyMiI+PHVzZSBocmVmPSIjYm9va3MiLz48ZyBtYXNrPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDQzIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNMTMuNiAxLjdMMTQgNWwuMSAxLjUgMS4zLjYgMyAxLjctMy4yIDEuNi0xLjIuNy0uMiAxLjMtLjcgMy40LTIuMy0yLjQtMS0xLjItMS41LjMtMy4yLjUgMS42LTMgLjYtMS4zTDcgNy41IDUuNCA0LjNsMy40LjUgMS40LjMgMS0xIDIuNC0yLjQiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zNSIgZD0iTTEzLjYgMS43TDE0IDVsLjEgMS41IDEuMy42IDMgMS43LTMuMiAxLjYtMS4yLjctLjIgMS4zLS43IDMuNC0yLjMtMi40LTEtMS4yLTEuNS4zLTMuMi41IDEuNi0zIC42LTEuM0w3IDcuNSA1LjQgNC4zbDMuNC41IDEuNC4zIDEtMSAyLjQtMi40Ii8+PC9nPjwvc3ZnPjxzdmcgeD0iNDQiPjx1c2UgaHJlZj0iI2Jvb2tzIi8+PGcgbWFzaz0idXJsKCNhKSIgb3BhY2l0eT0iLjE1NiI+PHBhdGggZmlsbD0iY29udGV4dC1zdHJva2UiIHN0cm9rZT0ibm9uZSIgZD0iTTEzLjMgMS42bC42IDMuMy4zIDEuNCAxLjIuNiAzIDEuNS0zIDEuOC0xLjIuNy0uMiAxLjMtLjUgMy41LTIuNC0yLjQtMS0xLTEuNS4yLTMuMi43TDYuOSAxMGwuNi0xLjMtLjYtMS4yLTEuNi0zLjEgMy40LjRMMTAgNWwxLTEgMi4yLTIuNSIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBkPSJNMTMuMyAxLjZsLjYgMy4zLjMgMS40IDEuMi42IDMgMS41LTMgMS44LTEuMi43LS4yIDEuMy0uNSAzLjUtMi40LTIuNC0xLTEtMS41LjItMy4yLjdMNi45IDEwbC42LTEuMy0uNi0xLjItMS42LTMuMSAzLjQuNEwxMCA1bDEtMSAyLjItMi41Ii8+PC9nPjwvc3ZnPjxzdmcgeD0iNjYiPjx1c2UgaHJlZj0iI2Jvb2tzIi8+PGcgbWFzaz0idXJsKCNhKSIgb3BhY2l0eT0iLjMxNiI+PHBhdGggZmlsbD0iY29udGV4dC1zdHJva2UiIHN0cm9rZT0ibm9uZSIgZD0iTTEzIDEuNWwuNyAzLjNMMTQgNmwxLjMuNiAzIDEuMy0yLjggMi0xLjIuN1YxMmwtLjQgMy40LTIuNS0yLjItMS0xLTEuNS40LTMuMi44TDcgMTAuMyA3LjUgOSA3IDcuOGwtMS43LTMgMy4zLjIgMS41LjEuOS0xIDItMi42Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzUiIGQ9Ik0xMyAxLjVsLjcgMy4zTDE0IDZsMS4zLjYgMyAxLjMtMi44IDItMS4yLjdWMTJsLS40IDMuNC0yLjUtMi4yLTEtMS0xLjUuNC0zLjIuOEw3IDEwLjMgNy41IDkgNyA3LjhsLTEuNy0zIDMuMy4yIDEuNS4xLjktMSAyLTIuNiIvPjwvZz48L3N2Zz48c3ZnIHg9Ijg4Ij48dXNlIGhyZWY9IiNib29rcyIvPjxnIG1hc2s9InVybCgjYSkiIG9wYWNpdHk9Ii41Ij48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNMTIuNSAxLjRsMSAzLjIuNCAxLjMgMS4zLjUgMyAxLjEtMi43IDIuMS0xIC44djEuM2wtLjEgMy40LTIuNi0yLTEuMi0uOS0xLjQuNS0zIDEgMS0zLjIuNS0xLjMtLjgtMS4xLTEuOC0zIDMuMy4xaDEuNGwuOC0xLjEgMi0yLjciLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zNSIgZD0iTTEyLjUgMS40bDEgMy4yLjQgMS4zIDEuMy41IDMgMS4xLTIuNyAyLjEtMSAuOHYxLjNsLS4xIDMuNC0yLjYtMi0xLjItLjktMS40LjUtMyAxIDEtMy4yLjUtMS4zLS44LTEuMS0xLjgtMyAzLjMuMWgxLjRsLjgtMS4xIDItMi43Ii8+PC9nPjwvc3ZnPjxzdmcgeD0iMTEwIj48dXNlIGhyZWY9IiNib29rcyIvPjxnIG1hc2s9InVybCgjYSkiIG9wYWNpdHk9Ii42ODQiPjxwYXRoIGZpbGw9ImNvbnRleHQtc3Ryb2tlIiBzdHJva2U9Im5vbmUiIGQ9Ik0xMi4xIDEuNGwxLjIgMyAuNCAxLjQgMS40LjMgMyAxLTIuNSAyLjItMSAuOHYxLjRsLjIgMy4zTDEyIDEzbC0xLjItLjgtMS40LjUtMyAxLjIgMS0zLjIuMy0xLjMtLjgtMS0yLTIuOCAzLjItLjJoMS40bC44LTEuM0wxMiAxLjQiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zNSIgZD0iTTEyLjEgMS40bDEuMiAzIC40IDEuNCAxLjQuMyAzIDEtMi41IDIuMi0xIC44djEuNGwuMiAzLjNMMTIgMTNsLTEuMi0uOC0xLjQuNS0zIDEuMiAxLTMuMi4zLTEuMy0uOC0xLTItMi44IDMuMi0uMmgxLjRsLjgtMS4zTDEyIDEuNCIvPjwvZz48L3N2Zz48c3ZnIHg9IjEzMiI+PHVzZSBocmVmPSIjYm9va3MiLz48ZyBtYXNrPSJ1cmwoI2EpIiBvcGFjaXR5PSIuODQ0Ij48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNMTEuNyAxLjRsMS4zIDMgLjYgMS4yIDEuMy4zIDMuMS43TDE1LjYgOWwtMSAxIC4yIDEuMi4zIDMuMy0yLjctMS42TDExIDEybC0xLjMuNkw3IDE0LjFsLjYtMy4zLjMtMS4zLS44LTFMNC45IDZsMy4yLS4zIDEuNC0uMi43LTEuMiAxLjUtMi44Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzUiIGQ9Ik0xMS43IDEuNGwxLjMgMyAuNiAxLjIgMS4zLjMgMy4xLjdMMTUuNiA5bC0xIDEgLjIgMS4yLjMgMy4zLTIuNy0xLjZMMTEgMTJsLTEuMy42TDcgMTQuMWwuNi0zLjMuMy0xLjMtLjgtMUw0LjkgNmwzLjItLjMgMS40LS4yLjctMS4yIDEuNS0yLjgiLz48L2c+PC9zdmc+PHN2ZyB4PSIxNTQiPjx1c2UgaHJlZj0iI2Jvb2tzIi8+PGcgbWFzaz0idXJsKCNhKSIgb3BhY2l0eT0iLjk1NyI+PHBhdGggZmlsbD0iY29udGV4dC1zdHJva2UiIHN0cm9rZT0ibm9uZSIgZD0iTTExLjUgMS40bDEuNCAyLjkuNiAxLjIgMS4zLjMgMy4xLjUtMi4zIDIuNS0uOSAxTDE1IDExbC41IDMuMy0yLjgtMS42LTEuMy0uNy0xLjMuNy0yLjggMS40LjYtMy4yLjItMS4zLS45LTFMNSA2LjFsMy0uNCAxLjMtLjIuNy0xLjMgMS40LTIuOCIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBkPSJNMTEuNSAxLjRsMS40IDIuOS42IDEuMiAxLjMuMyAzLjEuNS0yLjMgMi41LS45IDFMMTUgMTFsLjUgMy4zLTIuOC0xLjYtMS4zLS43LTEuMy43LTIuOCAxLjQuNi0zLjIuMi0xLjMtLjktMUw1IDYuMWwzLS40IDEuMy0uMi43LTEuMyAxLjQtMi44Ii8+PC9nPjwvc3ZnPjxzdmcgeD0iMTc2Ij48dXNlIGhyZWY9IiNib29rcyIvPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9ImNvbnRleHQtc3Ryb2tlIiBzdHJva2U9Im5vbmUiIGQ9Ik0xMS40IDEuNGwxLjQgMi44LjcgMS4yIDEuMy4zIDMuMS41LTIuMyAyLjUtLjggMSAuMiAxLjIuNSAzLjMtMi45LTEuNS0xLjItLjctMS4zLjctMi44IDEuNS41LTMuMy4yLTEuMy0uOS0xTDUgNi4zbDMtLjYgMS40LS4zLjYtMS4yIDEuNC0yLjgiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zNSIgZD0iTTExLjQgMS40bDEuNCAyLjguNyAxLjIgMS4zLjMgMy4xLjUtMi4zIDIuNS0uOCAxIC4yIDEuMi41IDMuMy0yLjktMS41LTEuMi0uNy0xLjMuNy0yLjggMS41LjUtMy4zLjItMS4zLS45LTFMNSA2LjNsMy0uNiAxLjQtLjMuNi0xLjIgMS40LTIuOCIvPjwvZz48L3N2Zz48c3ZnIHg9IjE5OCI+PHVzZSBocmVmPSIjYm9va3MiLz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNMTEuMyAxLjRsMS41IDIuOS42IDEuMiAxLjQuMiAzLjEuNS0yLjMgMi41LS44IDEgLjIgMS4yLjUgMy4zLTIuOC0xLjUtMS4zLS43LTEuMy43LTIuNyAxLjUuNS0zLjIuMS0xLjMtLjgtMS0yLjMtMi40TDggNS44bDEuNC0uMy42LTEuMyAxLjMtMi44Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzUiIGQ9Ik0xMS4zIDEuNGwxLjUgMi45LjYgMS4yIDEuNC4yIDMuMS41LTIuMyAyLjUtLjggMSAuMiAxLjIuNSAzLjMtMi44LTEuNS0xLjMtLjctMS4zLjctMi43IDEuNS41LTMuMi4xLTEuMy0uOC0xLTIuMy0yLjRMOCA1LjhsMS40LS4zLjYtMS4zIDEuMy0yLjgiLz48L2c+PC9zdmc+PHN2ZyB4PSIyMjAiPjx1c2UgaHJlZj0iI2Jvb2tzIi8+PGcgbWFzaz0idXJsKCNhKSI+PHBhdGggZmlsbD0iY29udGV4dC1zdHJva2UiIHN0cm9rZT0ibm9uZSIgZD0iTTExLjMgMS41bDEuNSAyLjguNiAxLjIgMS40LjIgMyAuNS0yLjEgMi41LS45IDFMMTUgMTFsLjYgMy4yLTIuOS0xLjQtMS4zLS43LTEuMi43LTIuNyAxLjUuNC0zLjIuMi0xLjMtMS0xLTIuMy0yLjRMOCA2bDEuNC0uMy41LTEuMyAxLjQtMi44Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzUiIGQ9Ik0xMS4zIDEuNWwxLjUgMi44LjYgMS4yIDEuNC4yIDMgLjUtMi4xIDIuNS0uOSAxTDE1IDExbC42IDMuMi0yLjktMS40LTEuMy0uNy0xLjIuNy0yLjcgMS41LjQtMy4yLjItMS4zLTEtMS0yLjMtMi40TDggNmwxLjQtLjMuNS0xLjMgMS40LTIuOCIvPjwvZz48L3N2Zz48c3ZnIHg9IjI0MiI+PHVzZSBocmVmPSIjYm9va3MiLz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNMTEuMiAxLjZsMS41IDIuOC43IDEuMiAxLjMuMSAzLjIuNS0yLjIgMi41LS45IDEgLjMgMS4zLjYgMy4yLTMtMS40LTEuMi0uNi0xLjMuNy0yLjcgMS42LjQtMy4zLjItMS4zLTEtMS0yLjMtMi4zTDggNmwxLjMtLjMuNi0xLjMgMS4zLTIuOCIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBkPSJNMTEuMiAxLjZsMS41IDIuOC43IDEuMiAxLjMuMSAzLjIuNS0yLjIgMi41LS45IDEgLjMgMS4zLjYgMy4yLTMtMS40LTEuMi0uNi0xLjMuNy0yLjcgMS42LjQtMy4zLjItMS4zLTEtMS0yLjMtMi4zTDggNmwxLjMtLjMuNi0xLjMgMS4zLTIuOCIvPjwvZz48L3N2Zz48c3ZnIHg9IjI2NCI+PHVzZSBocmVmPSIjYm9va3MiLz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNMTEgMS43bDEuNyAyLjcuNiAxLjIgMS40LjIgMy4xLjQtMi4xIDIuNS0uOSAxIC4zIDEuMy43IDMuMi0zLTEuMy0xLjItLjYtMS4zLjctMi43IDEuNi40LTMuMlYxMEw3IDkgNC43IDYuNyA3LjggNmwxLjQtLjMuNS0xLjNMMTEgMS42Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzUiIGQ9Ik0xMSAxLjdsMS43IDIuNy42IDEuMiAxLjQuMiAzLjEuNC0yLjEgMi41LS45IDEgLjMgMS4zLjcgMy4yLTMtMS4zLTEuMi0uNi0xLjMuNy0yLjcgMS42LjQtMy4yVjEwTDcgOSA0LjcgNi43IDcuOCA2bDEuNC0uMy41LTEuM0wxMSAxLjYiLz48L2c+PC9zdmc+PHN2ZyB4PSIyODYiPjx1c2UgaHJlZj0iI2Jvb2tzIi8+PGcgbWFzaz0idXJsKCNhKSI+PHBhdGggZmlsbD0iY29udGV4dC1zdHJva2UiIHN0cm9rZT0ibm9uZSIgZD0iTTExIDEuOGwxLjYgMi43LjcgMS4yIDEuNC4xIDMuMS40LTIuMSAyLjYtLjggMSAuMiAxLjMuOCAzLjItMy0xLjMtMS4zLS42LTEuMi43LTIuNyAxLjcuMy0zLjMuMi0xLjMtMS0uOUw0LjggN2wzLjEtLjdMOS4zIDZsLjUtMS4zIDEuMi0zIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzUiIGQ9Ik0xMSAxLjhsMS42IDIuNy43IDEuMiAxLjQuMSAzLjEuNC0yLjEgMi42LS44IDEgLjIgMS4zLjggMy4yLTMtMS4zLTEuMy0uNi0xLjIuNy0yLjcgMS43LjMtMy4zLjItMS4zLTEtLjlMNC44IDdsMy4xLS43TDkuMyA2bC41LTEuMyAxLjItMyIvPjwvZz48L3N2Zz48c3ZnIHg9IjMwOCI+PHVzZSBocmVmPSIjYm9va3MiLz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNMTAuOSAxLjlsMS43IDIuNy43IDEuMiAxLjMuMSAzLjIuMy0yLjEgMi42LS44IDEgLjMgMS4zLjcgMy4yLTIuOS0xLjItMS4zLS42LTEuMi44TDcuOCAxNWwuMy0zLjN2LTEuM2wtLjktLjktMi40LTIuMyAzLS43TDkuMyA2bC41LTEuM0wxMSAyIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzUiIGQ9Ik0xMC45IDEuOWwxLjcgMi43LjcgMS4yIDEuMy4xIDMuMi4zLTIuMSAyLjYtLjggMSAuMyAxLjMuNyAzLjItMi45LTEuMi0xLjMtLjYtMS4yLjhMNy44IDE1bC4zLTMuM3YtMS4zbC0uOS0uOS0yLjQtMi4zIDMtLjdMOS4zIDZsLjUtMS4zTDExIDIiLz48L2c+PC9zdmc+PHN2ZyB4PSIzMzAiPjx1c2UgaHJlZj0iI2Jvb2tzIi8+PGcgbWFzaz0idXJsKCNhKSI+PHBhdGggZmlsbD0iY29udGV4dC1zdHJva2UiIHN0cm9rZT0ibm9uZSIgZD0iTTEwLjggMmwxLjcgMi44LjcgMS4xIDEuNC4xIDMuMS4yLTIgMi43LS44IDEgLjMgMS4zLjggMy4yLTMtMS4yLTEuMi0uNi0xLjIuOEw4IDE1LjJsLjEtMy4zLjEtMS4zLTEtLjktMi41LTIuMiAzLjEtLjggMS40LS40LjUtMS4zIDEtMyIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBkPSJNMTAuOCAybDEuNyAyLjguNyAxLjEgMS40LjEgMy4xLjItMiAyLjctLjggMSAuMyAxLjMuOCAzLjItMy0xLjItMS4yLS42LTEuMi44TDggMTUuMmwuMS0zLjMuMS0xLjMtMS0uOS0yLjUtMi4yIDMuMS0uOCAxLjQtLjQuNS0xLjMgMS0zIi8+PC9nPjwvc3ZnPjxzdmcgeD0iMzUyIj48dXNlIGhyZWY9IiNib29rcyIvPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9ImNvbnRleHQtc3Ryb2tlIiBzdHJva2U9Im5vbmUiIGQ9Ik0xMC43IDIuMkwxMi40IDVsLjggMS4xIDEuMy4xIDMuMi4yLTIgMi43LS44IDEgLjQgMS4zLjggMy4yLTMtMS4yLTEuMy0uNS0xLjIuOC0yLjUgMS44LjEtMy4zdi0xLjNsLTEtLjktMi41LTIuMSAzLjEtMSAxLjQtLjMuNC0xLjMgMS0zIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzUiIGQ9Ik0xMC43IDIuMkwxMi40IDVsLjggMS4xIDEuMy4xIDMuMi4yLTIgMi43LS44IDEgLjQgMS4zLjggMy4yLTMtMS4yLTEuMy0uNS0xLjIuOC0yLjUgMS44LjEtMy4zdi0xLjNsLTEtLjktMi41LTIuMSAzLjEtMSAxLjQtLjMuNC0xLjMgMS0zIi8+PC9nPjwvc3ZnPjxzdmcgeD0iMzc0Ij48dXNlIGhyZWY9IiNib29rcyIvPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9ImNvbnRleHQtc3Ryb2tlIiBzdHJva2U9Im5vbmUiIGQ9Ik0xMC42IDIuNGwxLjggMi43LjcgMSAxLjQuMSAzLjEuMkwxNS43IDlsLS43IDEgLjMgMS4zIDEgMy4yLTMtMS4xLTEuNC0uNS0xLjIuOC0yLjUgMS44VjExbC0xLS44LTIuNS0yLjEgMy0xIDEuNC0uNC41LTEuMyAxLTMiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zNSIgZD0iTTEwLjYgMi40bDEuOCAyLjcuNyAxIDEuNC4xIDMuMS4yTDE1LjcgOWwtLjcgMSAuMyAxLjMgMSAzLjItMy0xLjEtMS40LS41LTEuMi44LTIuNSAxLjhWMTFsLTEtLjgtMi41LTIuMSAzLTEgMS40LS40LjUtMS4zIDEtMyIvPjwvZz48L3N2Zz48c3ZnIHg9IjM5NiI+PHVzZSBocmVmPSIjYm9va3MiLz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNMTAuNCAyLjZsMS45IDIuNy44IDEgMS4zLjFoMy4ybC0xLjkgMi44LS43IDEuMS40IDEuMyAxIDMuMS0zLTEtMS40LS41LTEuMi44LTIuNSAydi00LjZsLTEtLjgtMi42LTIuMSAzLTFMOS4yIDdsLjQtMS40IDEtMyIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBkPSJNMTAuNCAyLjZsMS45IDIuNy44IDEgMS4zLjFoMy4ybC0xLjkgMi44LS43IDEuMS40IDEuMyAxIDMuMS0zLTEtMS40LS41LTEuMi44LTIuNSAydi00LjZsLTEtLjgtMi42LTIuMSAzLTFMOS4yIDdsLjQtMS40IDEtMyIvPjwvZz48L3N2Zz48c3ZnIHg9IjQxOCI+PHVzZSBocmVmPSIjYm9va3MiLz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNMTAuMyAyLjlsMiAyLjYuNyAxaDQuNmwtMS45IDIuOS0uNyAxIC40IDEuMyAxIDMuMS0zLTEtMS40LS40LTEuMS45LTIuNSAxLjl2LTQuNmwtMS0uOC0yLjctMiAzLTEuMUw5IDcuMiA5LjQgNmwxLTMiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zNSIgZD0iTTEwLjMgMi45bDIgMi42LjcgMWg0LjZsLTEuOSAyLjktLjcgMSAuNCAxLjMgMSAzLjEtMy0xLTEuNC0uNC0xLjEuOS0yLjUgMS45di00LjZsLTEtLjgtMi43LTIgMy0xLjFMOSA3LjIgOS40IDZsMS0zIi8+PC9nPjwvc3ZnPjxzdmcgeD0iNDQwIj48dXNlIGhyZWY9IiNib29rcyIvPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9ImNvbnRleHQtc3Ryb2tlIiBzdHJva2U9Im5vbmUiIGQ9Ik0xMC4yIDMuMmwyIDIuNS44IDEuMWg0LjVsLTEuOCAyLjgtLjcgMSAuNSAxLjMgMSAzLjEtMy0xLTEuNC0uNC0xLjEgMS0yLjUgMS45di00LjZMNy4zIDExIDQuNiA5bDMtMUw5IDcuNGwuNC0xLjMuOC0zIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzUiIGQ9Ik0xMC4yIDMuMmwyIDIuNS44IDEuMWg0LjVsLTEuOCAyLjgtLjcgMSAuNSAxLjMgMSAzLjEtMy0xLTEuNC0uNC0xLjEgMS0yLjUgMS45di00LjZMNy4zIDExIDQuNiA5bDMtMUw5IDcuNGwuNC0xLjMuOC0zIi8+PC9nPjwvc3ZnPjxzdmcgeD0iNDYyIj48dXNlIGhyZWY9IiNib29rcyIvPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9ImNvbnRleHQtc3Ryb2tlIiBzdHJva2U9Im5vbmUiIGQ9Ik0xMC4xIDMuNWwyIDIuNS44IDFoNC42bC0xLjggMi44LS42IDEuMS40IDEuMiAxLjEgMy4xLTMtLjktMS40LS40LTEuMSAxLTIuNCAyLS4yLTMuNHYtMS4zbC0xLjEtLjctMi43LTIgMy0xLjFMOSA3LjlsLjMtMS40LjgtMyIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBkPSJNMTAuMSAzLjVsMiAyLjUuOCAxaDQuNmwtMS44IDIuOC0uNiAxLjEuNCAxLjIgMS4xIDMuMS0zLS45LTEuNC0uNC0xLjEgMS0yLjQgMi0uMi0zLjR2LTEuM2wtMS4xLS43LTIuNy0yIDMtMS4xTDkgNy45bC4zLTEuNC44LTMiLz48L2c+PC9zdmc+PHN2ZyB4PSI0ODQiPjx1c2UgaHJlZj0iI2Jvb2tzIi8+PGcgbWFzaz0idXJsKCNhKSI+PHBhdGggZmlsbD0iY29udGV4dC1zdHJva2UiIHN0cm9rZT0ibm9uZSIgZD0iTTEwIDMuOGwyIDIuNS45IDFoMS4zbDMuMi0uMi0xLjcgMy0uNiAxIC40IDEuMyAxLjIgMy0zLS44LTEuNC0uNC0xLjEgMS0yLjQgMi0uMi0zLjMtLjEtMS4zLTEtLjctMi44LTIgMy0xLjEgMS4yLS42LjQtMS4zLjctMyIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBkPSJNMTAgMy44bDIgMi41LjkgMWgxLjNsMy4yLS4yLTEuNyAzLS42IDEgLjQgMS4zIDEuMiAzLTMtLjgtMS40LS40LTEuMSAxLTIuNCAyLS4yLTMuMy0uMS0xLjMtMS0uNy0yLjgtMiAzLTEuMSAxLjItLjYuNC0xLjMuNy0zIi8+PC9nPjwvc3ZnPjxzdmcgeD0iNTA2Ij48dXNlIGhyZWY9IiNib29rcyIvPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9ImNvbnRleHQtc3Ryb2tlIiBzdHJva2U9Im5vbmUiIGQ9Ik05LjkgNC4ybDIgMi41IDEgMWgxLjNsMy4xLS4zLTEuNiAzLS42IDEgLjUgMS4zIDEuMiAzLTMtLjgtMS41LS4zLTEgMS0yLjQgMi0uMy0zLjNWMTNsLTEuMS0uNy0yLjgtMS44IDMtMS4zIDEuMi0uNS4zLTEuNC43LTMiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zNSIgZD0iTTkuOSA0LjJsMiAyLjUgMSAxaDEuM2wzLjEtLjMtMS42IDMtLjYgMSAuNSAxLjMgMS4yIDMtMy0uOC0xLjUtLjMtMSAxLTIuNCAyLS4zLTMuM1YxM2wtMS4xLS43LTIuOC0xLjggMy0xLjMgMS4yLS41LjMtMS40LjctMyIvPjwvZz48L3N2Zz48c3ZnIHg9IjUyOCI+PHVzZSBocmVmPSIjYm9va3MiLz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNOS44IDQuN2wyIDIuNCAxIDFMMTQgOGwzLjItLjMtMS42IDMtLjYgMS4xLjUgMS4yIDEuMyAzLTMuMS0uNy0xLjQtLjMtMSAxTDkgMThsLS4zLTMuMi0uMS0xLjMtMS4xLS43TDQuNyAxMWwyLjktMS4zTDguOSA5IDkgNy43bC42LTMiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zNSIgZD0iTTkuOCA0LjdsMiAyLjQgMSAxTDE0IDhsMy4yLS4zLTEuNiAzLS42IDEuMS41IDEuMiAxLjMgMy0zLjEtLjctMS40LS4zLTEgMUw5IDE4bC0uMy0zLjItLjEtMS4zLTEuMS0uN0w0LjcgMTFsMi45LTEuM0w4LjkgOSA5IDcuN2wuNi0zIi8+PC9nPjwvc3ZnPjxzdmcgeD0iNTUwIj48dXNlIGhyZWY9IiNib29rcyIvPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9ImNvbnRleHQtc3Ryb2tlIiBzdHJva2U9Im5vbmUiIGQ9Ik05LjYgNS4ybDIuMiAyLjMgMSAxIDEuMy0uMSAzLjEtLjMtMS41IDMtLjYgMS4xLjUgMS4yIDEuNCAzLTMuMS0uNy0xLjQtLjMtMSAxLTIuMyAyLjItLjQtMy4zLS4yLTEuMy0xLS43LTMtMS43IDMtMS40IDEuMi0uNi4zLTEuNC41LTMiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zNSIgZD0iTTkuNiA1LjJsMi4yIDIuMyAxIDEgMS4zLS4xIDMuMS0uMy0xLjUgMy0uNiAxLjEuNSAxLjIgMS40IDMtMy4xLS43LTEuNC0uMy0xIDEtMi4zIDIuMi0uNC0zLjMtLjItMS4zLTEtLjctMy0xLjcgMy0xLjQgMS4yLS42LjMtMS40LjUtMyIvPjwvZz48L3N2Zz48c3ZnIHg9IjU3MiI+PHVzZSBocmVmPSIjYm9va3MiLz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNOS41IDUuN0wxMS43IDhsMSAxSDE0bDMuMi0uNC0xLjUgMy0uNiAxLjIuNiAxLjEgMS40IDMtMy4yLS42LTEuNC0uMy0xIDEtMi4yIDIuMi0uNS0zLjItLjEtMS4zLTEuMi0uNy0yLjgtMS43IDIuOC0xLjQgMS4zLS42LjItMS40LjUtMyIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBkPSJNOS41IDUuN0wxMS43IDhsMSAxSDE0bDMuMi0uNC0xLjUgMy0uNiAxLjIuNiAxLjEgMS40IDMtMy4yLS42LTEuNC0uMy0xIDEtMi4yIDIuMi0uNS0zLjItLjEtMS4zLTEuMi0uNy0yLjgtMS43IDIuOC0xLjQgMS4zLS42LjItMS40LjUtMyIvPjwvZz48L3N2Zz48c3ZnIHg9IjU5NCI+PGRlZnM+PG1hc2sgaWQ9IkEiIG1hc2stdHlwZT0iYWxwaGEiPjxwYXRoIGQ9Ik0tMjkuMS03Ni45bC0xNS41IDQ4LjcgMjEuNCAxMiA1LjQtLjggMy0uMyAyLjMgNC43IDUuNS4xLjgtMi4xaDEwTDEzIDEwLjhsNC4yLTM5LjIgNi0yNS4yLS44LTIyLjMtNTEuNi0xeiIgdHJhbnNmb3JtPSJtYXRyaXgoLjUgMCAwIC41IDEzLjEwOCAyOC4zMTMpIi8+PC9tYXNrPjwvZGVmcz48dXNlIGhyZWY9IiNib29rcyIvPjxnIG1hc2s9InVybCgjQSkiPjxwYXRoIGZpbGw9ImNvbnRleHQtc3Ryb2tlIiBzdHJva2U9Im5vbmUiIGQ9Ik05LjQgNi4zbDIuMyAyLjMgMSAxIDEuMy0uMiAzLS40LTEuMyAzLS42IDEuMi42IDEuMiAxLjUgMy0zLjItLjctMS40LS4yLTEgMS0yLjIgMi4zLS41LTMuMy0uMi0xLjMtMS4xLS42LTMtMS43IDMtMS40IDEuMi0uNy4yLTEuMy40LTMuMSIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBkPSJNOS40IDYuM2wyLjMgMi4zIDEgMSAxLjMtLjIgMy0uNC0xLjMgMy0uNiAxLjIuNiAxLjIgMS41IDMtMy4yLS43LTEuNC0uMi0xIDEtMi4yIDIuMy0uNS0zLjMtLjItMS4zLTEuMS0uNi0zLTEuNyAzLTEuNCAxLjItLjcuMi0xLjMuNC0zLjEiLz48L2c+PC9zdmc+PHN2ZyB4PSI2MTYiPjxkZWZzPjxtYXNrIGlkPSJCIiBtYXNrLXR5cGU9ImFscGhhIj48cGF0aCBkPSJNLTI5LjEtNzYuOWwtMTUuNSA0OC43IDIxLjQgMTIgNS40LS44IDMtLjMgMi4zIDQuNyA1LjUuMS44LTIuMWgxMEwxMyAxMC44bDQuMi0zOS4yIDYtMjUuMi0uOC0yMi4zLTUxLjYtMXoiIHRyYW5zZm9ybT0ibWF0cml4KC41IDAgMCAuNSAxMy4xMDggMjguMzEzKSIvPjwvbWFzaz48L2RlZnM+PHVzZSBocmVmPSIjYm9va3MiLz48ZyBtYXNrPSJ1cmwoI0IpIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNOS4zIDdsMi4zIDIuMyAxIDEgMS4zLS4yIDMuMS0uNS0xLjMgMy0uNiAxLjIuNiAxLjIgMS42IDIuOS0zLjItLjUtMS40LS4zLTEgMS4xLTIuMiAyLjMtLjUtMy4yLS4yLTEuMy0xLjItLjctMy0xLjYgMi45LTEuNSAxLjItLjYuMi0xLjQuNC0zLjEiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zNSIgZD0iTTkuMyA3bDIuMyAyLjMgMSAxIDEuMy0uMiAzLjEtLjUtMS4zIDMtLjYgMS4yLjYgMS4yIDEuNiAyLjktMy4yLS41LTEuNC0uMy0xIDEuMS0yLjIgMi4zLS41LTMuMi0uMi0xLjMtMS4yLS43LTMtMS42IDIuOS0xLjUgMS4yLS42LjItMS40LjQtMy4xIi8+PC9nPjwvc3ZnPjxzdmcgeD0iNjM4Ij48ZGVmcz48bWFzayBpZD0iQyIgbWFzay10eXBlPSJhbHBoYSI+PHBhdGggZD0iTS0yOS4xLTc2LjlsLTE1LjUgNDguNyAyMS40IDEyIDUuNC0uOCAzLS4zIDIuMyA0LjcgNS41LjEuOC0yLjFoMTBMMTMgMTAuOGw0LjItMzkuMiA2LTI1LjItLjgtMjIuMy01MS42LTF6IiB0cmFuc2Zvcm09Im1hdHJpeCguNTE2NiAwIDAgLjUgMTMuMjYzIDI4LjQ1NCkiLz48L21hc2s+PC9kZWZzPjxwYXRoIGQ9Ik04IDIyLjFhMSAxIDAgMCAwLTEgMXYxMGMwIC42LjQgMSAxIDFzMS0uNCAxLTF2LTEwYzAtLjUtLjQtMS0xLTF6bTMtMWExIDEgMCAwIDAtMSAxdjExYzAgLjYuNSAxIDEgMSAuNyAwIDEuMS0uNCAxLjEtMXYtMTFjMC0uNS0uNC0xLTEtMXptOC4zIDExLjdsLTQuMS0xMWExIDEgMCAwIDAtMS40LS42IDEgMSAwIDAgMC0uNiAxLjJsNC4xIDExYy4yLjYuOC45IDEuNC43LjUtLjIuOC0uNy42LTEuM3pNNC45IDIwLjFhMSAxIDAgMCAwLTEgMXYxMmMwIC42LjQgMSAxIDFzMS0uNCAxLTF2LTEyYzAtLjUtLjQtMS0xLTF6Ii8+PGcgbWFzaz0idXJsKCNDKSI+PHBhdGggZmlsbD0iY29udGV4dC1zdHJva2UiIHN0cm9rZT0ibm9uZSIgZD0iTTkuMiA4bDIuMyAyLjEgMSAxIDEuMy0uMyAzLjEtLjUtMS4zIDMtLjUgMS4yLjcgMS4yIDEuNSAyLjktMy4xLS41LTEuNS0uMi0xIDEtMiAyLjQtLjctMy4yLS4yLTEuMy0xLjItLjYtMy0xLjUgMy0xLjcgMS4yLS43LjEtMS40LjQtMyIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBkPSJNOS4yIDhsMi4zIDIuMSAxIDEgMS4zLS4zIDMuMS0uNS0xLjMgMy0uNSAxLjIuNyAxLjIgMS41IDIuOS0zLjEtLjUtMS41LS4yLTEgMS0yIDIuNC0uNy0zLjItLjItMS4zLTEuMi0uNi0zLTEuNSAzLTEuNyAxLjItLjcuMS0xLjQuNC0zIi8+PC9nPjwvc3ZnPjxzdmcgeD0iNjYwIj48ZGVmcz48bWFzayBpZD0iRCIgbWFzay10eXBlPSJhbHBoYSI+PHBhdGggZD0iTS0yOS4xLTc2LjlsLTE1LjUgNDguNyAyMS40IDEyIDUuNC0uOCAzLS4zIDIuMyA0LjcgNS41LjEuOC0yLjFoMTBMMTMgMTAuOGw0LjItMzkuMiA2LTI1LjItLjgtMjIuMy01MS42LTF6IiB0cmFuc2Zvcm09Im1hdHJpeCguNTMzMiAwIDAgLjUgMTMuNDgyIDI4Ljg0NSkiLz48L21hc2s+PC9kZWZzPjxwYXRoIGQ9Ik04IDIyLjVhMSAxIDAgMCAwLTEgMXYxMGMwIC42LjQgMSAxIDFzMS4xLS40IDEuMS0xdi0xMGMwLS41LS41LTEtMS0xem0zLjItMWExIDEgMCAwIDAtMSAxdjExYzAgLjYuNCAxIDEgMXMxLjEtLjQgMS4xLTF2LTExYzAtLjUtLjUtMS0xLTF6bTguNSAxMS43bC00LjMtMTFhMSAxIDAgMCAwLTEuMy0uNiAxIDEgMCAwIDAtLjcgMS4ybDQuMyAxMWMuMi42LjguOSAxLjQuNy41LS4yLjgtLjguNi0xLjN6TTQuOCAyMC41YTEgMSAwIDAgMC0xIDF2MTJjMCAuNi40IDEgMSAxczEuMS0uNCAxLjEtMXYtMTJjMC0uNS0uNS0xLTEtMXoiLz48ZyBtYXNrPSJ1cmwoI0QpIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNOSA4LjlsMi40IDIuMiAxIC45IDEuNC0uMyAzLS42LTEuMiAzLjEtLjUgMS4yLjcgMS4yIDEuNiAyLjgtMy4yLS40LTEuNC0uMi0xIDEuMS0yIDIuNEw5IDE5bC0uMy0xLjMtMS4xLS42LTMtMS41TDcuMyAxNGwxLjMtLjdWMTJsLjYtMyIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBkPSJNOSA4LjlsMi40IDIuMiAxIC45IDEuNC0uMyAzLS42LTEuMiAzLjEtLjUgMS4yLjcgMS4yIDEuNiAyLjgtMy4yLS40LTEuNC0uMi0xIDEuMS0yIDIuNEw5IDE5bC0uMy0xLjMtMS4xLS42LTMtMS41TDcuMyAxNGwxLjMtLjdWMTJsLjYtMyIvPjwvZz48L3N2Zz48c3ZnIHg9IjY4MiI+PGRlZnM+PG1hc2sgaWQ9IkUiIG1hc2stdHlwZT0iYWxwaGEiPjxwYXRoIGQ9Ik0tMjkuMS03Ni45bC0xNS41IDQ4LjcgMjEuNCAxMiA1LjQtLjggMy0uMyAyLjMgNC43IDUuNS4xLjgtMi4xaDEwTDEzIDEwLjhsNC4yLTM5LjIgNi0yNS4yLS44LTIyLjMtNTEuNi0xeiIgdHJhbnNmb3JtPSJtYXRyaXgoLjU0OTc0IDAgMCAuNSAxMy43MjcgMjkuMzYpIi8+PC9tYXNrPjwvZGVmcz48cGF0aCBkPSJNOC4xIDIzYTEgMSAwIDAgMC0xIDF2MTBjMCAuNi40IDEgMSAxczEuMS0uNCAxLjEtMVYyNGMwLS41LS41LTEtMS0xem0zLjMtMWExIDEgMCAwIDAtMSAxdjExYzAgLjYuNCAxIDEgMXMxLjEtLjQgMS4xLTFWMjNjMC0uNS0uNS0xLTEtMXptOC43IDExLjdsLTQuNC0xMWMtLjItLjUtLjgtLjgtMS40LS42YTEgMSAwIDAgMC0uNiAxLjNsNC40IDExYy4yLjUuOC44IDEuNC42LjUtLjIuOC0uNy43LTEuM3pNNC44IDIxYTEgMSAwIDAgMC0xIDF2MTJjMCAuNi40IDEgMSAxUzYgMzQuNiA2IDM0VjIyYzAtLjUtLjUtMS0xLTF6Ii8+PGcgbWFzaz0idXJsKCNFKSI+PHBhdGggZmlsbD0iY29udGV4dC1zdHJva2UiIHN0cm9rZT0ibm9uZSIgZD0iTTkgMTBsMi40IDIuMiAxIC45IDEuMy0uMyAzLjEtLjctMS4yIDMuMi0uNSAxLjIuNyAxLjEgMS43IDIuOC0zLjItLjMtMS41LS4yTDEyIDIxbC0yIDIuNC0uNy0zLjJMOSAxOWwtMS4yLS42LTMtMS40IDIuNy0xLjcgMS4yLS43LjEtMS40TDkgMTAiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zNSIgZD0iTTkgMTBsMi40IDIuMiAxIC45IDEuMy0uMyAzLjEtLjctMS4yIDMuMi0uNSAxLjIuNyAxLjEgMS43IDIuOC0zLjItLjMtMS41LS4yTDEyIDIxbC0yIDIuNC0uNy0zLjJMOSAxOWwtMS4yLS42LTMtMS40IDIuNy0xLjcgMS4yLS43LjEtMS40TDkgMTAiLz48L2c+PC9zdmc+PHN2ZyB4PSI3MDQiPjxkZWZzPjxtYXNrIGlkPSJGIiBtYXNrLXR5cGU9ImFscGhhIj48cGF0aCBkPSJNLTI5LjEtNzYuOWwtMTUuNSA0OC43IDIxLjQgMTIgNS40LS44IDMtLjMgMi4zIDQuNyA1LjUuMS44LTIuMWgxMEwxMyAxMC44bDQuMi0zOS4yIDYtMjUuMi0uOC0yMi4zLTUxLjYtMXoiIHRyYW5zZm9ybT0ibWF0cml4KC41NjYwOCAwIDAgLjUgMTMuOTYyIDI5Ljg3OCkiLz48L21hc2s+PC9kZWZzPjxwYXRoIGQ9Ik04LjIgMjMuNmMtLjYgMC0xLjIuNC0xLjIgMXYxMGMwIC41LjYgMSAxLjIgMXMxLjEtLjUgMS4xLTF2LTEwYzAtLjYtLjUtMS0xLjEtMXptMy40LTFjLS42IDAtMS4yLjQtMS4yIDF2MTFjMCAuNS42IDEgMS4yIDFzMS4xLS41IDEuMS0xdi0xMWMwLS42LS41LTEtMS4xLTF6bTkgMTEuNmwtNC42LTExYy0uMi0uNS0uOC0uOC0xLjQtLjYtLjYuMi0xIC43LS43IDEuM2w0LjUgMTFjLjIuNS45LjggMS41LjYuNi0uMS45LS43LjctMS4yek00LjggMjEuNmMtLjYgMC0xLjEuNC0xLjEgMXYxMmMwIC41LjUgMSAxIDEgLjcgMCAxLjItLjUgMS4yLTF2LTEyYzAtLjYtLjUtMS0xLjEtMXoiLz48ZyBtYXNrPSJ1cmwoI0YpIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNOC44IDExLjVsMi41IDIgMSAxIDEuMy0uNCAzLjEtLjctMS4xIDMuMi0uNSAxLjIuNyAxLjEgMS43IDIuOC0zLjItLjMtMS40LS4xLTEgMS4xLTEuOSAyLjQtLjgtMy4xLS4zLTEuMy0xLjItLjYtMy0xLjMgMi43LTEuOCAxLjItLjd2LTEuNGwuMi0zLjEiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zNSIgZD0iTTguOCAxMS41bDIuNSAyIDEgMSAxLjMtLjQgMy4xLS43LTEuMSAzLjItLjUgMS4yLjcgMS4xIDEuNyAyLjgtMy4yLS4zLTEuNC0uMS0xIDEuMS0xLjkgMi40LS44LTMuMS0uMy0xLjMtMS4yLS42LTMtMS4zIDIuNy0xLjggMS4yLS43di0xLjRsLjItMy4xIi8+PC9nPjwvc3ZnPjxzdmcgeD0iNzI2Ij48ZGVmcz48bWFzayBpZD0iRyIgbWFzay10eXBlPSJhbHBoYSI+PHBhdGggZD0iTS0yOS4xLTc2LjlsLTE1LjUgNDguNyAyMS40IDEyIDUuNC0uOCAzLS4zIDIuMyA0LjcgNS41LjEuOC0yLjFoMTBMMTMgMTAuOGw0LjItMzkuMiA2LTI1LjItLjgtMjIuMy01MS42LTF6IiB0cmFuc2Zvcm09Im1hdHJpeCguNTgxOTggMCAwIC41IDE0LjE1NCAzMC4yNzgpIi8+PC9tYXNrPjwvZGVmcz48cGF0aCBkPSJNOC4yIDI0Yy0uNiAwLTEuMi40LTEuMiAxdjEwYzAgLjUuNiAxIDEuMiAxIC43IDAgMS4yLS41IDEuMi0xVjI1YzAtLjYtLjUtMS0xLjItMXptMy41LTFjLS42IDAtMS4yLjQtMS4yIDF2MTFjMCAuNS42IDEgMS4yIDFzMS4yLS41IDEuMi0xVjI0YzAtLjYtLjYtMS0xLjItMXptOS4yIDExLjZsLTQuNi0xMWMtLjItLjUtLjktLjgtMS41LS42LS42LjItMSAuNy0uNyAxLjNsNC43IDExYy4yLjUuOC44IDEuNC42LjYtLjEgMS0uNy44LTEuMnpNNC43IDIyYy0uNiAwLTEuMS40LTEuMSAxdjEyYzAgLjUuNSAxIDEuMSAxIC43IDAgMS4yLS41IDEuMi0xVjIzYzAtLjYtLjUtMS0xLjItMXoiLz48ZyBtYXNrPSJ1cmwoI0cpIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNOC43IDEzLjNsMi41IDIgMSAuOSAxLjQtLjMgMy0uOC0xIDMuMi0uNSAxLjIuNyAxLjEgMS44IDIuOC0zLjItLjItMS41LS4yLS44IDEuMi0yIDIuNC0uOC0zLjEtLjQtMS4zLTEuMS0uNS0zLjEtMS40IDIuNy0xLjcgMS4xLS44di0xLjRsLjItMy4xIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzUiIGQ9Ik04LjcgMTMuM2wyLjUgMiAxIC45IDEuNC0uMyAzLS44LTEgMy4yLS41IDEuMi43IDEuMSAxLjggMi44LTMuMi0uMi0xLjUtLjItLjggMS4yLTIgMi40LS44LTMuMS0uNC0xLjMtMS4xLS41LTMuMS0xLjQgMi43LTEuNyAxLjEtLjh2LTEuNGwuMi0zLjEiLz48L2c+PC9zdmc+PHN2ZyB4PSI3NDgiPjxkZWZzPjxtYXNrIGlkPSJIIiBtYXNrLXR5cGU9ImFscGhhIj48cGF0aCBkPSJNLTI5LjEtNzYuOWwtMTUuNSA0OC43IDIxLjQgMTIgNS40LS44IDMtLjMgMi4zIDQuNyA1LjUuMS44LTIuMWgxMEwxMyAxMC44bDQuMi0zOS4yIDYtMjUuMi0uOC0yMi4zLTUxLjYtMXoiIHRyYW5zZm9ybT0ibWF0cml4KC41OTY5IDAgMCAuNSAxNC4yNjcgMzAuNDM4KSIvPjwvbWFzaz48L2RlZnM+PHBhdGggZD0iTTguMiAyNC4xYy0uNyAwLTEuMi41LTEuMiAxdjEwYzAgLjYuNSAxIDEuMiAxIC42IDAgMS4yLS40IDEuMi0xdi0xMGMwLS41LS42LTEtMS4yLTF6bTMuNi0xYy0uNyAwLTEuMi41LTEuMiAxdjExYzAgLjYuNSAxIDEuMiAxIC42IDAgMS4xLS40IDEuMS0xdi0xMWMwLS41LS41LTEtMS4yLTF6bTkuNCAxMS43bC00LjctMTFjLS4zLS41LTEtLjgtMS42LS42LS42LjEtMSAuNy0uNyAxLjJsNC44IDExYy4yLjYuOS45IDEuNS43LjYtLjIgMS0uOC43LTEuM3pNNC42IDIyYy0uNyAwLTEuMi41LTEuMiAxdjEyYzAgLjYuNSAxIDEuMiAxIC42IDAgMS4yLS40IDEuMi0xVjIzYzAtLjUtLjYtMS0xLjItMXoiLz48ZyBtYXNrPSJ1cmwoI0gpIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNOC42IDE1LjdsMi41IDIgMSAuOSAxLjQtLjQgMy0uOC0xIDMuMi0uNCAxLjIuNyAxLjEgMS44IDIuOC0zLjItLjItMS40LS4xLS45IDEuMS0xLjkgMi41LS45LTMuMS0uMy0xLjMtMS4yLS41LTMuMS0xLjNMNy4zIDIxbDEuMi0uOHYtNC40Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzUiIGQ9Ik04LjYgMTUuN2wyLjUgMiAxIC45IDEuNC0uNCAzLS44LTEgMy4yLS40IDEuMi43IDEuMSAxLjggMi44LTMuMi0uMi0xLjQtLjEtLjkgMS4xLTEuOSAyLjUtLjktMy4xLS4zLTEuMy0xLjItLjUtMy4xLTEuM0w3LjMgMjFsMS4yLS44di00LjQiLz48L2c+PC9zdmc+PHN2ZyB4PSI3NzAiPjxkZWZzPjxtYXNrIGlkPSJJIiBtYXNrLXR5cGU9ImFscGhhIj48cGF0aCBkPSJNLTI5LjEtNzYuOWwtMTUuNSA0OC43IDIxLjQgMTIgNS40LS44IDMtLjMgMi4zIDQuNyA1LjUuMS44LTIuMWgxMEwxMyAxMC44bDQuMi0zOS4yIDYtMjUuMi0uOC0yMi4zLTUxLjYtMXoiIHRyYW5zZm9ybT0ibWF0cml4KC42MDk3OSAwIDAgLjUgMTQuMzM1IDMwLjIxNykiLz48L21hc2s+PC9kZWZzPjxwYXRoIGQ9Ik04LjEgMjMuOWMtLjcgMC0xLjIuNS0xLjIgMXYxMGMwIC42LjUgMSAxLjIgMXMxLjItLjQgMS4yLTF2LTEwYzAtLjUtLjUtMS0xLjItMXptMy43LTFjLS43IDAtMS4zLjUtMS4zIDF2MTFjMCAuNi42IDEgMS4zIDEgLjYgMCAxLjItLjQgMS4yLTF2LTExYzAtLjUtLjYtMS0xLjItMXptOS42IDExLjdsLTQuOC0xMWMtLjMtLjYtMS0uOC0xLjYtLjctLjYuMi0xIC44LS43IDEuM2w0LjkgMTFjLjIuNi45LjggMS41LjcuNi0uMiAxLS44LjgtMS4zem0tMTctMTIuN2MtLjYgMC0xLjIuNS0xLjIgMXYxMmMwIC42LjYgMSAxLjIgMSAuNyAwIDEuMy0uNCAxLjMtMXYtMTJjMC0uNS0uNi0xLTEuMy0xeiIvPjxnIG1hc2s9InVybCgjSSkiPjxwYXRoIGZpbGw9ImNvbnRleHQtc3Ryb2tlIiBzdHJva2U9Im5vbmUiIGQ9Ik04LjUgMTguOGwyLjUgMiAxIC44IDEuNC0uNCAzLS44LTEgMy4yLS4zIDEuMi43IDEgMS45IDIuOC0zLjItLjFIMTNsLS44IDEtMS45IDIuNi0xLTMuMS0uMy0xLjMtMS4yLS41TDQuNyAyNmwyLjYtMiAxLjEtLjh2LTQuNSIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBkPSJNOC41IDE4LjhsMi41IDIgMSAuOCAxLjQtLjQgMy0uOC0xIDMuMi0uMyAxLjIuNyAxIDEuOSAyLjgtMy4yLS4xSDEzbC0uOCAxLTEuOSAyLjYtMS0zLjEtLjMtMS4zLTEuMi0uNUw0LjcgMjZsMi42LTIgMS4xLS44di00LjUiLz48L2c+PC9zdmc+PHN2ZyB4PSI3OTIiPjxkZWZzPjxtYXNrIGlkPSJKIiBtYXNrLXR5cGU9ImFscGhhIj48cGF0aCBkPSJNLTI5LjEtNzYuOWwtMTUuNSA0OC43IDIxLjQgMTIgNS40LS44IDMtLjMgMi4zIDQuNyA1LjUuMS44LTIuMWgxMEwxMyAxMC44bDQuMi0zOS4yIDYtMjUuMi0uOC0yMi4zLTUxLjYtMXoiIHRyYW5zZm9ybT0ibWF0cml4KC42MTg5NyAwIDAgLjUgMTQuNCAyOS42ODkpIi8+PC9tYXNrPjwvZGVmcz48cGF0aCBkPSJNOCAyMy40Yy0uNiAwLTEuMi40LTEuMiAxdjEwYzAgLjUuNiAxIDEuMyAxIC43IDAgMS4yLS41IDEuMi0xdi0xMGMwLS42LS41LTEtMS4yLTF6bTMuOC0xYy0uNyAwLTEuMi40LTEuMiAxdjExYzAgLjUuNSAxIDEuMiAxczEuMi0uNSAxLjItMXYtMTFjMC0uNi0uNS0xLTEuMi0xek0yMS42IDM0bC01LTExYy0uMi0uNS0uOS0uOC0xLjUtLjYtLjcuMi0xIC44LS44IDEuM2w1IDExYy4yLjUgMSAuOCAxLjYuNi42LS4xIDEtLjcuNy0xLjJ6TTQuNCAyMS40Yy0uNyAwLTEuMy40LTEuMyAxdjEyYzAgLjUuNiAxIDEuMyAxIC42IDAgMS4yLS41IDEuMi0xdi0xMmMwLS42LS42LTEtMS4yLTF6Ii8+PGcgbWFzaz0idXJsKCNKKSI+PHBhdGggZmlsbD0iY29udGV4dC1zdHJva2UiIHN0cm9rZT0ibm9uZSIgZD0iTTguNCAyMS43bDIuNSAyIDEuMS44IDEuMy0uNCAzLTEtLjkgMy4zLS40IDEuMi44IDEuMSAxLjkgMi43aC0zLjJsLTEuNS0uMS0uOCAxLjItMS44IDIuNS0xLTMuMS0uNC0xLjMtMS4yLS40TDQuNyAyOWwyLjYtMiAxLS43di00LjYiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zNSIgZD0iTTguNCAyMS43bDIuNSAyIDEuMS44IDEuMy0uNCAzLTEtLjkgMy4zLS40IDEuMi44IDEuMSAxLjkgMi43aC0zLjJsLTEuNS0uMS0uOCAxLjItMS44IDIuNS0xLTMuMS0uNC0xLjMtMS4yLS40TDQuNyAyOWwyLjYtMiAxLS43di00LjYiLz48L2c+PC9zdmc+PHN2ZyB4PSI4MTQiPjxkZWZzPjxtYXNrIGlkPSJLIiBtYXNrLXR5cGU9ImFscGhhIj48cGF0aCBkPSJNLTI5LjEtNzYuOWwtMTUuNSA0OC43IDIxLjQgMTIgNS40LS44IDMtLjMgMi4zIDQuNyA1LjUuMS44LTIuMWgxMEwxMyAxMC44bDQuMi0zOS4yIDYtMjUuMi0uOC0yMi4zLTUxLjYtMXoiIHRyYW5zZm9ybT0ibWF0cml4KC42MjM1MSAwIDAgLjUgMTQuNDM0IDI5LjA1OSkiLz48L21hc2s+PC9kZWZzPjxwYXRoIGQ9Ik04IDIyLjdjLS42IDAtMS4yLjUtMS4yIDF2MTBjMCAuNi42IDEgMS4zIDEgLjcgMCAxLjItLjQgMS4yLTF2LTEwYzAtLjUtLjUtMS0xLjItMXptMy44LTFjLS43IDAtMS4yLjUtMS4yIDF2MTFjMCAuNi41IDEgMS4yIDFzMS4zLS40IDEuMy0xdi0xMWMwLS41LS42LTEtMS4zLTF6bTkuOSAxMS43bC01LTExYy0uMi0uNS0xLS44LTEuNi0uNi0uNi4yLTEgLjctLjcgMS4zbDUgMTFjLjIuNS45LjggMS41LjYuNy0uMiAxLS43LjgtMS4zek00LjMgMjAuN2MtLjcgMC0xLjIuNS0xLjIgMXYxMmMwIC42LjUgMSAxLjIgMXMxLjMtLjQgMS4zLTF2LTEyYzAtLjUtLjYtMS0xLjMtMXoiLz48ZyBtYXNrPSJ1cmwoI0spIj48cGF0aCBmaWxsPSJjb250ZXh0LXN0cm9rZSIgc3Ryb2tlPSJub25lIiBkPSJNOC4yIDIzLjZsMi43IDEuOSAxIC44IDEuMy0uNCAzLTEtLjggMy4zLS40IDEuMi44IDEgMiAyLjdIMTNsLS44IDEuMi0xLjggMi41LTEtMy0uNS0xLjMtMS4yLS41LTMtMSAyLjUtMiAxLjItLjh2LTEuNGwtLjItMyIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBkPSJNOC4yIDIzLjZsMi43IDEuOSAxIC44IDEuMy0uNCAzLTEtLjggMy4zLS40IDEuMi44IDEgMiAyLjdIMTNsLS44IDEuMi0xLjggMi41LTEtMy0uNS0xLjMtMS4yLS41LTMtMSAyLjUtMiAxLjItLjh2LTEuNGwtLjItMyIvPjwvZz48L3N2Zz48c3ZnIHg9IjgzNiI+PGRlZnM+PG1hc2sgaWQ9IkwiIG1hc2stdHlwZT0iYWxwaGEiPjxwYXRoIGQ9Ik0tMjkuMS03Ni45bC0xNS41IDQ4LjcgMjEuNCAxMiA1LjQtLjggMy0uMyAyLjMgNC43IDUuNS4xLjgtMi4xaDEwTDEzIDEwLjhsNC4yLTM5LjIgNi0yNS4yLS44LTIyLjMtNTEuNi0xeiIgdHJhbnNmb3JtPSJtYXRyaXgoLjYyNDg0IDAgMCAuNSAxNC40MjMgMjguNTMxKSIvPjwvbWFzaz48L2RlZnM+PHBhdGggZD0iTTggMjIuMmMtLjcgMC0xLjIuNS0xLjIgMXYxMGMwIC42LjUgMSAxLjIgMXMxLjMtLjQgMS4zLTF2LTEwYzAtLjUtLjYtMS0xLjMtMXptMy44LTFjLS43IDAtMS4zLjUtMS4zIDF2MTFjMCAuNi42IDEgMS4zIDFzMS4yLS40IDEuMi0xdi0xMWMwLS41LS41LTEtMS4yLTF6bTEwIDExLjdsLTUtMTFjLS4zLS41LTEtLjgtMS43LS42LS42LjEtMSAuNy0uOCAxLjJsNSAxMWMuMy42IDEgLjkgMS42LjcuNy0uMiAxLS44LjgtMS4zek00LjIgMjAuMmMtLjcgMC0xLjMuNS0xLjMgMXYxMmMwIC42LjYgMSAxLjMgMXMxLjItLjQgMS4yLTF2LTEyYzAtLjUtLjUtMS0xLjItMXoiLz48L3N2Zz48c3ZnIHg9Ijg1OCI+PHBhdGggZD0iTTggMjJjLS43IDAtMS4zLjQtMS4zIDF2MTBjMCAuNi42IDEgMS4zIDFzMS4zLS40IDEuMy0xVjIzYzAtLjYtLjYtMS0xLjMtMXptMy44LTFjLS43IDAtMS4zLjQtMS4zIDF2MTFjMCAuNi42IDEgMS4zIDFzMS4yLS40IDEuMi0xVjIyYzAtLjYtLjYtMS0xLjMtMXptOS45IDExLjdsLTUtMTFjLS4yLS42LTEtLjgtMS42LS43LS43LjItMSAuOC0uOCAxLjNsNSAxMWMuMi42IDEgLjggMS42LjcuNy0uMiAxLS44LjgtMS4zek00LjMgMjBjLS43IDAtMS4zLjQtMS4zIDF2MTJjMCAuNi42IDEgMS4zIDFzMS4yLS40IDEuMi0xVjIxYzAtLjYtLjYtMS0xLjMtMXoiLz48L3N2Zz48c3ZnIHg9Ijg4MCI+PHBhdGggZD0iTTggMjJjLS42IDAtMS4yLjQtMS4yIDF2MTBjMCAuNS42IDEgMS4zIDEgLjYgMCAxLjItLjUgMS4yLTFWMjNjMC0uNi0uNi0xLTEuMi0xem0zLjctMWMtLjcgMC0xLjIuNC0xLjIgMXYxMWMwIC41LjUgMSAxLjIgMXMxLjItLjUgMS4yLTFWMjJjMC0uNi0uNS0xLTEuMi0xem05LjcgMTEuNmwtNC45LTExYy0uMi0uNS0uOS0uOC0xLjUtLjYtLjcuMi0xIC43LS44IDEuMmw1IDExYy4xLjYuOC45IDEuNS43LjYtLjIgMS0uNy43LTEuM3ptLTE3LTEyLjdjLS43IDAtMS4yLjUtMS4yIDF2MTJjMCAuNi41IDEgMS4yIDFzMS4yLS40IDEuMi0xVjIxYzAtLjUtLjUtMS0xLjItMXoiLz48L3N2Zz48c3ZnIHg9IjkwMiI+PHBhdGggZD0iTTggMjEuOWMtLjYgMC0xLjEuNC0xLjEgMXYxMGMwIC41LjUgMSAxLjIgMSAuNiAwIDEuMS0uNSAxLjEtMXYtMTBjMC0uNi0uNS0xLTEuMS0xem0zLjYtMWMtLjYgMC0xLjIuNC0xLjIgMXYxMWMwIC41LjYgMSAxLjIgMSAuNyAwIDEuMi0uNSAxLjItMXYtMTFjMC0uNi0uNS0xLTEuMi0xem05LjUgMTEuNmwtNC44LTExYy0uMi0uNS0uOS0uOC0xLjUtLjYtLjYuMi0xIC44LS43IDEuM2w0LjggMTFjLjIuNS45LjggMS41LjYuNi0uMSAxLS43LjctMS4yek00LjUgMjBjLS43IDAtMS4yLjQtMS4yIDF2MTJjMCAuNS41IDEgMS4yIDEgLjYgMCAxLjItLjUgMS4yLTFWMjFjMC0uNi0uNi0xLTEuMi0xeiIvPjwvc3ZnPjxzdmcgeD0iOTI0Ij48cGF0aCBkPSJNOCAyMS44Yy0uNiAwLTEuMi41LTEuMiAxdjEwYzAgLjYuNiAxIDEuMiAxIC43IDAgMS4yLS40IDEuMi0xdi0xMGMwLS41LS41LTEtMS4yLTF6bTMuNS0xYy0uNiAwLTEuMi41LTEuMiAxdjExYzAgLjYuNiAxIDEuMiAxIC43IDAgMS4yLS40IDEuMi0xdi0xMWMwLS41LS41LTEtMS4yLTF6bTkuMyAxMS43bC00LjctMTFjLS4yLS41LS45LS44LTEuNS0uNi0uNi4yLTEgLjctLjcgMS4ybDQuNyAxMWMuMi42LjkuOSAxLjUuNy42LS4yLjktLjcuNy0xLjN6TTQuNSAxOS44Yy0uNiAwLTEuMi41LTEuMiAxdjEyYzAgLjYuNiAxIDEuMiAxIC43IDAgMS4yLS40IDEuMi0xdi0xMmMwLS41LS41LTEtMS4yLTF6Ii8+PC9zdmc+PHN2ZyB4PSI5NDYiPjxwYXRoIGQ9Ik04IDIxLjljLS43IDAtMS4yLjQtMS4yIDF2MTBjMCAuNS41IDEgMS4yIDFzMS4xLS41IDEuMS0xdi0xMGMwLS42LS41LTEtMS4xLTF6bTMuNC0xYy0uNiAwLTEuMi40LTEuMiAxdjExYzAgLjUuNiAxIDEuMiAxczEuMS0uNSAxLjEtMXYtMTFjMC0uNi0uNS0xLTEuMS0xem05IDExLjZsLTQuNS0xMWMtLjItLjUtLjktLjgtMS41LS42LS42LjItLjkuNy0uNyAxLjNsNC42IDExYy4yLjUuOC44IDEuNC42LjYtLjIgMS0uNy43LTEuM3pNNC42IDIwYy0uNyAwLTEuMi40LTEuMiAxdjEyYzAgLjUuNSAxIDEuMiAxIC42IDAgMS0uNSAxLTFWMjFjMC0uNi0uNC0xLTEtMXoiLz48L3N2Zz48c3ZnIHg9Ijk2OCI+PHBhdGggZD0iTTggMjEuOWMtLjcgMC0xLjIuNC0xLjIgMXYxMGMwIC41LjUgMSAxLjEgMSAuNiAwIDEuMS0uNSAxLjEtMXYtMTBjMC0uNi0uNS0xLTEtMXptMy4zLTFjLS42IDAtMS4xLjQtMS4xIDF2MTFjMCAuNS41IDEgMSAxIC43IDAgMS4yLS41IDEuMi0xdi0xMWMwLS42LS41LTEtMS4xLTF6TTIwIDMyLjVsLTQuNS0xMWMtLjItLjUtLjgtLjgtMS40LS42LS41LjItLjkuOC0uNyAxLjNsNC41IDExYy4yLjUuOC44IDEuNC42LjYtLjEuOS0uNy43LTEuMnpNNC42IDIwYy0uNiAwLTEuMS40LTEuMSAxdjEyYzAgLjUuNSAxIDEuMSAxIC42IDAgMS4xLS41IDEuMS0xVjIxYzAtLjYtLjUtMS0xLjEtMXoiLz48L3N2Zz48c3ZnIHg9Ijk5MCI+PHBhdGggZD0iTTggMjJjLS43IDAtMS4yLjQtMS4yIDF2MTBjMCAuNS41IDEgMS4xIDFTOSAzMy40IDkgMzNWMjNjMC0uNi0uNS0xLTEtMXptMy4yLTFjLS42IDAtMS4xLjQtMS4xIDF2MTFjMCAuNS41IDEgMSAxczEuMS0uNSAxLjEtMVYyMmMwLS42LS40LTEtMS0xem04LjYgMTEuNmwtNC40LTExYy0uMi0uNS0uOC0uOC0xLjMtLjYtLjYuMS0xIC43LS43IDEuMmw0LjMgMTFjLjIuNi44LjkgMS40LjcuNi0uMi45LS44LjctMS4zek00LjcgMTkuOWMtLjYgMC0xLjEuNS0xLjEgMXYxMmMwIC42LjUgMSAxIDFzMS4xLS40IDEuMS0xVjIxYzAtLjUtLjQtMS0xLTF6Ii8+PC9zdmc+PHN2ZyB4PSIxMDEyIj48cGF0aCBkPSJNOCAyMmExIDEgMCAwIDAtMS4xIDF2MTBjMCAuNS40IDEgMSAxczEtLjUgMS0xVjIzYzAtLjYtLjQtMS0xLTF6bTMtMWExIDEgMCAwIDAtMSAxdjExYzAgLjUuNSAxIDEgMSAuNyAwIDEuMS0uNSAxLjEtMVYyMmMwLS42LS40LTEtMS0xem04LjUgMTEuNmwtNC4zLTExQTEgMSAwIDAgMCAxNCAyMWExIDEgMCAwIDAtLjcgMS4zbDQuMyAxMWMuMi41LjguOCAxLjMuNi42LS4yLjktLjcuNy0xLjJ6TTQuNyAyMGExIDEgMCAwIDAtMSAxdjEyYzAgLjUuNSAxIDEgMSAuNiAwIDEuMS0uNSAxLjEtMVYyMWMwLS42LS41LTEtMS0xeiIvPjwvc3ZnPjxzdmcgeD0iMTAzNCI+PHBhdGggZD0iTTggMjJhMSAxIDAgMCAwLTEgMXYxMGMwIC41LjQgMSAxIDEgLjUgMCAxLS41IDEtMVYyM2MwLS42LS41LTEtMS0xem0zLTFhMSAxIDAgMCAwLTEgMXYxMWMwIC41LjUgMSAxIDEgLjYgMCAxLS41IDEtMVYyMmMwLS42LS40LTEtMS0xem04LjIgMTEuNmwtNC4xLTExYTEgMSAwIDAgMC0xLjMtLjYgMSAxIDAgMCAwLS43IDEuM2w0LjIgMTFjLjEuNi43LjggMS4zLjcuNS0uMi44LS44LjYtMS4zek00LjkgMjBhMSAxIDAgMCAwLTEgMXYxMmMwIC41LjQgMSAxIDEgLjUgMCAxLS41IDEtMVYyMWMwLS42LS41LTEtMS0xeiIvPjwvc3ZnPjxzdmcgeD0iMTA1NiI+PHVzZSBocmVmPSIjYm9va3MiLz48L3N2Zz48c3ZnIHg9IjEwNzgiPjx1c2UgaHJlZj0iI2Jvb2tzIi8+PC9zdmc+PC9zdmc+");animation-name:library-bookmark-animation;-moz-context-properties:fill,fill-opacity,stroke;stroke:var(--toolbarbutton-icon-fill-attention);}#library-animatable-box[animate="bookmark"]:-moz-locale-dir(rtl)>.toolbarbutton-animatable-image{animation-name:library-bookmark-animation-rtl;}#library-animatable-box[animate="bookmark"][fade]>.toolbarbutton-animatable-image{animation-name:library-bookmark-fade;}`;

        let uri = makeURI(
            "data:text/css;charset=UTF=8," + encodeURIComponent(css)
        );
        sss.sheetRegistered(uri, sss.AUTHOR_SHEET) ||
            sss.loadAndRegisterSheet(uri, sss.AUTHOR_SHEET);
    }

    if (gBrowserInit.delayedStartupFinished) {
        init();
    } else {
        let delayedListener = (subject, topic) => {
            if (
                topic == "browser-delayed-startup-finished" &&
                subject == window
            ) {
                Services.obs.removeObserver(delayedListener, topic);
                init();
            }
        };
        Services.obs.addObserver(
            delayedListener,
            "browser-delayed-startup-finished"
        );
    }
})();
