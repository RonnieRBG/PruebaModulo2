$(document).ready(function() {
  $(".caja").hover(
    function() {
      $(this).addClass("hovered");
    },
    function() {
      $(this).removeClass("hovered");
    }
  );
});

$(document).ready(function () {
  // Oculta todos los <p> al cargar
  $(".caja p").hide();

  // Toggle al hacer clic en .caja
  $(".caja").click(function () {
    $(this).find("p").slideToggle(); // Alterna con animación
  });
});

