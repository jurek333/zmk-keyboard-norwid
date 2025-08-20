function caseBoard_extrude_6_5_outline_fn(){
    return new CSG.Path2D([[85,-212.208482],[85,-149.75]]).appendArc([87,-147.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([105.5430277,-147.75]).appendArc([106.4116261,-147.5515374],{"radius":2,"clockwise":false,"large":false}).appendPoint([133.5883739,-134.4484626]).appendArc([134.4569723,-134.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([218,-134.25]).appendArc([220,-136.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([220,-223.8396985]).appendArc([220.3931454,-225.0305043],{"radius":2,"clockwise":false,"large":false}).appendPoint([233.0757584,-242.1442216]).appendArc([232.5768865,-245.0000723],{"radius":2,"clockwise":true,"large":false}).appendPoint([195.3128874,-269.7969181]).appendArc([193.2505873,-269.8895074],{"radius":2,"clockwise":true,"large":false}).appendPoint([159.0456824,-251.3177592]).appendArc([158,-249.5601251],{"radius":2,"clockwise":true,"large":false}).appendPoint([158,-214.791518]).appendArc([155.9589128,-212.7919401],{"radius":2,"clockwise":false,"large":false}).appendPoint([87.0410872,-214.2080599]).appendArc([85,-212.208482],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 6.5] });
}




                function outter_case_fn() {
                    

                // creating part 0 of case outter
                let outter__part_0 = caseBoard_extrude_6_5_outline_fn();

                // make sure that rotations are relative
                let outter__part_0_bounds = outter__part_0.getBounds();
                let outter__part_0_x = outter__part_0_bounds[0].x + (outter__part_0_bounds[1].x - outter__part_0_bounds[0].x) / 2
                let outter__part_0_y = outter__part_0_bounds[0].y + (outter__part_0_bounds[1].y - outter__part_0_bounds[0].y) / 2
                outter__part_0 = translate([-outter__part_0_x, -outter__part_0_y, 0], outter__part_0);
                outter__part_0 = rotate([0,0,0], outter__part_0);
                outter__part_0 = translate([outter__part_0_x, outter__part_0_y, 0], outter__part_0);

                outter__part_0 = translate([0,0,0], outter__part_0);
                let result = outter__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return outter_case_fn();
            }

        