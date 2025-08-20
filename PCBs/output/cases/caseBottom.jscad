function caseBoard_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[85.5,-211.7636517],[85.5,-150.25]]).appendArc([87.5,-148.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([103.5953912,-148.25]).appendArc([104.3727922,-148.0927283],{"radius":2,"clockwise":false,"large":false}).appendPoint([135.6272079,-134.9072717]).appendArc([136.4046088,-134.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([215,-134.75]).appendArc([217,-136.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([217,-219.8570845]).appendArc([217.3746282,-221.0224885],{"radius":2,"clockwise":false,"large":false}).appendPoint([232.4275637,-242.0165973]).appendArc([231.9102625,-244.8469877],{"radius":2,"clockwise":true,"large":false}).appendPoint([195.4599279,-269.1051704]).appendArc([193.3975397,-269.1978182],{"radius":2,"clockwise":true,"large":false}).appendPoint([159.5456824,-250.8177592]).appendArc([158.5,-249.0601251],{"radius":2,"clockwise":true,"large":false}).appendPoint([158.5,-216.2363483]).appendArc([156.5136984,-214.2363952],{"radius":2,"clockwise":false,"large":false}).appendPoint([87.4863016,-213.7636048]).appendArc([85.5,-211.7636517],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}




                function caseBottom_case_fn() {
                    

                // creating part 0 of case caseBottom
                let caseBottom__part_0 = caseBoard_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let caseBottom__part_0_bounds = caseBottom__part_0.getBounds();
                let caseBottom__part_0_x = caseBottom__part_0_bounds[0].x + (caseBottom__part_0_bounds[1].x - caseBottom__part_0_bounds[0].x) / 2
                let caseBottom__part_0_y = caseBottom__part_0_bounds[0].y + (caseBottom__part_0_bounds[1].y - caseBottom__part_0_bounds[0].y) / 2
                caseBottom__part_0 = translate([-caseBottom__part_0_x, -caseBottom__part_0_y, 0], caseBottom__part_0);
                caseBottom__part_0 = rotate([0,0,0], caseBottom__part_0);
                caseBottom__part_0 = translate([caseBottom__part_0_x, caseBottom__part_0_y, 0], caseBottom__part_0);

                caseBottom__part_0 = translate([0,0,0], caseBottom__part_0);
                let result = caseBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return caseBottom_case_fn();
            }

        