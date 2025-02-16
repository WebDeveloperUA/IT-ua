// if (/Android/.test(navigator.appVersion)) {
//     window.addEventListener("resize", function () {
//         if (
//             document.activeElement.tagName == "INPUT" ||
//             document.activeElement.tagName == "TEXTAREA"
//         ) {
//             document.activeElement.scrollIntoView();
//         }
//     });
// }

// var block = $("<div>").css({ height: "50px", width: "50px" }),
//     indicator = $("<div>").css({ height: "200px" }),
//     scrollbarWidth = 0;

// $("body").append(block.append(indicator));
// var w1 = $("div", block).innerWidth();
// block.css("overflow-y", "scroll");
// var w2 = $("div", block).innerWidth();
// $(block).remove();
// scrollbarWidth = w1 - w2;

// var bodyScrollOptions = {
//     reserveScrollBarGap: true,
// };

// function openModal(hrefModal) {
//     if ($(hrefModal).length > 0) {
//         $(hrefModal).fadeIn(300);

//         bodyScrollLock.clearAllBodyScrollLocks();
//         bodyScrollLock.disableBodyScroll(hrefModal, bodyScrollOptions);
//     }

//     $(hrefModal).find(".slick-slider").slick("setPosition");
// }

// function closeModals() {
//     if (scrollbarWidth > 0) {
//         $(".popup-block:not(:hidden)").fadeOut(200, function () {
//             bodyScrollLock.clearAllBodyScrollLocks();
//         });
//     } else {
//         $(".popup-block:not(:hidden)").fadeOut(200);

//         bodyScrollLock.clearAllBodyScrollLocks();
//     }
// }

// $(document.body).on("click", '[data-toggle="modal"]', function (e) {
//     e.preventDefault();

//     var hrefModal = $(this).attr("data-target");

//     openModal(hrefModal);
// });

// $(document.body).on("click", ".popup-block__overlay", function (e) {
//     var closeButton = $(this).children('[data-toggle="dismiss"]');

//     if (e.target != this) {
//         //		return false;
//     } else {
//         closeModals();
//     }
// });

// $(document.body).on("click", '[data-toggle="dismiss"]', function (e) {
//     e.preventDefault();

//     closeModals();
// });

// var play = document.querySelector(".advantages__play");
// var video = document.querySelector(".advantages__video");

// play.addEventListener("click", () => {
//     video.play();
//     video.setAttribute("controls", "controls");
//     play.classList.add("advantages__play--hidden");
// });

var PageHeader = document.querySelector(".page-header");
var PageHeaderBurger = document.querySelector(".page-header__burger");
var PageHeaderLeftBar = document.querySelector(".page-header__left-bar");
var PageHeaderRightBar = document.querySelector(".page-header__right-bar");
var PageHeaderLangButton = document.querySelector(
    ".page-header__button-lang--top"
);
var PageHeaderNav = document.querySelector(".page-header__nav");
var PageHeaderSocial = document.querySelector(".page-header__social");
var ButtonLang = document.querySelector(".button--lang");

PageHeaderBurger.addEventListener("click", function (evt) {
    evt.preventDefault();
    PageHeaderNav.classList.toggle("page-header__mobile-closed");
    // mainNav.classList.toggle("main-nav--closed");

    if (PageHeaderNav.classList.contains("page-header__mobile-closed")) {
        PageHeaderLeftBar.classList.add("page-header__mobile-closed");
        PageHeaderRightBar.classList.add("page-header__mobile-closed");
        PageHeaderLangButton.classList.add("page-header__mobile-closed");
        PageHeaderSocial.classList.add("page-header__mobile-closed");
        ButtonLang.classList.add("page-header__mobile-closed");
        PageHeader.classList.add("page-header__mobile-closed");
        PageHeaderBurger.classList.add("page-header__mobile-closed");
    } else {
        PageHeaderLeftBar.classList.remove("page-header__mobile-closed");
        PageHeaderRightBar.classList.remove("page-header__mobile-closed");
        PageHeaderLangButton.classList.remove("page-header__mobile-closed");
        PageHeaderSocial.classList.remove("page-header__mobile-closed");
        ButtonLang.classList.remove("page-header__mobile-closed");
        PageHeader.classList.remove("page-header__mobile-closed");
        PageHeaderBurger.classList.remove("page-header__mobile-closed");
    }
});

var play = document.querySelector(".advantages__play");
var video = document.querySelector(".advantages__video");

play.addEventListener("click", () => {
    video.play();
    video.setAttribute("controls", "controls");
    play.classList.add("advantages__play--hidden");
});
