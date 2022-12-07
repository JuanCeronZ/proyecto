// Funcion para el menu responsive
$("#menu").click(function () {
  $("#contmenu").toggleClass("abrirmenu");
});

// Funcion para desplazamiento de los vinculos
$(".btn_ancla").click(function () {
  var ancla = $(this).attr("href");
  $("html,body").animate(
    {
      scrollTop: $(ancla).offset().top,
    },
    1000
  );
  $("#contmenu").toggleClass("abrirmenu");
});

// Funcion para el boton subir
$(document).ready(function () {
  $("#subir").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0px",
      },
      1000
    );
  });
});
  //slider
  $(function () {
    $("#slider4").responsiveSlides({
      auto: false,
      pager: false,
      nav: true,
      speed: 500,
      namespace: "callbacks",
      before: function () {
        $('.events').append("<li>before event fired.</li>");
      },
      after: function () {
        $('.events').append("<li>after event fired.</li>");
      }
    });
  });

const carrusel2 = document.querySelector(".carrusel-items");
let maxScrollLeft = carrusel2.scrollWidth - carrusel2.clientWidth;
let intervalo = null;
let step = 1;
const iniciar = () =>{
intervalo = setInterval(function () {
  carrusel2.scrollLeft = carrusel2.scrollLeft + step;
  if (carrusel2.scrollLeft === maxScrollLeft){
    step = step * -1;
  }else if (carrusel2.scrollLeft === 0){
    step = step * -1;
  }
  },10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel2.addEventListener("mouseover",() => {
  stop();
});
carrusel2.addEventListener("mouseout",() => {
  iniciar();
});

iniciar();