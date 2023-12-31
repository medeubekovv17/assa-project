document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.results__view-feedbacks-cards-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Переместите активную карточку в центр
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      // Переместите остальные карточки вверх и вниз
      cards.forEach(c => {
        if (c !== card) {
          if (c.offsetTop < card.offsetTop) {
            c.classList.add('inactive-top');
            c.classList.remove('inactive-bottom');
          } else {
            c.classList.add('inactive-bottom');
            c.classList.remove('inactive-top');
          }
        }
      });

      // Переместите обертку карточек вверх и вниз
      cardWrapper.style.transform = `translateY(-${card.offsetTop}px)`;
    });
  });
});