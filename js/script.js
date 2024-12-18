// Слайдер КЕЙСЫ
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,      // Один слайд на экране
        spaceBetween: 10,      // Расстояние между слайдами
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,            // Зацикливание слайдера
    });
});

// FAQ ответы
document.addEventListener("DOMContentLoaded", function () {
    // Получаем все карточки FAQ
    const faqCards = document.querySelectorAll(".faq-card");

    faqCards.forEach((card) => {
        card.addEventListener("click", () => {
            // Переключаем класс 'open' для текущей карточки
            card.classList.toggle("open");
        });
    });
});

// Открытие попапа при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    popup.classList.add('show');
});

// Функция для закрытия попапа через крестик
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) { // Проверяем, существует ли элемент
        popup.classList.remove('show');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 1); // Убираем попап из DOM после анимации
    } 
}

// Функция для обработки нажатия "ДА, ВЕРНО"
function yesButtonClick() {
    closePopup('popup'); // Закрываем основной попап
    const popupYesRight = document.getElementById('popup-yes-right');
    popupYesRight.style.display = 'flex'; // Убедитесь, что он показывается
}

// Открытие попап-формы
document.addEventListener('DOMContentLoaded', () => {
    const popupForm = document.getElementById('popup-form');
    const closeBtn = document.querySelector('.popup-close');
    const promoButtons = document.querySelectorAll('.promo-button');

    // Открытие формы при клике на любую кнопку с классом promo-button
    promoButtons.forEach(button => {
        button.addEventListener('click', () => {
            popupForm.classList.add('show');
        });
    });

    // Закрытие формы при клике на кнопку закрытия
    function closeFormPopup() {
        popupForm.classList.remove('show');
    }

    window.closeFormPopup = closeFormPopup; // Делаем функцию доступной глобально
});