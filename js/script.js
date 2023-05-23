// Получаем ссылки на кнопки "gallery_backward" и "gallery_forward"
const backButton = document.getElementById('gallery_backward');
const forwardButton = document.getElementById('gallery_forward');
let number = 1;
let elementUp = document.querySelector(`.gallery_img:nth-child(${number})`);
const gallery_img = document.querySelectorAll('.gallery_img');
// Получаем ссылку на контейнер с элементами галереи
const galleryContainer = document.querySelector('.gallery_elements');

// Устанавливаем обработчики событий на кнопки
backButton.addEventListener('click', scrollBackward);
forwardButton.addEventListener('click', scrollForward);

// Функция прокрутки назад
function scrollBackward() {
   number -= 1;
   galleryContainer.scrollLeft -= 408; // Измените значение 200 на желаемую величину прокрутки
   elementUp.style.animation = 'carousel-up 0.5s forwards';
   elementUp = document.querySelector(`.gallery_img:nth-child(${number})`);
   elementUp.style.animation = 'carousel-down 0.5s forwards';
}

// Функция прокрутки вперед
function scrollForward() {
   number += 1;
   galleryContainer.scrollLeft += 408; // Измените значение 200 на желаемую величину прокрутки
   elementUp.style.animation = 'carousel-up 0.5s forwards';
   elementUp = document.querySelector(`.gallery_img:nth-child(${number})`);
   elementUp.style.animation = 'carousel-down 0.5s forwards';
}