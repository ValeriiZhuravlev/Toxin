const slider = function() {
    let slideIndex = 1;
    function getIndexSlide() {
        let swicher = $(this).val();
        let swichers = $(this).parents('.room__gallery').find('.swicher__item');
        let slider = $(this).parents('.room__gallery').find('.room__img');
        function getValue() {
            swichers.each((i, item) => {
                if(item.classList.contains('swicher__item_active')) {
                    slideIndex = +($(item).val());
                }
            });
        }
        getValue();

        function swichSlide() {
            $(slider[slideIndex-1]).fadeIn('500');
            $(swichers[slideIndex-1]).addClass('swicher__item_active');
        }

        swichers.each((i, item) => {
            $(item).removeClass('swicher__item_active');
        });

        slider.each((i, item) => {
            $(item).fadeOut();
        });

        if(this.classList.contains('swicher__item')) {
            slideIndex = +($(this).val());
            swichSlide();
        }

        if(this.classList.contains('room__arrows_prev')) {

            getValue();
            slideIndex -= 1;
            if(slideIndex < 1) {
                slideIndex = slider.length;
            }
            swichSlide();
        }

        if(this.classList.contains('room__arrows_next')) {
            getValue();
            slideIndex += 1;
            if(slider.length < slideIndex) {
                slideIndex = 1;
            }
            swichSlide();
        }
        
    }
        
    
    $('.swicher__item').on('click', getIndexSlide);
    $('.room__arrows_prev').on('click', getIndexSlide);
    $('.room__arrows_next').on('click', getIndexSlide);
}();

module.exports = slider;