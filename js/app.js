'use strict';

$("#close").click(function() {
	$(".contactRow").slideUp();
});

function showForm() {
	$(".contactRow").slideToggle();
}

function closeForm() {
	$(".contactRow").slideUp();
}

$(document).ready(function() {       
   var scroll_start = 0;
   var startchange = $('#fh5co-hero');
   var offset = startchange.offset();
    if (startchange.length){
  		$(document).scroll(function() { 
      	scroll_start = $(this).scrollTop();
     	if(scroll_start > offset.top) {
         	 $("#fix").css('background-color', '#333333');
       	}

        else {
          $('#fix').css('background-color', 'transparent');
      }
   });
    }
});

$("#formDiv").click(function(e) {
   e.preventDefault();
   var section = $(this).attr("href");
   $("html body").animate(
     {scrollTop: $(section).offset().scrollTop
     });
});
