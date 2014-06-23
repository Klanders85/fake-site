$(document).ready(function(){
    //Bootstrap scrollSpy
    $('body').scrollspy({ target: '.navbar' })
    //stores the number of pixels has been srolled from the top of the document
    var scrolled = $(window).scrollTop();

    //scroll function logs the scrolled value with px added
    $(window).scroll(function(){
        console.log($(window).scrollTop()+"px")
        //if the scrolled value is greater than or equal to 2160 do something....
        //add the animation/canvas class I think is what will need to be added
        if($(window).scrollTop() >= 2160){
          
            console.log('fire');
        }
    });
});