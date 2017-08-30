jQuery(document).ready(function($) {


  /* filtering */
  $('ul#portfolio-filter a').click(function(e) {
    e.preventDefault();

    /* make this <li> class active and remove class 'active' from any other <li>s */
    $('ul#portfolio-filter .active').removeClass('active');
    $(this).parent().addClass('active');

    /* get the name of the cateory from this link */
    var filterVal = $(this).text().toLowerCase().replace(' ','-').replace(' ','-').replace(' ','-');
    console.log(filterVal);


    $('#portfolio-grid .img-with-overlay').each(function() {
        if(filterVal == 'all'){
          $(this).removeClass('hidden');
        }else{
          if(!$(this).hasClass(filterVal)) {
            $(this).addClass('hidden'); // hide those that don't have the filter
          }else{
            $(this).removeClass('hidden'); // show those that do have the filter
          }
        }
      });


  });

  $('.gallery-pic').mouseenter(function(e) {
    e.preventDefault();
    var background = $(this).attr("data-pic");
$(".gallery-target").css("background-image","url('+ background +')");
  });

});

// end jquery
