const like = function() {
    $('.like__field').click((e) => {
        let event = e.target;
        let numb = $(event).next('.like__label').html();
        if($(event).is(':checked')) {
            $(event).next('.like__label').html(+(numb) + 1);
        }else{
            $(event).next('.like__label').html(+(numb) - 1);
        }
    });
}();

module.exports = like;