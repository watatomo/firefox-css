//// disables telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref(
    "datareporting.healthreport.documentServerURI",
    "http://%(server)s/healthreport/"
);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

//// make the theme work properly
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.proton.places-tooltip.enabled", true);
user_pref("layout.css.moz-document.content.enabled", true);

//// eliminate the blank white window during startup
user_pref("browser.startup.blankWindow", false);
user_pref("browser.startup.preXulSkeletonUI", false);

// required for icons with data URLs
user_pref("svg.context-properties.content.enabled", true);

// https://bugzilla.mozilla.org/show_bug.cgi?id=1792319#c16 💀
// user_pref("layout.css.cached-scrollbar-styles.enabled", true);

// allow the color-mix() CSS function
user_pref("layout.css.color-mix.enabled", true);
// other CSS features
user_pref("layout.css.moz-outline-radius.enabled", true);
user_pref("layout.css.has-selector.enabled", true);

//// avoid native styling
user_pref("browser.display.windows.non_native_menus", 1);
user_pref("widget.content.allow-gtk-dark-theme", true);

// disable urlbar result group labels since we don't use them
user_pref("browser.urlbar.groupLabels.enabled", false);
// corresponds to the system color Highlight
// user_pref("ui.highlight", "hsl(220, 91%, 54%)");
// background for selected <option> elements and others
user_pref("ui.selecteditem", "#313244");
// text color for selected <option> elements and others
user_pref("ui.selecteditemtext", "#cdd6f4");
//// tooltip colors
user_pref("ui.infotext", "#cdd6f4");
user_pref("ui.infobackground", "hsl(240, 21%, 15%)");

user_pref("xpinstall.signatures.required", false);
user_pref("extensions.autoDisableScopes", 0);

user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.display.use_system_colors", false);
user_pref("browser.privatebrowsing.enable-new-indicator", false);
user_pref("accessibility.mouse_focuses_formcontrol", 0);
user_pref("browser.tabs.tabMinWidth", 76);
user_pref("browser.urlbar.accessibility.tabToSearch.announceResults", false);
user_pref("browser.urlbar.richSuggestions.tail", false);
user_pref("browser.urlbar.searchTips", false);

user_pref("full-screen-api.warning.timeout", 0);
// whether to show content dialogs within tabs or above tabs
user_pref("prompts.contentPromptSubDialog", true);
// when using the keyboard to navigate menus, skip past disabled items
user_pref("ui.skipNavigatingDisabledMenuItem", 1);
user_pref("ui.prefersReducedMotion", 0);
// reduce the delay before showing submenus (e.g. History > Recently Closed Tabs)
user_pref("ui.submenuDelay", 100);
// the delay before a tooltip appears when hovering an element (default 300ms)
user_pref("ui.tooltipDelay", 300);
// should pressing the Alt key alone focus the menu bar?
user_pref("ui.key.menuAccessKeyFocuses", false);
// reduce update frequency
user_pref("app.update.suppressPrompts", true);

// set the default background color for color-scheme: dark. see it for example on about:blank
user_pref("browser.display.background_color.dark", "#181825");
// make `outline-style: auto` result in one big stroke instead of two contrasting strokes
user_pref("widget.non-native-theme.solid-outline-style", true);

//// findbar highlight and selection colors
// user_pref("ui.textHighlightBackground", "#1e66f5");
// user_pref("ui.textHighlightForeground", "#eff1f5");
// user_pref("ui.textSelectBackground", "#eff1f5");
// user_pref("ui.textSelectAttentionBackground", "#ea76cb");
// user_pref("ui.textSelectAttentionForeground", "#eff1f5");
// user_pref("ui.textSelectDisabledBackground", "#1e66f5");
// user_pref("ui.textSelectBackgroundAttention", "#ea76cb");
// user_pref("ui.textSelectBackgroundDisabled", "#1e66f5");
//// spell check style
// user_pref("ui.SpellCheckerUnderline", "#e64553");
// user_pref("ui.SpellCheckerUnderlineStyle", 1);
//// IME style (for example when typing pinyin or hangul)
// user_pref("ui.IMERawInputBackground", "#4c4f69");
// user_pref("ui.IMESelectedRawTextBackground", "#1e66f5");
////

//// windows font settings - does nothing on macOS or linux
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref(
    "gfx.font_rendering.cleartype_params.force_gdi_classic_for_families",
    ""
);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 6);
user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 1);
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);

//// quick actions - what appears on the url/search bar when clicked
user_pref("browser.urlbar.quickactions.enabled", false);
user_pref("browser.urlbar.quickactions.showInZeroPrefix", false);
user_pref("browser.urlbar.quickactions.showPrefs", false);
user_pref("browser.urlbar.shortcuts.quickactions", false);
user_pref("browser.urlbar.suggest.quickactions", false);
