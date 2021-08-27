const modalBasket = document.querySelector(".modal-basket");
const buttonOrder = document.querySelectorAll(".button-order");
const buttonsSize = document.querySelectorAll(".size__radio");
const buttonAdd   = document.querySelector(".modal-basket__button");

let visible = "modal-basket--visible";
let hidden  = "modal-basket--hidden";

buttonOrder.forEach( el => {
  el.addEventListener("click", (evt) => {
    evt.preventDefault();
    swap(modalBasket, visible, hidden);
    buttonsSize[0].focus();
  });
});

window.addEventListener("click", (evt) => {
  if (modalBasket.classList.contains(visible)) {
    if (!evt.target.closest(".modal-basket__container") && !evt.target.closest(".button-order")) {
      swap(modalBasket, hidden, visible);
    };
  };
});

window.addEventListener("keydown", (evt) => {
  if (modalBasket.classList.contains(visible)) {
    if (evt.key === "Esc" || evt.key === "Escape") {
      swap(modalBasket, hidden, visible);
    }
  };
});

buttonAdd.onfocus = () => {
  function focusTrap (evt) {
    if(evt.key === "Tab") {
      evt.preventDefault();
      buttonsSize[0].focus();

      window.removeEventListener("keydown", focusTrap);
    };
  };
  window.addEventListener("keydown", focusTrap);
};


function swap (element, on, off) {
  element.classList.toggle(on);
  element.classList.toggle(off);
}
