$('.search__input').on('input', function (event) {
    if ((this).value.length) {
        $('.search__comment').addClass('_active');
        $('.search__input').addClass('_active');
        $('.search__clear').addClass('_active');
    } else {
        $('.search__comment').removeClass('_active');
        $('.search__input').removeClass('_active');
        $('.search__clear').removeClass('_active');
    }
});

$('.search__clear').click(function () {
    document.getElementById('brodIt').value = '';
    $('.search__comment').removeClass('_active');
    $('.search__clear').removeClass('_active');
    $('.main__result').css("opacity", "0");
    $('.search__input').removeClass('_active');
    $('#brodIt').focus();
});

