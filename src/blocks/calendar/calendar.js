const calendar = function() {
  $( function() {

    let applyButton = $(
      '<span class="datepicker--button datepicker--button-apply">Применить</span>'
    );
    let datePicker = $('.calendar__input').focus((e) => {
      let flag = true;
      let event = e.target;
      function splitArray(dateForm){
        let dateVal = dateForm.split(',');
          $('#arrival').val(dateVal[0]);
          $('#checkOut').val(dateVal[1]);
      }
      if(event.classList.contains('calendar__input')) {
        $('.calendar').datepicker({
          range: true,
          inline:true,
          moveToOtherMonthsOnSelect: false,
          moveToOtherYearsOnSelect: false,
          toggleSelected: true,
          altField: $('#arrival'),
          altFieldDateFormat: 'dd.mm.yyyy',
          toggleSelected: true,
          clearButton: true,
          prevHtml: '<i class="calendar__nav-icon calendar__nav-icon-back">back</i>',
          nextHtml: '<i class="calendar__nav-icon calendar__nav-icon-next">next</i>',
          navTitles: {
            days: '<span class="datepicker--title"><span class="calendar__month-name">MM</span> yyyy</span>'
          },
          onSelect: (formattedDate) => {
            splitArray(formattedDate);
          }
        });
        $(document).mousedown((e) => {
          let event = e.target;
          let calendarModal = $('.datepicker-inline');
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
        $('#arrival').focus(() => {
          splitArray(`${$('#arrival').val()},${$('#checkOut').val()}`);
        });
        $('#checkOut').focus(() => {
          splitArray(`${$('#arrival').val()},${$('#checkOut').val()}`);
        });
      }  
      });     
    });

  
}();



module.exports = calendar;


    