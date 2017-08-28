//Masonry
var masonryGrid = $('.grid');

masonryGrid.imagesLoaded().done(function() {
    masonryGrid.masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
    });
});

$('a[href*=#]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    event.preventDefault();
});

$(function() {

    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  3000);

});