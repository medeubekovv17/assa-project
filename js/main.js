document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerIcon = document.querySelector('.burger-icon');
  const headerLinksNav = document.querySelector('.header__mobile');
  burgerMenu.addEventListener('click', function () {
    headerLinksNav.classList.toggle('show-mobile');
    burgerIcon.classList.toggle('show-mobile');
  });
});

$(document).ready(function(){
    $('#mobFeedbacksSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        adaptiveHeight: true
    });

    $('.results__view-mobFeedbacks-button.prev').click(function(){
        $('#mobFeedbacksSlider').slick('slickPrev');
    });

    $('.results__view-mobFeedbacks-button.next').click(function(){
        $('#mobFeedbacksSlider').slick('slickNext');
    });
});

function moveToCenter(element) {
    // Находим активную карточку и элементы inactive-top и inactive-bottom
    const activeCard = document.querySelector('.results__view-feedbacks-cards-card.active');
    const inactiveTop = document.querySelector('.results__view-feedbacks-cards-card.inactive-top');
    const inactiveBottom = document.querySelector('.results__view-feedbacks-cards-card.inactive-bottom');

    // Меняем классы для смены активной карточки
    activeCard.classList.remove('active');
    element.classList.add('active');

    // Перемещаем активную карточку на место inactive-top или inactive-bottom
    if (element.classList.contains('inactive-top')) {
        inactiveTop.classList.remove('inactive-top');
        activeCard.classList.add('inactive-top');
    } else if (element.classList.contains('inactive-bottom')) {
        inactiveBottom.classList.remove('inactive-bottom');
        activeCard.classList.add('inactive-bottom');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    // Найти все кнопки и ссылки с текстом "Оставить заявку" и добавить обработчик события
    var buttonsAndLinks = document.querySelectorAll('button, a');
    buttonsAndLinks.forEach(function (element) {
      if (element.textContent.trim() === 'Оставить заявку') {
        element.addEventListener('click', function () {
          myModal.show();
        });
      }
    });

    // Добавьте код для обработки формы, отправки данных и закрытия модального окна
  });
