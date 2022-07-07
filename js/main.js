
/* ---------------------------- header navigation ----------------------------- */

   $(function(){
    /*Mobile Menu start*/    
    $("#nav-toggle").on( "click", function() {
        $(this).toggleClass( "active" );
//        $("header").removeClass("newnav");
        $(".mainNav").toggleClass("openmenu");

    });
});


/* -------------------------- document Start ------------------ */

    
$(document).ready(function () {
    
    
 $('.spotlight-carosel').slick({
    slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: true,
    dots:true,
 	infinite:true,
	autoplay:false,
 	speed:800,

       
});   
    
 
    
    
    
 $('.blog-carosel').slick({
    slidesToShow: 3,
 	slidesToScroll: 1,
 	arrows: true,
    dots:false,
 	infinite:true,
	autoplay:false,
 	speed:800,
     
    responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
      
      }
    }
    
    
  ] 
       
}); 
    
  
  $('.product-carosel').slick({
    slidesToShow: 4,
 	slidesToScroll: 1,
 	arrows: true,
    dots:false,
 	infinite:true,
	autoplay:false,
 	speed:800,
     
    responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
      
      }
    }
    
    
  ] 
       
});    
    
    
   
  
    
    
   $('.recipe-carosel').slick({
    slidesToShow: 2,
 	slidesToScroll: 1,
 	arrows: true,
    dots:false,
 	infinite:true,
	autoplay:false,
 	speed:800,
       
});   
    
    
    

    
    $('.history-carosel').slick({
    slidesToShow: 3,
 	slidesToScroll: 1,
 	arrows: true,
    dots:false,
 	infinite:true,
	autoplay:false,
 	speed:800,
    variableWidth: true,
    focusOnSelect: true,
    lazyLoad: 'ondemand',   
       
    responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
      
      }
    }
    
    
  ] 
       
});   
      
    
      
    
    

    
 /* -------------------------- document ends here------------------ */       
    
});



$(document).ready(function(){
$(window).scroll(function() {
var scroll = $(window).scrollTop();

if (scroll >= 100) {
$(".white-bg").addClass("active");    
$(".mainNav > li > a").addClass("red-text");
}
else{
$(".white-bg").removeClass("active");
$(".mainNav > li > a").removeClass("red-text");
}
});
});

