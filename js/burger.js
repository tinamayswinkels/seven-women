$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideDown();
$( ".hamburger" ).hide();
$( ".cross" ).show();
});


$( ".cross" ).click(function() {
$( ".menu" ).slideUp();
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
