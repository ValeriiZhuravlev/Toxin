const calendar = function() {

  $( function() {
    let applyButton = $(
      '<span class="datepicker--button datepicker--button-apply">Применить</span>'
    );

    let datePicker = $('.calendar__input').focus(function(e) {
    let altField;
    let dateFormat;
    let event = e.target;
    let flag = false;
    let multipleDatesSeparator = ',';
  
    

      function setFormat() {
        if(flag) {
          let setFormat = $('.bothDirection').val().toLowerCase();
          $('.bothDirection').val(setFormat);
        }
      }

      function splitArray(dateForm){
        let dateVal = dateForm.split(',');
          $('.arrival').val(dateVal[0]);
          $('.checkOut').val(dateVal[1]);
      }

      if(event.classList.contains('calendar__input')) {
        $('.calendar').datepicker({
          range: true,
          inline:true,
          multipleDatesSeparator: multipleDatesSeparator,
          classes: 'droplist',
          moveToOtherMonthsOnSelect: false,
          moveToOtherYearsOnSelect: false,
          altField: altField,
          altFieldDateFormat: dateFormat,
          toggleSelected: true,
          clearButton: true,
          prevHtml: '<i class="calendar__nav-icon calendar__nav-icon-back">back</i>',
          nextHtml: '<i class="calendar__nav-icon calendar__nav-icon-next">next</i>',
          navTitles: {
            days: '<span class="datepicker--title"><span class="calendar__month-name">MM</span> yyyy</span>'
          },
          onSelect: (formattedDate) => {
            splitArray(formattedDate);
            setFormat();
            console.log(altField);
          }
        });
        $(document).mousedown((e) => {
          let event = e.target;
          let calendarModal = $('.droplist');
          if(!calendarModal.is(event) &&
              calendarModal.has(event).length === 0 &&
              !event.classList.contains('calendar__input')) {
            calendarModal.hide();
          }
          if(event.classList.contains('calendar__input')) {
            calendarModal.show();
          }
        });

        if($(this).has('bothDirection')) {
          altField = $('.bothDirection');
          dateFormat = 'dd M';
          multipleDatesSeparator = '-';
          flag = true;
        } else if($(this).has('arrival') || $(this).has('checkOut')) {
          altField = $('.arrival');
          dateFormat = 'dd.mm.yyyy';
        }
        applyButton.appendTo('.datepicker--buttons');
        $('.arrival').focus(() => {
          splitArray(`${$('.arrival').val()},${$('.checkOut').val()}`);
        });
        $('.checkOut').focus(() => {
          splitArray(`${$('.arrival').val()},${$('.checkOut').val()}`);
        });
          setFormat();
          
        }   
      });   
    });
}();
module.exports = calendar;


    