const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});


document.getElementById( 'step__progressbar--line' ).value = 60;

// при нажатии на кнопку=текст запускается воспроизведение аудио
// условие, которое проверяет, играет ли аудио. Если аудио не играет, то запускается воспроизведение, иначе аудио ставится на паузу.

const audioButton = document.getElementById("audioButton");
const audioPlayer = document.getElementById("audioPlayer");

audioButton.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});

const audioButton1 = document.getElementById("audioButton1");
const audioPlayer1 = document.getElementById("audioPlayer1");

audioButton1.addEventListener("click", () => {
  if (audioPlayer1.paused) {
    audioPlayer1.play();
  } else {
    audioPlayer1.pause();
  }
});

// кнопка вверх

$("body").append('<div class="upbtn"></div>');
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".upbtn").css({
      transform: "scale(1)",
    });
  } else {
    $(".upbtn").css({
      transform: "scale(0)",
    });
  }
});
$(".upbtn").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});

// расчет
// изменение стилей кнопок

const CalculationBtn = document.querySelectorAll(".calculation__form--opt-btn");

for (var i = 0; i < CalculationBtn.length; i++) {
  CalculationBtn[i].addEventListener("click", function () {
    // Удаляем класс active у всех кнопок
    for (var j = 0; j < CalculationBtn.length; j++) {
      CalculationBtn[j].classList.remove("calculation__form--opt-btn-active");
    }
    // Добавляем класс active только нажатой кнопке
    this.classList.add("calculation__form--opt-btn-active");
  });
}

// врачи
// изменение стилей кнопок

const doctorsBtn = document.querySelectorAll(".doctors__tabs--btn");

for (var i = 0; i < CalculationBtn.length; i++) {
  doctorsBtn[i].addEventListener("click", function () {
    // Удаляем класс active у всех кнопок
    for (var j = 0; j < doctorsBtn.length; j++) {
      doctorsBtn[j].classList.remove("doctors__tabs--btn-active");
    }
    // Добавляем класс active только нажатой кнопке
    this.classList.add("doctors__tabs--btn-active");
  });
}

// отзывы, истории
// изменение стилей кнопок

const storiesBtn = document.querySelectorAll(".tabs__btn");

for (var i = 0; i < storiesBtn.length; i++) {
  storiesBtn[i].addEventListener("click", function () {
    // Удаляем класс active у всех кнопок
    for (var j = 0; j < storiesBtn.length; j++) {
      storiesBtn[j].classList.remove("tabs__btn--active");
    }
    // Добавляем класс active только нажатой кнопке
    this.classList.add("tabs__btn--active");
  });
}

