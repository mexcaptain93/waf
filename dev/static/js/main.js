$(document).ready(function () {
    indexVideos();
});

function indexVideos() {
    var videos =  $('.js-index-videos');
    if (videos.length) {
        videos.slick({
            slidesToShow: 2,
            slidesToScroll: 2
        });
    }

}