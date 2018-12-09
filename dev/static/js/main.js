$(document).ready(function () {
    indexVideos();
    mobileMenu();
    catalogFilters();
    mobileFilter();
});

function indexVideos() {
    var videos =  $('.js-index-videos'),
        prev = $('.js-index-videos-prev'),
        next = $('.js-index-videos-next');
    if (videos.length) {
        videos.slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        });

        prev.on('click', function (e)  {
            e.preventDefault();
           videos.slick('slickPrev');
        });

        next.on('click', function (e)  {
            e.preventDefault();
           videos.slick('slickNext');
        });
    }
}

function mobileMenu() {

    var burger = $('.js-burger'),
        dropdown = $('.js-dropdown'),
        item = $('.js-mobile-menu-has-sub').find('> a'),
        submenu = $('.js-mobile-menu-submenu');
    
    item.on('click', function (e) {
        e.preventDefault();
        $(this).siblings(submenu).slideToggle();
    })

    burger.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('burger_opened');
        dropdown.toggle();
    })

}

function catalogFilters() {
    var opener = $('.js-catalog-filters li'),
        values = $('.js-catalog-filters-value ul');

    opener.on('click', function (e) {
        if ($(this).hasClass('filters__item_opened')) {
            $(this).removeClass('filters__item_opened');
            values.removeClass('value__list_opened');
        } else {
            opener.removeClass('filters__item_opened');
            $(this).addClass('filters__item_opened');
            e.preventDefault();
            var num = $(this).index();
            values.removeClass('value__list_opened');
            values.eq(num).addClass('value__list_opened');
        }
    });
}

function mobileFilter() {
    var opener = $('.js-mobile-filter'),
        values = $('.js-mobile-filter-value');

    opener.on('click', function (e) {
        e.preventDefault();
        $(this).siblings(values).slideToggle();
    });
}