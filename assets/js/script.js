// Formulaire

// Variable 

form = document.querySelector('form');



form.addEventListener('submit', function(){
    elements = form.elements; // selection de tout les éléments du formulaire est dedans, meme le bouton
    
    for(let item of elements) {
        if ( !item.validity.valid) {
            item.classList.add('error');
            spanMsg = document.querySelector('label[for="'+item.getAttribute('id')+'"] span.msg-error');
            spanMsg.classList.add('msg-error--show');
            event.preventDefault();
        }
    }
});


    elements = form.elements; // selection de tout les éléments du formulaire est dedans, meme le bouton
    
    for(let item of elements) {

        item.addEventListener('blur', function() {

            this.classList.remove('error');
            spanMsg = document.querySelector('label[for="'+this.getAttribute('id')+'"] span.msg-error');
            spanMsg.classList.remove('msg-error--show');    

        if ( !this.validity.valid) {
            this.classList.add('error');
            spanMsg.classList.add('msg-error--show');
        }
    });
}
// fin formulaire

// scroll expérience
(function ($) { 

    /* Scroll Reveak de la Timeline */
    
        window.sr = ScrollReveal();
    
        if ($(window).width() < 768) {
    
            if ($('.timeline-content').hasClass('js--fadeInLeft')) {
                $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
            }
    
            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
    
        } else {
    
            sr.reveal('.js--fadeInLeft', {
                origin: 'left',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
    
            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
    
        }
    
        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    
        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    }(jQuery));
    //fin scroll expérience