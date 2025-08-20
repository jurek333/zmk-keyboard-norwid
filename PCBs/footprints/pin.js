// Copyright (c) 2025 jurek 333
//
// SPDX-License-Identifier: MIT
//
// To view a copy of this license, visit https://opensource.org/license/mit/
//
// Author: @jurek333
//
// Description:
//  A reversible pin footprint with support for solder jumpers and traces. 
//
// Params
//    side: default is F for Front
//      the side on which to place the single-side footprint and designator, either F or B
//    reversible: default is false
//      if true, the footprint will be placed on both sides so that the PCB can be
//      reversible
//    include_traces: default is true
//      if true it will include traces that connect the jumper pads to the connector pins
//    trace_width: default is 0.250mm
//      allows to override the trace width that connects the jumper pads to the connector
//      pins. Not recommended to go below 0.25mm.
//    include_silkscreen: default is true
//      if true it will include the silkscreen. Recommended to be true to ensure connector
//      polarity is not reversed, which can lead to shorting and damage to the MCU
//    include_fabrication: default is true
//      if true it will include the outline of the connector in the fabrication layer
//    include_courtyard: default is true
//      if true it will include a courtyard outline around the connector and in front of it
//      to also account for the male connector plug and the wires. Recommended to be true
//      at least once in the development of a board to confirm sufficient clearance for the
//      connector and wires.
//    battery_connector_3dmodel_filename: default is ''
//      Allows you to specify the path to a 3D model STEP or WRL file to be
//      used when rendering the PCB. Use the ${VAR_NAME} syntax to point to
//      a KiCad configured path.
//    battery_connector_3dmodel_xyz_offset: default is [0, 0, 0]
//      xyz offset (in mm), used to adjust the position of the 3d model
//      relative the footprint.
//    battery_connector_3dmodel_xyz_scale: default is [1, 1, 1]
//      xyz scale, used to adjust the size of the 3d model relative to its
//      original size.
//    battery_connector_3dmodel_xyz_rotation: default is [0, 0, 0]
//      xyz rotation (in degrees), used to adjust the orientation of the 3d
//      model relative the footprint.

module.exports = {
  params: {
    designator: 'PIN',
    label: 'pin',
    side: 'F',
    reversible: false,
    include_traces: true,
    trace_width: 0.250,
    include_silkscreen: true,
    include_fabrication: true,
    include_courtyard: true,
    pin: { type: 'net', value: 'P0' }
  },
  body: p => {
    let local_nets = [
      p.local_net("1"),
    ];

    const standard_opening = `
    (footprint "jurek333:pin"
        (layer "${p.side}.Cu")
        ${p.at}
        (property "Reference" "${p.ref}"
            (at 0 4.8 ${p.r})
            (layer "${p.side}.SilkS")
            ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
        )
        `
    const front_fabrication = `
        (fp_line (start -1.5 -1.35) (end -1.5 6.25) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
        (fp_line (start -1.5 6.25) (end 1.5 6.25) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
        (fp_line (start 1.5 6.25) (end 1.5 -1.35) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
        (fp_line (start 1.5 -1.35) (end -1.5 -1.35) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
        `
    const front_courtyard = `
        (fp_line (start -1.7 -1.85) (end -1.7 10.5) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
        (fp_line (start -1.7 10.5) (end 1.7 10.5) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
        (fp_line (start 1.7 -1.85) (end -1.7 -1.85) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
        (fp_line (start 1.7 10.5) (end 1.7 -1.85) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
        `
    const front_silkscreen = `
        (fp_text user "${p.label}" (at 0 6 90) (unlocked yes) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) (justify right))
        )
        `
    const back_fabrication = `
        (fp_line (start -1.5 -1.35) (end -1.5 6.25) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
        (fp_line (start -1.5 6.25) (end 1.5 6.25) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
        (fp_line (start 1.5 6.25) (end 1.5 -1.35) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
        (fp_line (start 1.5 -1.35) (end -1.5 -1.35) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
        `
    const back_courtyard = `
        (fp_line (start -1.7 -1.85) (end -1.7 10.5) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
        (fp_line (start -1.7 10.5) (end 1.7 10.5) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
        (fp_line (start 1.7 -1.85) (end -1.7 -1.85) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
        (fp_line (start 1.7 10.5) (end 1.7 -1.85) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
        `
    const back_silkscreen = `
        (fp_text user "${p.label}" (at 0 6 90) (unlocked yes) (layer "B.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) (justify left mirror))
        )
        `
    const front_pads = `
        (pad "1" thru_hole oval (at 0 0 ${p.r}) (size 1.2 1.75) (drill 0.75) (layers "*.Cu" "*.Mask") ${p.pin.str})
        `
    const back_pads = `
        (pad "1" thru_hole oval (at 0 0 ${p.r}) (size 1.2 1.75) (drill 0.75) (layers "*.Cu" "*.Mask") ${p.pin.str})
        `
    const reversible_pads = `
        (pad "11" thru_hole oval (at 0 0 ${p.r}) (size 1.2 1.75) (drill 0.75) (layers "*.Cu" "*.Mask") ${local_nets[0].str})
        (pad "21" smd custom (at 0 1.8 ${180 + p.r}) (size 0.1 0.1) (layers "F.Cu" "F.Mask" "F.Paste")
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly
                    (pts
                        (xy 0.6 0.4)
                        (xy -0.6 0.4)
                        (xy -0.6 0.2)
                        (xy 0 -0.4)
                        (xy 0.6 0.2)
                    )   
                    (width 0)
                    (fill yes)
                )
            )
            ${local_nets[0]}
        )
        (pad "31" smd custom (at 0 1.8 ${180 + p.r}) (size 0.1 0.1) (layers "B.Cu" "B.Mask" "B.Paste")
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly
                    (pts
                        (xy 0.6 0.4)
                        (xy -0.6 0.4)
                        (xy -0.6 0.2)
                        (xy 0 -0.4)
                        (xy 0.6 0.2)
                    )
                    (width 0)
                    (fill yes)
                )
            )
            ${local_nets[0]}
        )
        (pad "1" smd custom (at 0 2.816 ${180 + p.r}) (size 1.2 0.5) (layers "F.Cu" "F.Mask" "F.Paste") ${p.pin.str}
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly
                    (pts
                        (xy 0.6 0)
                        (xy -0.6 0)
                        (xy -0.6 1)
                        (xy 0 0.4)
                        (xy 0.6 1)
                    )
                    (width 0)
                    (fill yes)
                )
            )
        )
        (pad "1" smd custom (at 0 2.816 ${180 + p.r}) (size 1.2 0.5) (layers "B.Cu" "B.Mask" "B.Paste") ${p.pin.str}
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly
                    (pts
                        (xy 0.6 0)
                        (xy -0.6 0)
                        (xy -0.6 1)
                        (xy 0 0.4)
                        (xy 0.6 1)
                    )
                    (width 0)
                    (fill yes)
                )
            )
        )
        `
    const standard_closing = `
    )
        `

    const reversible_traces = ` 
    (segment (start ${p.eaxy(0, 1.8)}) (end ${p.eaxy(0, 0)}) (width ${p.trace_width}) (layer "F.Cu") (net ${local_nets[0].index}))
    (segment (start ${p.eaxy(0, 1.8)}) (end ${p.eaxy(0, 0)}) (width ${p.trace_width}) (layer "B.Cu") (net ${local_nets[0].index}))
        `

    let final = standard_opening;

    if (p.side == "F" || p.reversible) {
      if (p.include_fabrication) {
        final += front_fabrication;
      }
      if (p.include_courtyard) {
        final += front_courtyard;
      }
      if (p.include_silkscreen) {
        final += front_silkscreen;
      }
    }
    if (p.side == "B" || p.reversible) {
      if (p.include_fabrication) {
        final += back_fabrication;
      }
      if (p.include_courtyard) {
        final += back_courtyard;
      }
      if (p.include_silkscreen) {
        final += back_silkscreen;
      }
    }
    if (p.reversible) {
      final += reversible_pads;
    } else if (p.side == "F") {
      final += front_pads;
    } else if (p.side == "B") {
      final += back_pads;
    }
    final += standard_closing;
    if (p.reversible && p.include_traces) {
      final += reversible_traces;
    }
    return final;
  }
}

