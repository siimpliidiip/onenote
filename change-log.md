[//]: #@corifeus-header

# 📚 P3X OneNote Linux

                        
[//]: #@corifeus-header:end

## Change log


### v2021.10.167
Released on 10/28/2021
* BUGFIX: Enhance boot speed - 1 second faster (but it is still very slow, because the Electron webview issues)


### v2021.10.165
Released on 10/28/2021
* BUGFIX: https://github.com/patrikx3/onenote/issues/157


### v2021.10.158
Released on 10/26/2021
* FEATURE: Changed the `change-log.md` file name.



### v2021.10.155
Released on 10/21/2021
* FEATURE: Optimized boot speed.

### v2021.10.133 - 9/30/2021
* FEATURE: Added `--minimized` argument.

### v2021.10.130
* BUGFIX: Fix Electron 14 error.

### v2021.10.111
* BUGFIX: Replace `configstore` to `electron-store`

### v2021.10.109
* FEATURE: In the link popup external buttons moved from center to the right. 

### v2021.10.108
* BUGFIX: https://github.com/patrikx3/onenote/issues/152

### v2021.10.106
* BUGFIX: https://github.com/patrikx3/onenote/issues/152

### v2021.10.104
* CHORE: Update deps.

### v2021.4.192
* CHORE: Update deps.

### v2021.4.190
* FEATURE: Enable zoom in the bottom toolbar.

### v2021.4.187
* FEATURE: Updated German translation.

### v2021.4.185
* BUGFIX: Proxy got baaaad. Fix is done.

### v2021.4.175
* FEATURE: The bookmarks are sorted by alphabetically.

### v2021.4.173
* FEATURE: Enhanced dark mode by keeping the original colors (a bit shift, but not invert like before).

### v2021.4.171
* FEATURE: Added Italian translation.

### v2021.4.169
* FEATURE: Enable dark mode (with quirks) using invert all colors. Not perfect, but it works and is bettter for you eyes.

### v2021.4.166
* FEATURE: Added Dutch translation.

### v2021.4.162
* BUILD: Add Ubuntu 32 bit AppImage version

### v2021.4.156
* BUGFIX: Fixed the latest Electron v12 version (it was crashing)

### v2021.4.154
* BUGFIX: Electron v12 is crashing when clicking on a link (build with Electron v11, works)

### v2021.4.152
* FEATURE: Corporate login fix.

### v2021.4.147
* FEATURE: The menu is by default will show the menu, but in the settings, you can hide it and only show with ALT.

### v2021.4.144
* FEATURE: Add `rpm` package format.

### v2021.4.140
* FEATURE: Add `deb` package format.

### v2021.4.136
* BUGFIX: The tray is more stable, but it is a hack, not perfect.

### v2021.4.132
* BUGFIX: The tray is more stable, but it is a hack, not perfect.

### v2021.4.122
* BUGFIX: The tray is more stable, but it is a hack, not perfect.

### v2021.4.113
* BUGFIX: The tray is more stable, but it is a hack, not perfect.

### v2021.4.103
* CHORE: Update deps

### v2021.4.101
* BUGFIX: Proxy settings was not loading on runing, only during setting the proxy (https://github.com/patrikx3/onenote/issues/128)

### v2020.10.189
* BUGFIX: The bookmarks editor title was wrong, showing adding.

### v2020.10.187
* FEATURE: Add bookmarks menu.

### v2020.10.179
* BUILD: Removed 32 bit version in Linux.

### v2020.10.178
* BUGFIX: Fix button order by using Material Design Specs.

### v2020.10.164
* BUGFIX: Build problem.

### v2020.10.159
* BUGFIX: French build fix.

### v2020.10.157
* FEATURE: Added French language.

### v2020.10.155
* BUILD: Fix newer build from `electron-builder`.

### v2020.10.132
* CHORE: Updated deps.

### v2020.10.123
* BUGFIX: Adds new translations for portuguese (https://github.com/patrikx3/onenote/pull/114)

### v2020.10.111
* BUGFIX: About blank fix (not full solution)

### v2020.10.109
* FEATURE: Back/forward button

### v2020.10.107
* FEATURE: Back/forward button

### v2020.10.105
* FEATURE: Tuned bottom toolbar

### v2020.10.103
* FEATURE: Since menu is not always showing, on the bottom toolbar is always showing a donate button.

### v2020.10.101
* FEATURE: GUI align layout on confirm popup (reverse button order) 
* FEATURE: The menu is initial hidden, you can enable by clicking ALT. 

### v2020.4.200
* FEATURE: disable all AngularJs/AngularJs Material animations.

### v2020.4.197
* BUGFIX: Remove Fontawesome and jQuery, as we are not using.

### v2020.4.185
* CORE: update deps

### v2020.4.167
* BUGFIX: Minor translation fix, based on [Github Pull 100](https://github.com/patrikx3/onenote/pull/100)

### v2020.4.157
* FEATURE: Takes care of [Github Issue #97](https://github.com/patrikx3/onenote/issues/97) - Option to Disable Internal / External Popup 

### v2020.4.154
* FEATURE: Added ARM version.

### v2020.4.131
* CHORE: Update NPM packages.

### v2020.4.119
* BUG: The set proxy menu was not working.

### v2020.4.115
* FEATURE: Added Spanish translation.

### v2020.4.109
* CHORE: Upgrade to Electron v8.

### v2020.4.100
* FEAT: Ability to hide the main menu (in tray mode only).

### v2019.10.318
* FEAT: Portuguese locale in the GUI enhance.

### v2019.10.317
* FEAT: Portuguese locale in the GUI.

### v2019.10.301
* Bugfix: configstore error

### v2019.10.211
* CHORE: Upgraded Electron v4 to v6 finally and using just 1 icon 🙌

### v2019.10.202
* Bugfix: Build error.

### v2019.10.230
* Bugfix: Electron v6 was generating twice icons so I reverted to v4.2.8

### v2019.10.127
* CHORE: Upgraded Electron v4 to v6.

### v2019.10.117
* BUGFIX: DISABLE_WAYLAND fix
  * https://github.com/patrikx3/onenote/issues/70
  * https://github.com/patrikx3/onenote/pull/71

### v2019.4.122
* BUGFIX: configstore v5 is not working with SNAP, had to revert to configstore v4
  * https://github.com/patrikx3/onenote/issues/68

### v2019.4.115
* BUGFIX: The cursor sometimes hidden
  * https://github.com/patrikx3/onenote/issues/67

### v2019.4.114
* BUGFIX: Since the `Language` menu shift from the `Check updates` `Help` to `View`.

### v2019.4.108
* CHORE: Revert to Electron v4, as showing 2 icons with the hack.

### v2019.4.104
* CHORE: Upgraded to Electron v5
* BUGFIX: Electron was not working sandbox, I worked it out with a script in `src/build/after-pack.js`

### v2019.4.101
* BUGFIX: Minor translation issue.

### v2019.4.42
* BUGFIX: Revert Electron to v4.2.1 as there is an SUID permission, https://github.com/patrikx3/onenote/issues/63

### v2019.4.39
* FEATURE: New `OneNote 2019` icon
* FEATURE: German translation, able to try to guess `Online Onenote` language, but not always working ...

### v2019.4.33
FEATURE: Added in the `Action` menu to go to any URL.

### v2019.4.32
FEATURE: The link chooser was missing the cancel button.

### v2019.4.31
CHORE: Updated all dependencies.

### v2019.4.26
FEATURE: the Electron GUI color (you can check in the `Set Proxy` theme) is switched form blue to purple

### v2019.4.24
FEATURE: Allows using multiple instances (with some quirks, as the config will not be synchronized, so it can provide wrong settings)

### v2019.4.21
FEATURE: Reverted added emoji in the title (notebook)

### v2019.4.19
FEATURE: Added emoji in the title (notebook)

### v2019.4.17
FEATURE: The settings tray menu is a checkbox now (it was a button and different labels).

### v2019.4.12
BUGFIX: the tray was giving a "tray was already destroyed" error

### v2019.4.8
FEATURE: for all links in P3X OneNote is left for the user to decide how the links are handled - as internal or external

### v2019.4.7
* BUGFIX: the tray was showing all the time, now, it only shown if the close button behavior is happening by minimize to the tray

### v2019.02.17
* BUGFIX: Added info, that not every case can be handled.
* BUGFIX: On the sidebar on notebooks it was opening a new window, it is quite hacky, but is supposed to be working.

### v2019.02.16
* BUGFIX: On the sidebar on notebooks it was opening a new window, it is quite hacky, but is supposed to be working.

### v2019.02.04
* BUGFIX: Donation button was Hungarian, now is supposed to be automatically by browser locale.

### v2019.02.02
* FEATURE: Disable/enable main timer on window blur/focus
* CHORE: upgrade to Electron 4.0.4 


### v2019.01.24
* CHORE: upgrade to Electron 4.0.2 

### v2019.01.18
* BUGFIX: it was saving the window position and size, but it is not correct, because the user could change 2 monitors to 1 monitor and could save incorrect positions, so I disabled this option


[//]: #@corifeus-footer

---

🙏 This is an open-source project. Star this repository, if you like it, or even donate to maintain the servers and the development. Thank you so much!

Possible, this server, rarely, is down, please, hang on for 15-30 minutes and the server will be back up.

All my domains ([patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com)) could have minor errors, since I am developing in my free time. However, it is usually stable.

**Note about versioning:** Versions are cut in Major.Minor.Patch schema. Major is always the current year. Minor is either 4 (January - June) or 10 (July - December). Patch is incremental by every build. If there is a breaking change, it should be noted in the readme.


---

[**P3X-ONENOTE**](https://corifeus.com/onenote) Build v2021.10.174

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)


## P3X Sponsor

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com/?from=patrikx3)

[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/?from=patrikx3)




[//]: #@corifeus-footer:end
