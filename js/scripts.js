const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu__overlay");
const dropdown_item = document.querySelector(".nav__links.services");
const dropdown_item_body = document.querySelector(".nav__links.services_body");
const body = document.querySelector("body");
const menuPhone = document.querySelector(".menu__phone");
const closes = document.querySelector(".menu__itembut");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  menu.classList.toggle("menu-active");
  if (hamburger.classList.contains("hamburger-active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
  }
});

menu.addEventListener("click", (event) => {
  if (event.target.classList.contains("menu__overlay")) {
    menu.classList.remove("menu-active");
    hamburger.classList.remove("hamburger-active");
    body.style.overflow = "visible";
  }
});
menu.addEventListener("click", (event) => {
  if (event.target.classList.contains("menu__itembut"))
    menu.classList.remove("menu-active");
  hamburger.classList.remove("hamburger-active");
  body.style.overflow = "visible";
});

function openDropdown(trigger, body) {
  console.log();
  padding = 20;
  body.style.height = body.scrollHeight + "px";
  trigger.classList.add("active");
}

function closeDropdown(trigger, body) {
  padding = 20;
  body.style.height = "0px";
  trigger.classList.remove("active");
}

dropdown_item.addEventListener("click", (e) =>
  e.target.classList.contains("active")
    ? closeDropdown(e.target, dropdown_item_body)
    : openDropdown(e.target, dropdown_item_body)
);

$(".about__forms").submit(function (e) {
  e.preventDefault();

  // if (!$(this).valid()) {
  //   return;
  // }

  $.ajax({
    type: "POST",
    url: "../mailer/smart.php",
    data: $(this).serialize(),
  }).done(function () {
    $(this).find("input").val("");

    $("form").trigger("reset");
  });
  return false;
});
