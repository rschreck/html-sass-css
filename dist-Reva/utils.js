export function makeItActive(myDIV) {
  var els = document.getElementsByClassName("side-nav__item");
  Array.from(els).forEach((el) => {
    el.classList.remove("activate-menu");
  });
  var element = document.getElementById(myDIV);
  element.classList.add("activate-menu");
}
