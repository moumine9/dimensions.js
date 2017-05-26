/************* Margins ***********************/

$("[data-margintop]").each(function() {

    var val = $(this).data();
    $(this).css("margin-top", val.margintop);
});

$("[data-marginbottom]").each(function() {

    var val = $(this).data();
    $(this).css("margin-bottom", val.marginbottom);
});

$("[data-marginleft]").each(function() {

    var val = $(this).data();
    $(this).css("margin-left", val.marginleft);
});

$("[data-marginright]").each(function() {

    var val = $(this).data();
    $(this).css("margin-right", val.marginright);
});

// Apply the same values to the 4 corners.
$("[data-margin]").each(function() {

    var val = $(this).data();
    $(this).css("margin", val.margin);
});


/**************  Padding ********************/

$("[data-paddingright]").each(function() {

    var val = $(this).data();
    $(this).css("padding-right", val.paddingright);
});

$("[data-paddingleft]").each(function() {

    var val = $(this).data();
    $(this).css("padding-left", val.paddingleft);
});

$("[data-paddingtop]").each(function() {

    var val = $(this).data();
    $(this).css("padding-top", val.paddingtop);
});

$("[data-paddingbottom]").each(function() {

    var val = $(this).data();
    $(this).css("padding-bottom", val.paddingbottom);
});

$("[data-padding]").each(function() {

    var val = $(this).data();
    $(this).css("padding", val.padding);
});

/************************ Clone an element in terms of width height and position  *************************/

$("[data-clone]").each(function() {

    var val = $(this).data();
    
    $(this).css( $(val.clone).css() );
});

