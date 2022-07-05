// Custom scripts

// Burger menu
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

// Submenu
const subMenuBtn = $(".menu__sub-menu-btn");
subMenuBtn.on("click", function () {
  let activeLink = $(this).closest(".menu__item-sub");
  activeLink.toggleClass("active");
});
$(document).mouseup(function (e) {
  let div = $(".menu__item-sub.active");
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    div.removeClass("active");
  }
});

// Scroll lock
function fixedNav() {
  const nav = document.querySelector("header");
  const breakpoint = 1;
  if (window.scrollY >= breakpoint) {
    nav.classList.add("header__fixed");
  } else {
    nav.classList.remove("header__fixed");
  }
}
window.addEventListener("scroll", fixedNav);

//Swiper
const swiper = new Swiper(".swiper", {
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Input mask
var inputs = document.querySelectorAll('input[type="tel"]');
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(inputs);

// Validation
function validateForms(selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function (form, value, ajax) {
      let formData = new FormData(form);
      fetch("mail.php", {
        method: "POST",
        body: formData,
      }).then(function () {
        alert("Ваша заявка принята. В ближайшее время с Вами свяжутся");
        form.reset();
      });
    },
  });
}
validateForms(".form", {
  name: { required: false },
  tel: { required: true },
  email: { required: false, email: true },
  messange: { required: false },
  checkbox: { required: true },
});
const isForm2 = document.querySelector(".form2");
if (isForm2 !== null) {
  validateForms(".form2", {
    name2: { required: false },
    tel2: { required: true },
    email2: { required: false, email: true },
    messange2: { required: false },
    checkbox2: { required: true },
  });
}

// Modal
function bindModal(trigger, modal, close) {
  (trigger = document.querySelectorAll(trigger)),
    (modal = document.querySelector(modal)),
    (close = document.querySelector(close));

  const body = document.body;

  trigger.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
      body.classList.add("locked");
    });
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
    body.classList.remove("locked");
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      body.classList.remove("locked");
    }
  });
}
bindModal(".modal__btn", ".modal__wrapper", ".modal__close");

const hostName = document.querySelector(".hostName");
if (hostName !== null) {
  hostName.innerHTML = document.location.host;
}

// Image resizer

$(function () {
  $(".minimized").click(function (event) {
    let i_path = $(this).attr("src");
    $("body").append(
      '<div id="overlay"></div><div id="magnify"><img src="' +
        i_path +
        '"><div id="close-popup"><i></i></div></div>'
    );
    $("#magnify").css({
      left: ($(document).width() - $("#magnify").outerWidth()) / 2,
      top: ($(window).height() - $("#magnify").outerHeight()) / 2,
    });
    $("#overlay, #magnify").fadeIn("fast");
  });

  $("body").on("click", "#close-popup, #overlay", function (event) {
    event.preventDefault();
    $("#overlay, #magnify").fadeOut("fast", function () {
      $("#close-popup, #magnify, #overlay").remove();
    });
  });
});

// Active menu link
const isSelect = document.getElementById("selected-menu-item-name");
if (isSelect !== null) {
  const selectMenuItem = document.querySelectorAll(".menu__sub-link");
  if (selectMenuItem !== null) {
    selectMenuItem.forEach((item) => {
      if (item.innerHTML === isSelect.innerHTML) {
        item.classList.add("active");
      }
    });
  }
}
