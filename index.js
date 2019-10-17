window.onload = function() {
  // necessary for dropdown menus to function properly:
  // https://stackoverflow.com/a/25347431
  $('.ui.dropdown').dropdown();
};

//toggle between Collection tabs
$(document).ready(function(){
  $('.tabular a').click(function(event){
    event.preventDefault();

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    var activeTab = $(this).attr("href");
    $('.item-content').not(activeTab).css("display","none");
    $(activeTab).fadeIn();
  });
});


$('.special.cards .image').dimmer({
  on: 'hover'
});