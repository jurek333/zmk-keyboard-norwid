function stands_extrude_4_9_outline_fn(){
    return CAG.circle({"center":[202.5,-167.5],"radius":2.5})
.union(
    CAG.circle({"center":[140,-203.5],"radius":2.5})
).union(
    CAG.circle({"center":[160,-142],"radius":2.5})
).union(
    CAG.circle({"center":[189.1268526,-236.6433568],"radius":2.5})
).extrude({ offset: [0, 0, 4.9] });
}




                function stands_case_fn() {
                    

                // creating part 0 of case stands
                let stands__part_0 = stands_extrude_4_9_outline_fn();

                // make sure that rotations are relative
                let stands__part_0_bounds = stands__part_0.getBounds();
                let stands__part_0_x = stands__part_0_bounds[0].x + (stands__part_0_bounds[1].x - stands__part_0_bounds[0].x) / 2
                let stands__part_0_y = stands__part_0_bounds[0].y + (stands__part_0_bounds[1].y - stands__part_0_bounds[0].y) / 2
                stands__part_0 = translate([-stands__part_0_x, -stands__part_0_y, 0], stands__part_0);
                stands__part_0 = rotate([0,0,0], stands__part_0);
                stands__part_0 = translate([stands__part_0_x, stands__part_0_y, 0], stands__part_0);

                stands__part_0 = translate([0,0,0], stands__part_0);
                let result = stands__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return stands_case_fn();
            }

        