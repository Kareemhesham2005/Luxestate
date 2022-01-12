let icon = document.querySelector("nav .icon");
let ul = document.querySelector("nav ul");
let lis = document.querySelectorAll("nav ul li");

icon.onclick = () => {
  if (ul.classList.contains("show")) {
    ul.classList.remove("show");
  } else {
    ul.classList.add("show");
  }
};

lis.forEach((li) => {
  li.onclick = () => {
    if (ul.classList.contains("show")) {
      ul.classList.remove("show");
    } else {
      ul.classList.add("show");
    }
  };
});

let loader = document.querySelector(".loader");

window.onload = () => {
  loader.style.display = "none";
};
