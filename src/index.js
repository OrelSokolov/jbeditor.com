import {Canvas} from './canvas';
import { pt2mm, mm2pt, pt2cpx, mm2cpx } from './utils';
import { Validator } from './validator'

/*
Renders blank pages with its parameters and attached images to pages
 */
function renderPages(doc){
    for(let page of doc.pages) {
        var style = doc.page_classes.find(function(page_class){ return page_class.number == page.class });

        var canvas = document.createElement("canvas");
        document.getElementById("canvas-container").appendChild(canvas);

        canvas.setAttribute("id", `page-${page.number}`);
        canvas.setAttribute("tabindex", `${page.number}`);
        canvas.setAttribute("width", style.width*Canvas.scale);
        canvas.setAttribute("height", style.height*Canvas.scale);

        var css_width = parseInt(window.getComputedStyle(canvas).width);

        canvas.addEventListener("keydown", function(e){  }, true);
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

    var fontsize_cpx = pt2cpx(30, Canvas.scale);
    console.log(fontsize_cpx);
    ctx.font = fontsize_cpx+"px Arial";
    ctx.fillText("Hello world", mm2cpx(30, Canvas.scale), mm2cpx(20, Canvas.scale)+fontsize_cpx);
}

function renderAll(doc){
    renderPages(doc);
    renderContent(doc);
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

/*
Load DOM and render
 */
document.addEventListener("DOMContentLoaded", function(event) {
    getDocument(function(doc){
        window.doc = doc; // For debugging
        renderAll(window.doc);
    });
});

