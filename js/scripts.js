const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu__overlay");
const dropdown_item = document.querySelector(".nav__links.services");
const dropdown_item_body = document.querySelector(".nav__links.services_body");
const body = document.querySelector("body");

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
  const target = event.target;
  if (
    (target.classList.contains("menu__overlay") ||
      target.classList.contains("menu__itembut")) &&
    !target.classList.contains("services")
  ) {
    menu.classList.remove("menu-active");
    hamburger.classList.remove("hamburger-active");
    body.style.overflow = "visible";
  }
});

function openDropdown(trigger, body, padding = 20) {
  body.style.height = body.scrollHeight + "px";
  trigger.classList.add("active");
}

function closeDropdown(trigger, body, padding = 20) {
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
