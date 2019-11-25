const slider = function() {
    let slideIndex = 1;
    function showSlides(e, n) {
        let event = e.target;
        let elem = $(event).parents('.room__gallery');
        let slides = elem.find('.room__img');
        let swicherWrap = elem.find('.swicher');
        let swicher = elem.find('.swicher__item');
        if(n > slides.length) {
            slideIndex = 1;
        }
        if(n < 1) {
            slideIndex = slides.length; 
        }
        slides.each((i, item) => {
            $(item).hide();
        });
        swicher.each((i, item) => {
            $(item).removeClass('swicher__item_active');
        });
        $(slides[slideIndex-1]).show();
        $(swicher[slideIndex-1]).addClass('swicher__item_active');
    }
    function plusSlide(e, n) {
        showSlides(e, slideIndex += n);
    }
    function currentSlide(e, n) {
        showSlides(e, slideIndex = n);
    }
    $('.room__arrows_prev').on('click', function(e) {
        plusSlide(e, -1);
    });
    $('.room__arrows_next').on('click', function(e) {
        plusSlide(e, 1);
    });

    $('.swicher').on('click', function(e) {
        let event = e.target;
         if(event.classList.contains('swicher__item')){
            let val = $(event).val();
            currentSlide(e, +(val));
         }   
        });     
}();

module.exports = slider;