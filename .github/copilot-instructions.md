This is a project of zmk split keyboard with a screen. You can ignore folders PCBs and Extras, as they contains files not related to the firmware.
---
The projekt uses git submodules to manage dependencies on external footprint repositories.
---
Here we have two shields:
- norwid which is a firmware for zmk keyboard
- nice_norwid which addsa a 160x68 sharp (e-Paper like) screen using ls0xx driver
All is build by GitHub actions.
---
To build the firmware, you need to include git submodules. Build process is described in https://zmk.dev/docs/development/local-toolchain/setup/native
---
