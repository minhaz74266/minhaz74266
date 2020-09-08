// nav
var nav =document.getElementById('myNav');
var open =document.getElementById('openNav');
var close =document.getElementById('closeNav');

open.addEventListener('click',function(){
    nav.style.left='0px';
    
})
close.addEventListener('click',function(){
    nav.style.left='-240px';
})


// All jquery Plugin
// styciky
$(document).ready(function(){
    $('.home').sticky({
        topSpacing: 0,
        zIndex:999
    });

// Aos jqury plugin

AOS.init({
    duration:2000
});

// smoth scrrol plugin

$('a').smoothScroll();

// Magnatic pop up

$('.venobox').venobox({
    autoplay : true,
    numeratio: true,
    closeColor : "red",
    framewidth: '800px',
      frameheight: '600px',
      htmlClose : '&times;',
      htmlNext : '<span>Next</span>',
      htmlPrev : '<span>Prev</span>'
      
     
    
});


})
