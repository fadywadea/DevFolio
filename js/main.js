// let sectionOffset = $(".test").offset().top;
// let sectionOffset2 = $("#service").offset().top;

// $(window).scroll(function () {
//   let windowScroll = $(window).scrollTop();

//   if (windowScroll > sectionOffset) {
//     $(".navbar").css('backgroundColor', 'rgba(0, 0, 0, 0.7)');
//   } else {
//     $(".navbar").css('backgroundColor', 'transparent');
//   }

//   if (windowScroll > sectionOffset2) {
//     $(".navbar").css('backgroundColor', 'rgba(255, 5, 55, 0.7)');
//   }
// });

$("a").click(function (eventInfo) {
  let aHref = eventInfo.target.getAttribute('href');
  let sectionOffset3 = $(aHref).offset().top;
  $("body").animate({ scrollTop: sectionOffset3 }, 3000);
});