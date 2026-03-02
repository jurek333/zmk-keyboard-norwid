cmake_minimum_required(VERSION 3.20)

# Only compile display code when ZMK display support is enabled
if(CONFIG_ZMK_DISPLAY)
    target_sources(app PRIVATE src/display_mj.c)
endif()
