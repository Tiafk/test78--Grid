document.addEventListener('DOMContentLoaded', function () {
  let closeBtn = document.querySelector ('.pop-up .close');
  let popupToggle = document.querySelector ('.header .btn');
  let popup = document.querySelector ('.pop-up');
  let background = document.querySelector('.background');

  popupToggle.addEventListener('click', (e) => {
    popup.classList.toggle('active');
    background.classList.add('active');
  });
  closeBtn.addEventListener('click', (e) => {
    popup.classList.remove('active');
    background.classList.remove('active');
  });
  document.addEventListener('click', (e) => {
    console.log(e.target);
    if ((!e.target.closest('.pop-up'))&& (e.target !== popupToggle) && (popup.classList.contains('active'))) {
      popup.classList.remove('active');
      background.classList.remove('active');
    }
  })
});