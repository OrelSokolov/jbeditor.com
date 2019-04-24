/*

72.272pt     25,4
--------  =  ----
   pt         mm

 */


var canvas_scale = 4;
var dpi = 72.272*canvas_scale;
console.log("Current dpi is ", dpi)

function pt2mm(pt) { return pt*25.4/72.272 }
function mm2pt(mm) { return mm*72.272/25.4 }
// Convert Pt to Canvas pixels
// Canvas pixels is pixels used primary in canvas "width" and "height" attributes
function pt2cpx(pt) { return pt2mm(pt)*canvas_scale }
function mm2cpx(mm) { return mm*canvas_scale }


/*
Renders blank pages with its parameters and attached images to pages
 */
function renderPages(doc){
    for(let page of doc.pages) {
        var style = doc.page_classes.find(function(page_class){ return page_class.number == page.class });

        var canvas = document.createElement("canvas");
        document.getElementById("canvas-container").appendChild(canvas);

        canvas.setAttribute("id", `page-${page.number}`);
        canvas.setAttribute("width", style.width*canvas_scale);
        canvas.setAttribute("height", style.height*canvas_scale);

        css_width = parseInt(window.getComputedStyle(canvas).width)
        console.log(pt2cpx(30))
    }
}

function setupCanvas(canvas) {
    // Get the device pixel ratio, falling back to 1.
    var dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    var rect = canvas.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext('2d');
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    ctx.scale(dpr, dpr);
    return ctx;
}

/*
Renders
    - text
    - tables
    - special characters
    - images attached to text
 */
function renderContent(doc){
    var canvas = document.getElementById('page-1');
    var ctx = canvas.getContext('2d');

    var current_line_length = 0;
    var max_line_length = 0;

    var fontsize_cpx = pt2cpx(30);
    ctx.font = fontsize_cpx+"px Arial";
    ctx.fillText("Hello world", mm2cpx(30), mm2cpx(20)+fontsize_cpx);
}

function renderAll(doc){
    renderPages(doc);
    renderContent(doc);
}

/*
Validate document structure
 */
function validateStructure(doc){
    var err = undefined;
    var result = true;

    if(document === undefined){
        err = "Document is not present";
        result = false;
    } else {
        validatePages(doc);
        validateContent(doc);
        validateImages(doc);
        validateFonts(document);
    }

    result = ( err === undefined ) ? true : false;
    return result, err
}

function validateContent(document){
    var err;
    return true, err
}

function validateImages(document){
    var err;
    return true, err
}

function validateFonts(document){
    var err;
    return true, err
}

function validatePages(document){
    var err;
    return true, err
}

function getDocument(callback){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(this.responseText));
        }
    };
    xmlhttp.open("GET", "document.json", true);
    xmlhttp.send();
}

/*

 */
function cursorStartPositionNoText(page_class){

}

function cursortStartPositionWithText(){

}

/*
Returns cursor (x, y, size)
 */
function nextCursorPositionAndSize(page){
}

/*
Load DOM and render
 */
document.addEventListener("DOMContentLoaded", function(event) {
    getDocument(function(doc){
        window.doc = doc; // For debugging
        renderAll(window.doc);
    });
});

