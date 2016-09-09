function bookModule(module) {
    $(function() {
        if (module.init) {
            module.init();
        }
    });
    return module;
}
var myBookModule = bookModule(function () {
    var inits = {
        bookFullView: function () {
            $('.book__parametrs-wrap').on('click', function(e) {
                var hideButton = $(e.target).parent().find('a.fullview'),
                    showButton = $(e.target).parent().find('a.preview'),
                    desc = $(e.target).parent().find('.book__description');
                if ($(e.target).is('.preview') || $(e.target).is('.book__description')) {
                    desc.removeClass("overflowed");
                    showButton.hide();
                    hideButton.show();
                } else if ($(e.target).is('.fullview')) {
                    desc.addClass("overflowed");
                    showButton.show();
                    hideButton.hide();
                }
            });
        }
    };
    return {
        init: function () {
            inits.bookFullView();
        }
    }

}());

myBookModule.init();