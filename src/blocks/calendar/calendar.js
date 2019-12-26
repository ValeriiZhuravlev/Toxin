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
      switch($(this).attr('date-direction')) {
        case 'arrival':
        case 'checkOut': 
            altField = $('[date-direction="arrival"]');
            dateFormat = 'dd.mm.yyyy';
            
        break;
        case 'bothDirection':
            altField = $('[date-direction="bothDirection"]');
            dateFormat = 'dd M';
            multipleDatesSeparator = '-';
            flag = true;
      }
      function setFormat() {
        if(flag) {
          let setFormat = $('[date-direction="bothDirection"]').val().toLowerCase();
          $('[date-direction="bothDirection"]').val(setFormat);
        }
      }

      function splitArray(dateForm){
        let dateVal = dateForm.split(',');
          $('[date-direction="arrival"]').val(dateVal[0]);
          $('[date-direction="checkOut"]').val(dateVal[1]);
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
        applyButton.appendTo('.datepicker--buttons');
        $('[date-direction="arrival"]').focus(() => {
          splitArray(`${$('[date-direction="arrival"]').val()},${$('[date-direction="checkOut"]').val()}`);
        });
        $('[date-direction="checkOut"]').focus(() => {
          splitArray(`${$('[date-direction="arrival"]').val()},${$('[date-direction="checkOut"]').val()}`);
        });
          setFormat();
        }   
      });   
    });
}();
module.exports = calendar;


    