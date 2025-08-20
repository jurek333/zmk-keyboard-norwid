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


function mounting_extrude_4_9_outline_fn(){
    return CAG.circle({"center":[202.5,-167.5],"radius":1.5})
.union(
    CAG.circle({"center":[140,-203.5],"radius":1.5})
).union(
    CAG.circle({"center":[160,-142],"radius":1.5})
).union(
    CAG.circle({"center":[189.1268526,-236.6433568],"radius":1.5})
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
            
            

                function holes_case_fn() {
                    

                // creating part 0 of case holes
                let holes__part_0 = mounting_extrude_4_9_outline_fn();

                // make sure that rotations are relative
                let holes__part_0_bounds = holes__part_0.getBounds();
                let holes__part_0_x = holes__part_0_bounds[0].x + (holes__part_0_bounds[1].x - holes__part_0_bounds[0].x) / 2
                let holes__part_0_y = holes__part_0_bounds[0].y + (holes__part_0_bounds[1].y - holes__part_0_bounds[0].y) / 2
                holes__part_0 = translate([-holes__part_0_x, -holes__part_0_y, 0], holes__part_0);
                holes__part_0 = rotate([0,0,0], holes__part_0);
                holes__part_0 = translate([holes__part_0_x, holes__part_0_y, 0], holes__part_0);

                holes__part_0 = translate([0,0,0], holes__part_0);
                let result = holes__part_0;
                
            
                    return result;
                }
            
            

                function mountingStands_case_fn() {
                    

                // creating part 0 of case mountingStands
                let mountingStands__part_0 = stands_case_fn();

                // make sure that rotations are relative
                let mountingStands__part_0_bounds = mountingStands__part_0.getBounds();
                let mountingStands__part_0_x = mountingStands__part_0_bounds[0].x + (mountingStands__part_0_bounds[1].x - mountingStands__part_0_bounds[0].x) / 2
                let mountingStands__part_0_y = mountingStands__part_0_bounds[0].y + (mountingStands__part_0_bounds[1].y - mountingStands__part_0_bounds[0].y) / 2
                mountingStands__part_0 = translate([-mountingStands__part_0_x, -mountingStands__part_0_y, 0], mountingStands__part_0);
                mountingStands__part_0 = rotate([0,0,0], mountingStands__part_0);
                mountingStands__part_0 = translate([mountingStands__part_0_x, mountingStands__part_0_y, 0], mountingStands__part_0);

                mountingStands__part_0 = translate([0,0,0], mountingStands__part_0);
                let result = mountingStands__part_0;
                
            

                // creating part 1 of case mountingStands
                let mountingStands__part_1 = holes_case_fn();

                // make sure that rotations are relative
                let mountingStands__part_1_bounds = mountingStands__part_1.getBounds();
                let mountingStands__part_1_x = mountingStands__part_1_bounds[0].x + (mountingStands__part_1_bounds[1].x - mountingStands__part_1_bounds[0].x) / 2
                let mountingStands__part_1_y = mountingStands__part_1_bounds[0].y + (mountingStands__part_1_bounds[1].y - mountingStands__part_1_bounds[0].y) / 2
                mountingStands__part_1 = translate([-mountingStands__part_1_x, -mountingStands__part_1_y, 0], mountingStands__part_1);
                mountingStands__part_1 = rotate([0,0,0], mountingStands__part_1);
                mountingStands__part_1 = translate([mountingStands__part_1_x, mountingStands__part_1_y, 0], mountingStands__part_1);

                mountingStands__part_1 = translate([0,0,0], mountingStands__part_1);
                result = result.subtract(mountingStands__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return mountingStands_case_fn();
            }

        