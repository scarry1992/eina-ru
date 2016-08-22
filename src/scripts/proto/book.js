$('.preview').on('click', function(e) {
    var full = $(e.target).siblings('a.fullview');
    var desc = $(e.target).siblings('.book__description');
    desc.removeClass("overflowed");
    $(e.target).hide();
    full.show();
});