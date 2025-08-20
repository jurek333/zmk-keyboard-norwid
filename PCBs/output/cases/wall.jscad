function caseBoard_extrude_6_5_outline_fn(){
    return new CSG.Path2D([[85,-212.208482],[85,-149.75]]).appendArc([87,-147.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([103.5953912,-147.75]).appendArc([104.3727922,-147.5927283],{"radius":2,"clockwise":false,"large":false}).appendPoint([135.6272079,-134.4072717]).appendArc([136.4046088,-134.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([218,-134.25]).appendArc([220,-136.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([220,-223.8396985]).appendArc([220.3931454,-225.0305043],{"radius":2,"clockwise":false,"large":false}).appendPoint([233.0757584,-242.1442216]).appendArc([232.5768865,-245.0000723],{"radius":2,"clockwise":true,"large":false}).appendPoint([195.3128874,-269.7969181]).appendArc([193.2505873,-269.8895074],{"radius":2,"clockwise":true,"large":false}).appendPoint([159.0456824,-251.3177592]).appendArc([158,-249.5601251],{"radius":2,"clockwise":true,"large":false}).appendPoint([158,-214.791518]).appendArc([155.9589128,-212.7919401],{"radius":2,"clockwise":false,"large":false}).appendPoint([87.0410872,-214.2080599]).appendArc([85,-212.208482],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 6.5] });
}


function board_extrude_6_5_outline_fn(){
    return new CSG.Path2D([[86.5,-210.7636517],[86.5,-151.25]]).appendArc([88.5,-149.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([103.5953912,-149.25]).appendArc([104.3727922,-149.0927283],{"radius":2,"clockwise":false,"large":false}).appendPoint([135.6272079,-135.9072717]).appendArc([136.4046088,-135.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([214,-135.75]).appendArc([216,-137.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([216,-219.8632929]).appendArc([216.3680904,-221.0195243],{"radius":2,"clockwise":false,"large":false}).appendPoint([231.0556929,-241.7496676]).appendArc([230.5320417,-244.5707604],{"radius":2,"clockwise":true,"large":false}).appendPoint([195.7540121,-267.7216624]).appendArc([193.6914361,-267.8144352],{"radius":2,"clockwise":true,"large":false}).appendPoint([160.5456824,-249.8177592]).appendArc([159.5,-248.0601251],{"radius":2,"clockwise":true,"large":false}).appendPoint([159.5,-215.2363483]).appendArc([157.5136984,-213.2363952],{"radius":2,"clockwise":false,"large":false}).appendPoint([88.4863016,-212.7636048]).appendArc([86.5,-210.7636517],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 6.5] });
}




                function _outter_case_fn() {
                    

                // creating part 0 of case _outter
                let _outter__part_0 = caseBoard_extrude_6_5_outline_fn();

                // make sure that rotations are relative
                let _outter__part_0_bounds = _outter__part_0.getBounds();
                let _outter__part_0_x = _outter__part_0_bounds[0].x + (_outter__part_0_bounds[1].x - _outter__part_0_bounds[0].x) / 2
                let _outter__part_0_y = _outter__part_0_bounds[0].y + (_outter__part_0_bounds[1].y - _outter__part_0_bounds[0].y) / 2
                _outter__part_0 = translate([-_outter__part_0_x, -_outter__part_0_y, 0], _outter__part_0);
                _outter__part_0 = rotate([0,0,0], _outter__part_0);
                _outter__part_0 = translate([_outter__part_0_x, _outter__part_0_y, 0], _outter__part_0);

                _outter__part_0 = translate([0,0,0], _outter__part_0);
                let result = _outter__part_0;
                
            
                    return result;
                }
            
            

                function _inner_case_fn() {
                    

                // creating part 0 of case _inner
                let _inner__part_0 = board_extrude_6_5_outline_fn();

                // make sure that rotations are relative
                let _inner__part_0_bounds = _inner__part_0.getBounds();
                let _inner__part_0_x = _inner__part_0_bounds[0].x + (_inner__part_0_bounds[1].x - _inner__part_0_bounds[0].x) / 2
                let _inner__part_0_y = _inner__part_0_bounds[0].y + (_inner__part_0_bounds[1].y - _inner__part_0_bounds[0].y) / 2
                _inner__part_0 = translate([-_inner__part_0_x, -_inner__part_0_y, 0], _inner__part_0);
                _inner__part_0 = rotate([0,0,0], _inner__part_0);
                _inner__part_0 = translate([_inner__part_0_x, _inner__part_0_y, 0], _inner__part_0);

                _inner__part_0 = translate([0,0,0], _inner__part_0);
                let result = _inner__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outter_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _inner_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall_case_fn();
            }

        