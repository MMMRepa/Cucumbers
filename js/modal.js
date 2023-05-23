// Получаем элементы модального окна и кнопки для его открытия/закрытия
var modal = document.getElementById("modal");
var btnOpenModal = document.querySelectorAll(".open-modal");
var btnCloseModal = document.getElementById("close-modal");

// Функция для открытия модального окна
function openModal() {
   modal.style.display = "flex";
   document.body.style.overflow = "hidden"; // Блокировка скроллинга основной страницы
}

// Функция для закрытия модального окна
function closeModal() {
   modal.style.display = "none";
   document.body.style.overflow = "auto"; // Разблокировка скроллинга основной страницы
}

// Обработчики событий для открытия и закрытия модального окна
for (let i = 0;i < btnOpenModal.length;i++) {
   btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);