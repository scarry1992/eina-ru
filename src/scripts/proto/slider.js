$(function(){
    $('.slider').mCustomScrollbar({
        axis:"x",
        theme:"dark-thin",
        advanced:{autoExpandHorizontalScroll:true}
    });
    var $category = $('.category').find('li');
    $category.on('click', function(){
        var selGenre = $(this).data('prop');
        $category.removeClass('active');
        $(this).addClass('active');
        $('.category + .slider').find('.slider-item').each(function(){
            var genre = $(this).data('prop');
           console.log(genre);
            if(genre.indexOf(selGenre) + 1 || selGenre === 'all'){
                $(this).css('display', 'inline-block');
            }
            else{
                $(this).css('display', 'none');
            }
        });
        $('.slider').mCustomScrollbar('update');
    });
});