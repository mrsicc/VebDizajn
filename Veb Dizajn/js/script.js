let slike = [
  "slike/stadion.jpg",
  "slike/tim.jpg",
  "slike/navijaci.jpg"
];

let index = 0;

function promeniSliku() {
  let img = document.getElementById("slika");

  if (img) {
    index++;

    if (index >= slike.length) {
      index = 0;
    }

    img.src = slike[index];
  }
}

setInterval(promeniSliku, 3000);

 document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("kontaktForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const ime = document.getElementById("ime").value.trim();
    const email = document.getElementById("email").value.trim();
    const poruka = document.getElementById("poruka").value.trim();

    if (ime === "" || email === "" || poruka === "") {
      status.innerText = "Molimo popunite sva polja!";
      status.style.color = "red";
      return;
    }

    if (!email.includes("@")) {
      status.innerText = "Email mora da sadrži znak @";
      status.style.color = "red";
      return;
    }

    status.innerText = "Poruka je uspešno poslata!";
    status.style.color = "green";

    form.reset();
  });

});

function promeniTemu() {
  document.body.classList.toggle("dark");

  let icon = document.getElementById("themeIcon");

  if (document.body.classList.contains("dark")) {
    icon.textContent = "☀️";
    localStorage.setItem("tema", "dark");
  } else {
    icon.textContent = "🌙";
    localStorage.setItem("tema", "light");
  }
}

window.addEventListener("load", function () {
  let icon = document.getElementById("themeIcon");

  if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
    icon.textContent = "☀️";
  } else {
    icon.textContent = "🌙";
  }
});

function promeniMeni() {
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");

  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}