// Wait for window load
  // $("#header").load(function() {
  //   // Animate loader off screen
  //   $(".se-pre-con").fadeOut("slow");;
  // });

// Plugin @RokoCB :: Return the visible amount of px
// of any element currently in viewport.
// stackoverflow.com/questions/24768795/
;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));



$(".animate").inViewport(function(px){
    if(px) $(this).addClass("w3-animate-bottom") ;
    // $("header").fadeIn();

    // if(px) $(this).show("slide", { direction: "left" }, 1000);
});

