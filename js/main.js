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