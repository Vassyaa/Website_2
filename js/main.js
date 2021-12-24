
$('.menu-toggle').click(function (e) {
    e.preventDefault();
    $('.menu').toggleClass('show');
});


if (  $(window).width()   <  991) {
    $('.menu ul li a').click(function (e) {
        e.preventDefault();
        $('.menu').toggleClass('show');
});
}