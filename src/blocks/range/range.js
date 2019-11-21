const range = function() {
    let arrayNumber = [];
    function discharge(start, finish) {
            let strStart = start.toString();
            let strFinish = finish.toString();
            strStart = strStart.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            strFinish = strFinish.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            arrayNumber = [strStart, strFinish];   
    }
    $( function() {
        $( ".range__input" ).slider({
          range: true,
          min: 0,
          step: 500,
          max: 15000,
          values: [ 5000, 10000 ],
          slide: function( event, ui ) {
            discharge(ui.values[0], ui.values[1]);
            $( "#amount" ).val( `${arrayNumber[0]}₽ - ${arrayNumber[1]}₽`);
          }
        });
        $("#amount").val(`5 000₽ - 10 000₽`);
      });
}();


module.exports = range;
