$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // typing text animation script
    var write = new Typed(".typing", {
        strings: ["Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var write = new Typed(".typing-2", {
        strings: ["Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
})