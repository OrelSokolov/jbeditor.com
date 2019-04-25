Validator = {};

function allInArray(array, condition_func) {
    result = true;
    for(i=0; i < array.length; i++) {
        if(!condition_func(array[i])){result = false}
    }
    return result;
}

/*
Validate document structure
Returns list of errors, each error is just string
 */
Validator.validate =  function (doc){
    var errorList = [];
    function err(condition, str){
        if (!condition) { errorList.push(str) }
    }


    err( doc != undefined, "Entire document is not present")
    err(!!doc.content, "Content not present")
    err(typeof(doc.content)== Array, "Content should be array")
    err(allInArray(doc.content, function(e){!!e.type}), "Each content chunk should have type prop")

    err(allInArray(doc.content, function(e){
        e.type == "content" &&
            !!e.font_number &&
            !!e.font_size &&
            !!e.color &&
            !!e.align &&
            !!e.content &&
            !!e.bgcolor &&
            !!e.role
    }), "Some content-content chunks have invalid structure")


    /*
    *	Content array
        * Cursor object (left and right cursor group, by default 0 chunks between)
        *	Special chunk (tab, line break)
            *	Background color
        *	Special characters and formulas
        *	Table
            *	Table content
                *	Element
                    *	Content
                    *	Attributes
                        *	Border left
                        *	Border right
                        *	Border top
                        *	Border bottom
                        *	Background color
                        *	Align method
                 *	Table name
                      *	Name
                      *	Number presence flag
    *	Pages array
        *	Page
            *	Number
            *	Page class
            *	Default font size
            *	Images attached to page
                *	Image
                    *	Position X
                    *	Position Y
                    *	Position Z
                    *	Width
                    *	Height
                    *	Opacity
                    *	Rotation degree
            *	Lines – automatically generated from text chunks
                *	Line
                    *	Array of chunks
                    *	Line height
    *	Page classes array
        *	Class
            *	Number
            *	Name
            *	Background color
            *	Width
            *	Height
            *	Orientation
            *   Padding array [top, right, bottom, left] (does not depend of orientation)
    *	Table classes array ( describes how rows and columns should be colored, just rules )
    *	Fonts array
        *	Font
            *	Number
            *	Name
            *	Source
    *	Images array
        *	Image
            *	Description
            *	Base64 encoded content
    *	Metadata
        *   Book
            * Title
            * Version
        *	Authors
            *	Name
            *	Email
    *	Document
        *	Defaults
            *	Font number
            *	Font size
        *	Last edit date
        *	Creation date
        *	License
     */
}
