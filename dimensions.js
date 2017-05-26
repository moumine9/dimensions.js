    
    /************* Margins ***********************/

$("[data-margin-top]").each(function() {
    
    var val = $(this).data();
    console.log(val);
    
    $(this).css("margin-top", val["marginTop"]);
});

$("[data-margin-bottom]").each(function() {

    var val = $(this).data();
    $(this).css("margin-bottom", val["marginBottom"] );
});

$("[data-margin-left]").each(function() {

    var val = $(this).data();
    $(this).css("margin-left", val.marginLeft);
});

$("[data-margin-right]").each(function() {

    var val = $(this).data();
    $(this).css("margin-right", val.marginRight);
});

// Apply the same values to the 4 corners.
$("[data-margin]").each(function() {

    var val = $(this).data();
    $(this).css("margin", val.margin);
});


/**************  Padding ********************/

$("[data-padding-right]").each(function() {

    var val = $(this).data();
    $(this).css("padding-right", val.paddingRight);
});

$("[data-padding-left]").each(function() {

    var val = $(this).data();
    $(this).css("padding-left", val.paddingLeft);
});

$("[data-padding-top]").each(function() {

    var val = $(this).data();
    $(this).css("padding-top", val.paddingtop);
});

$("[data-padding-bottom]").each(function() {

    var val = $(this).data();
    $(this).css("padding-bottom", val.paddingBottom);
});

$("[data-padding]").each(function() {

    var val = $(this).data();
    $(this).css("padding", val.padding);
});

/******************* Sizes ********************/

$("[data-width]").each(function() {

    var val = $(this).data();
    $(this).css("width", val.width);
});

$("[data-max-width]").each(function() {

    var val = $(this).data();
    $(this).css("max-width", val.maxWidth);
});

$("[data-min-width]").each(function() {

    var val = $(this).data();
    $(this).css("min-width", val.minWidth);
});

$("[data-height]").each(function() {

    var val = $(this).data();
    $(this).css("height", val.height);
});

$("[data-max-height]").each(function() {

    var val = $(this).data();
    $(this).css("max-height", val.maxHeight);
});

$("[data-min-height]").each(function() {

    var val = $(this).data();
    $(this).css("min-height", val.minHeight);
});


/************************ Clone an element in terms of width height and position  *************************/
   

