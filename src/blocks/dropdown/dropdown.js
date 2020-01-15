const dropdown = function() {
    let words = {
        guests : ['', 'гость', 'гостя', 'гостей'],
        baby: ['', 'младенец', 'младенца', 'младенцев'],
        bedrooms: ['', 'спальня', 'спальни', 'спален'],
        beds: ['', 'кровать', 'кровати', 'кроватей'],
        bathrooms: ['', 'ванная комната', 'ванные комнаты', 'ванных комнат']
    };

  

    function rangeVal(){
        $('.controler__number').each((i, item) => {
            if($(item).val() == 0) {
                $(item).prev('.controler__button_minus').prop('disabled', true);
            }else if($(item).val() == 99){
                $(item).next('.controler__button_plus').prop('disabled', true);
            }else{
                $(item).next('.controler__button_plus').prop('disabled', false);
                $(item).prev('.controler__button_minus').prop('disabled', false);
            }
        });
    }

    $('.dropdown__input').focus(function() {
        let elem = $(this).parents('.dropdown').find('.dropdown__total');
       elem.show();
       $(this).css('border-color', 'rgba(31, 32, 65, 0.5)');
        rangeVal();
    });

    $(document).mousedown((e) => {
        let event = e.target;
        let dropdownModal = $('.dropdown__total');
        if(!dropdownModal.is(event) &&
            dropdownModal.has(event).length === 0 &&
            !event.classList.contains(dropdownModal)) {
            dropdownModal.hide();
            $('.dropdown__input').css('border-color', 'rgba(31, 32, 65, 0.25)')
        }
      });

      $('.clear').click(function(e) {
        e.preventDefault();
        $(this).parents('.dropdown__total').prev('.field').children('.dropdown__input').val('');
        let control = $(this).parents('.dropdown__buttons').prev('.dropdown__list').find('.controler__number');
        control.each((i, item) => {
            $(item).val('0');
        });
        rangeVal();
    });

      $('.controler__button').click(function(e) {
        let event = e.target;
        let item = $(this).parents('.dropdown__item');
        let listItem = $(this).parents('.dropdown__list');
        let itemVal = item.find('.controler__number').val();
        let input = listItem.parents('.dropdown').find('.dropdown__input');
        let items = listItem.find('.dropdown__item');
        let setName = new Set();
        let fullVal = {};
        let str = '';
        let nameVal;
        let person;
        
        function validWords(val, number) {
            let arr = '';
            
            if(number == 0) {
                str += `${words[val][0]}`
            }else if(number == 1){
                str += `${number} ${words[val][1]}, `
            }else if(number >= 2 && number < 5) {
                str +=  `${number} ${words[val][2]}, `
            }else if(number >= 5) {
                str +=  `${number} ${words[val][3]}, `
            }
            arr = str.substring(0, str.length-2);
            return(arr); 
        }  
       
        input.val('');
        strVal = '';
        e.preventDefault();
        if(event.classList.contains('controler__button_plus')) {
            item.find('.controler__number').val((+itemVal) + 1);
        }else if(event.classList.contains('controler__button_minus')){
            item.find('.controler__number').val((+itemVal) - 1); 
        }
        items.each((i, item) => {
            nameVal = $(item).find('.controler__number').attr('name');
            setName.add(nameVal);
        });
        setName.forEach((val) => {
            person = items.find(`[name="${val}"]`);
            fullVal.val = 0;
            person.each((i, item) => {
                fullVal.val += +($(item).val());
            });

            input.val(validWords(val, fullVal.val)); 
        });
        let arraySet = input.val().split(',');
        if(arraySet.length >= 3){
            arraySet.pop();
            input.val(`${arraySet}...`);
        }
        rangeVal();
      });
}();

module.exports = dropdown;
