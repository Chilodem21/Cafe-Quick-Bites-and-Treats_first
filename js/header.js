var nav = document.querySelector('.nav'); // выбираем элемент блока nav
var navHeight = nav.offsetHeight; // получаем высоту блока nav
window.addEventListener('scroll', function() { // добавляем обработчик события прокрутки страницы
  var scrollHeight = window.pageYOffset || document.documentElement.scrollTop; // получаем значение положения прокрутки страницы
  if (scrollHeight > navHeight) { // если положение прокрутки страницы больше, чем высота блока nav
    nav.classList.add('fixed'); // добавляем класс "fixed" элементу блока nav
  } else {
    nav.classList.remove('fixed'); // удаляем класс "fixed" у элемента блока nav
  }
});