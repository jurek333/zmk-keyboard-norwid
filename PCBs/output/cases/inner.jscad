function board_extrude_6_5_outline_fn(){
    return new CSG.Path2D([[86.5,-210.7636517],[86.5,-151.25]]).appendArc([88.5,-149.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([103.5953912,-149.25]).appendArc([104.3727922,-149.0927283],{"radius":2,"clockwise":false,"large":false}).appendPoint([135.6272079,-135.9072717]).appendArc([136.4046088,-135.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([214,-135.75]).appendArc([216,-137.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([216,-219.8632929]).appendArc([216.3680904,-221.0195243],{"radius":2,"clockwise":false,"large":false}).appendPoint([231.0556929,-241.7496676]).appendArc([230.5320417,-244.5707604],{"radius":2,"clockwise":true,"large":false}).appendPoint([195.7540121,-267.7216624]).appendArc([193.6914361,-267.8144352],{"radius":2,"clockwise":true,"large":false}).appendPoint([160.5456824,-249.8177592]).appendArc([159.5,-248.0601251],{"radius":2,"clockwise":true,"large":false}).appendPoint([159.5,-215.2363483]).appendArc([157.5136984,-213.2363952],{"radius":2,"clockwise":false,"large":false}).appendPoint([88.4863016,-212.7636048]).appendArc([86.5,-210.7636517],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 6.5] });
}




                function inner_case_fn() {
                    

                // creating part 0 of case inner
                let inner__part_0 = board_extrude_6_5_outline_fn();

                // make sure that rotations are relative
                let inner__part_0_bounds = inner__part_0.getBounds();
                let inner__part_0_x = inner__part_0_bounds[0].x + (inner__part_0_bounds[1].x - inner__part_0_bounds[0].x) / 2
                let inner__part_0_y = inner__part_0_bounds[0].y + (inner__part_0_bounds[1].y - inner__part_0_bounds[0].y) / 2
                inner__part_0 = translate([-inner__part_0_x, -inner__part_0_y, 0], inner__part_0);
                inner__part_0 = rotate([0,0,0], inner__part_0);
                inner__part_0 = translate([inner__part_0_x, inner__part_0_y, 0], inner__part_0);

                inner__part_0 = translate([0,0,0], inner__part_0);
                let result = inner__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return inner_case_fn();
            }

        