$(function () {
  var $cards = $("#cards").find(".card"),
    cardsRange = 6; // количество карточек, которое покажем вначале

  $cards.slice(cardsRange).addClass("card--hidden"); // прячем все, кроме cardsRange

  // показываем/скрываем
  $("#show-cards").click(function () {
    $cards.slice(cardsRange).toggleClass("card--hidden");
  });
});
