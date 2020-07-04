$(document).ready(function () {
  $('.hamburger').click(function (e) { 
      
      $('.hamburger').toggleClass('active');
      $('.navbar').toggleClass('open');
  });
  $('.optical').click(function (e) { 
    localStorage.setItem("css",".opticalline");
    localStorage.setItem("display","display");
    localStorage.setItem("block","block");
  });
  $('.sunglass').click(function (e) { 
    localStorage.setItem("css",".sunglassline");
    localStorage.setItem("display","display");
    localStorage.setItem("block","block");
  });
  $('.functional').click(function (e) { 
    localStorage.setItem("css",".functionalline");
    localStorage.setItem("display","display");
    localStorage.setItem("block","block");
  });
  $(localStorage.getItem("css")).css(localStorage.getItem("display"),localStorage.getItem("block"));
  localStorage.clear();
});