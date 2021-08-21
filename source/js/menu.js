const menuButton = document.querySelector(".navigation__button");
const menuButtonStick = document.querySelector(".navigation__button-stick"); // визуальный вид кнопки
const menu = document.querySelector(".navigation__menu");
const userLinks = document.querySelectorAll(".user-list__link");

menuButton.classList.remove("navigation__button--nojs"); // Если js не загрузился.
menuButtonStick.classList.add("navigation__button-stick--closed");
swapClass(menu, "navigation__menu--nojs", "navigation__menu--hidden")

menuButton.addEventListener("click", function() {
  toggle(menuButtonStick, "navigation__button-stick--opened", "navigation__button-stick--closed");
  toggle(menu, "navigation__menu--hidden", "navigation__menu--visible")
});

// Клик мимо меню, закрывает его
window.addEventListener("click", function(evt) {
  if (!evt.target.closest(".navigation__button") && !evt.target.closest(".navigation__menu--visible")) {
      swapClass(menu, "navigation__menu--visible", "navigation__menu--hidden");
      swapClass(menuButtonStick, "navigation__button-stick--opened", "navigation__button-stick--closed");
  };
});

// Чтобы фокус не сбежал)
userLinks[userLinks.length - 1].onfocus = function () {
    function focusTrap (evt) {
        if(evt.key === "Tab") {
            evt.preventDefault();
            menuButton.focus();

            window.removeEventListener("keydown", focusTrap);
        }
    }
    window.addEventListener("keydown", focusTrap);
};

function toggle (element, on, off) {
  element.classList.toggle(on);
  element.classList.toggle(off);
}

function swapClass (element, remove, add) {
  element.classList.remove(remove);
  element.classList.add(add);
}
