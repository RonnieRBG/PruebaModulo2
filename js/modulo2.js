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
  $(".caja p").hide();

  $(".caja").click(function () {
    $(this).find("p").slideToggle();
  });
});

$(document).ready(function() {
  $(".nav-item").click(
    function() {
      $(this).addClass(".active");
    },
    function() {
      $(this).removeClass(".active");
    }
  );
});
