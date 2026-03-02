/*
 * display_mj.c
 *
 * ZMK display widget that renders the text "MJ" on a Sharp LS0xx
 * memory LCD using the Zephyr LVGL bindings built into ZMK.
 *
 * This runs as a ZMK display widget – ZMK initialises the display
 * subsystem and LVGL for us; we just create the label.
 */

#include <lvgl.h>
#include <zephyr/kernel.h>
#include <zephyr/logging/log.h>

#include <zmk/display.h>

LOG_MODULE_DECLARE(zmk, CONFIG_ZMK_LOG_LEVEL);

/* ------------------------------------------------------------------ */
/* LVGL label object                                                   */
/* ------------------------------------------------------------------ */
static lv_obj_t *mj_label;

/* ------------------------------------------------------------------ */
/* Widget initialisation                                               */
/*                                                                     */
/* ZMK calls zmk_display_init() (in zmk/display.c) during boot, which */
/* in turn calls every function registered with                        */
/* ZMK_DISPLAY_WIDGET_LISTENER().  We hook in here.                    */
/* ------------------------------------------------------------------ */
static int display_mj_init(void)
{
    /* Get the active LVGL screen */
    lv_obj_t *screen = lv_scr_act();

    /* Create a label widget */
    mj_label = lv_label_create(screen);
    if (!mj_label) {
        LOG_ERR("Failed to create MJ label");
        return -ENOMEM;
    }

    /* Set the text */
    lv_label_set_text(mj_label, "MJ");

    /*
     * Use a large built-in LVGL font so "MJ" is clearly readable.
     * lv_font_montserrat_48 is the biggest shipped with ZMK/LVGL.
     * If your display is small (128×128) you may prefer _32 or _24.
     */
    lv_obj_set_style_text_font(mj_label, &lv_font_montserrat_48, LV_PART_MAIN);

    /* White text on the black LS0xx background */
    lv_obj_set_style_text_color(mj_label, lv_color_white(), LV_PART_MAIN);

    /* Centre the label on the screen */
    lv_obj_align(mj_label, LV_ALIGN_CENTER, 0, 0);

    LOG_INF("MJ display widget initialised");
    return 0;
}

/* Register as a ZMK display widget so it is called at boot */
ZMK_DISPLAY_WIDGET_LISTENER(display_mj, 0, display_mj_init, NULL)
