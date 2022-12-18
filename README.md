# WIP

Uses [simpleMenuWizard](https://github.com/stonecrusher/simpleMenuWizard). Takes some code from [DuskFox](https://github.com/aminomancer/uc.css.js) and MrOtherGuy's [CSS hacks](https://github.com/MrOtherGuy/firefox-csshacks).

This theme uses userscripts, [but with how Firefox keeps crashing on me lately](https://bugzilla.mozilla.org/show_bug.cgi?id=1792319), I tried to keep it as minimal as possible (for now). There seems to be an issue with the tabs lately but I can't figure out what's causing it.

## Installation

1. Place the files in the `program` folder from [fx-autoconfig](https://github.com/MrOtherGuy/fx-autoconfig) inside your Firefox install folder.
2. Place `chrome` inside your profile folder.
3. Also place `user.js` inside your profile folder. Make sure it's _not_ inside `chrome`.

## Configuration

Configuration is located in `_config.css`.

`userContent.css` is generated from the files in `src`. This customizes things like the `about:` pages and isn't required for the theme.

The scripts in `package.json` are there to help me copy and paste the files in a relatively fast manner. Feel free to replace the paths there with your own.
