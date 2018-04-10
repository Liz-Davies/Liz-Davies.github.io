$(function(){
    //register scrollspy to the body
    $('body').scrollspy({target: '#main-navbar',offset: 58});

    //add smooth scrolling on all links inside the navbar
    $('#main-navbar a').on('click',function(event){
        //make sure this.hash has a value before overriding default behaviour
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;

            //using jquery.animate() to add smooth page scrollspy
            //use 800 ms time grame to perform scrolls
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 800, function(){
                    //add hash(#) to URL when done scrolling
                    //this will mak our URL bar match where we are on the pages
                    window.location.hash = hash;
                }
            );
        }
    });
}};
