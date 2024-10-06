// Получаем элементы динозавра, кактуса и книги
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const book = document.getElementById("book");
const scoreDisplay = document.getElementById("score");

let score = 0; // Изначальные очки

// Функция для прыжка динозавра
function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
}

// Обработка нажатия клавиши для прыжка
document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    jump();
  }
});

// Функция для проверки столкновения с кактусом и книгами
let isAlive = setInterval(() => {
  // Позиции динозавра, кактуса и книги
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));
  let bookLeft = parseInt(window.getComputedStyle(book).getPropertyValue("right"));

  // Столкновение с кактусом
  if (cactusLeft > 550 && cactusLeft < 600 && dinoTop <= 40) {
    alert("Потрачено!");
  }

  // Проверка на сбор книги
  if (bookLeft > 550 && bookLeft < 600 && dinoTop > 40) {
    score++;
    scoreDisplay.innerText = "Score: " + score;

    // Перемещаем книгу за пределы экрана, чтобы её можно было собрать снова
    book.style.right = "-20px";
  }
}, 10);
