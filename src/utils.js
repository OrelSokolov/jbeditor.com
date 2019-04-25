export function canvas_dpi(canvas_scale) { return 72.272*canvas_scale; }


/*

72.272pt     25,4
--------  =  ----
   pt         mm

 */

export function pt2mm(pt) { return pt*25.4/72.272 }
export function mm2pt(mm) { return mm*72.272/25.4 }


// Convert Pt to Canvas pixels
// Canvas pixels is pixels used primary in canvas "width" and "height" attributes
export function pt2cpx(pt, canvas_scale) { return pt2mm(pt)*canvas_scale }
export function mm2cpx(mm, canvas_scale) { return mm*canvas_scale }
