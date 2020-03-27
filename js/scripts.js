$(document).ready(function(){
  $(".button").click(function(){
    $(this).toggleClass("term-mode");
    $(this).toggleClass("definition-mode");
    $(this).children("h1").toggleClass("term-enabled");
    $(this).children("p").toggleClass("definition-enabled");
  });
});