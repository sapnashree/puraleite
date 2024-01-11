(function($) {
    "use strict";
    var spinner = function() { setTimeout(function() { if ($('#spinner').length > 0) { $('#spinner').removeClass('show'); } }, 1); };
    spinner();
    new WOW().init();
    $(window).scroll(function() { if ($(this).scrollTop() > 300) { $('.sticky-top').css('top', '0px'); } else { $('.sticky-top').css('top', '-100px'); } });
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            }, function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            });
        } else { $dropdown.off("mouseenter mouseleave"); }
    });
    $(window).scroll(function() { if ($(this).scrollTop() > 300) { $('.back-to-top').fadeIn('slow'); } else { $('.back-to-top').fadeOut('slow'); } });
    $('.back-to-top').click(function() { $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo'); return false; });
    $(document).ready(function() {
        var $videoSrc;
        $('.btn-play').click(function() { $videoSrc = $(this).data("src"); });
        console.log($videoSrc);
        $('#videoModal').on('shown.bs.modal', function(e) { $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"); })
        $('#videoModal').on('hide.bs.modal', function(e) { $("#video").attr('src', $videoSrc); })
    });
    $('[data-toggle="counter-up"]').counterUp({ delay: 10, time: 2000 });
    $('.date').datetimepicker({ format: 'L' });
    $('.time').datetimepicker({ format: 'LT' });
    $("#halfstarsReview").rating({
        "half": true,
        "color": "#FEA116",
        "click": function(e) {
            console.log(e);
            $("#halfstarsInput").val(e.stars);
        }
    });
    $(".header-carousel").owlCarousel({ autoplay: true, smartSpeed: 1500, items: 1, dots: true, loop: true, nav: true, navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'] });
    $(".testimonial-carousel").owlCarousel({ autoplay: true, smartSpeed: 1000, margin: 25, dots: false, loop: true, nav: true, navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'], responsive: { 0: { items: 1 }, 768: { items: 2 } } });
    $(".testimonial-carousel-center").owlCarousel({ autoplay: true, smartSpeed: 1000, center: true, dots: false, loop: true, nav: true, navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'], responsive: { 0: { items: 1 }, 768: { items: 2 } } });
    $(".related-carousel").owlCarousel({ autoplay: true, margin: 30, dots: false, loop: true, nav: true, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], responsive: { 0: { items: 1 }, 768: { items: 2 } } });
    var portfolioIsotope = $('.portfolio-container').isotope({ itemSelector: '.portfolio-item', layoutMode: 'fitRows' });
    $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
})(jQuery);

// function myFunction1() {
//     var dots = document.getElementById("dots1");
//     var moreText = document.getElementById("more1");
//     var btnText = document.getElementById("myBtn2");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// function myFunction2() {
//     var dots = document.getElementById("dots2");
//     var moreText = document.getElementById("more2");
//     var btnText = document.getElementById("myBtn2");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// function myFunction3() {
//     var dots = document.getElementById("dots3");
//     var moreText = document.getElementById("more3");
//     var btnText = document.getElementById("myBtn3");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// function myFunction4() {
//     var dots = document.getElementById("dots4");
//     var moreText = document.getElementById("more4");
//     var btnText = document.getElementById("myBtn4");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// function myFunction5() {
//     var dots = document.getElementById("dots5");
//     var moreText = document.getElementById("more5");
//     var btnText = document.getElementById("myBtn5");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// function myFunction6() {
//     var dots = document.getElementById("dots6");
//     var moreText = document.getElementById("more6");
//     var btnText = document.getElementById("myBtn6");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// function myFunction7() {
//     var dots = document.getElementById("dots7");
//     var moreText = document.getElementById("more7");
//     var btnText = document.getElementById("myBtn7");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// function myFunction8() {
//     var dots = document.getElementById("dots8");
//     var moreText = document.getElementById("more8");
//     var btnText = document.getElementById("myBtn8");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// function myFunction9() {
//     var dots = document.getElementById("dots9");
//     var moreText = document.getElementById("more9");
//     var btnText = document.getElementById("myBtn9");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// function myFunction10() {
//     var dots = document.getElementById("dots10");
//     var moreText = document.getElementById("more10");
//     var btnText = document.getElementById("myBtn10");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// function myFunction11() {
//     var dots = document.getElementById("dots11");
//     var moreText = document.getElementById("more11");
//     var btnText = document.getElementById("myBtn11");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// function myFunction12() {
//     var dots = document.getElementById("dots12");
//     var moreText = document.getElementById("more12");
//     var btnText = document.getElementById("myBtn12");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// function myFunction13() {
//     var dots = document.getElementById("dots13");
//     var moreText = document.getElementById("more13");
//     var btnText = document.getElementById("myBtn13");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

function myFunction_gsm(sectionId) {
    var btnText = document.getElementById("morebtn");
    let sec = document.querySelectorAll('.sec');
    sec.forEach(itm => {
        if (itm.id !== sectionId) itm.style.display = 'none'
    })
    var x = document.getElementById(sectionId);
    if (x.style.display === "block") {
        x.style.display = "none";
        btnText.innerHTML = "Read more";
    } else {
        x.style.display = "block";
        btnText.innerHTML = "Read less";
    }
}

let sec = document.querySelectorAll('.sec');
sec.forEach(itm => {
    itm.style.display = 'none'
})