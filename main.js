import "./styles/main.scss";

import { gsap } from "gsap/all";

document.querySelectorAll(".articles .article").forEach((article) => {
  article.addEventListener("click", openModal);
});

function openModal() {
  document.querySelector(".modal-article").style.display = "block";

  document.querySelector(".closeArticle").addEventListener("click", () => {
    document.querySelector(".modal-article").style.display = "none";
  });
}
document.querySelector(".btn.yes").addEventListener("click", openPopup);

function openPopup() {
  document.querySelector(".popup").classList.add("form-window");
}

// document.querySelectorAll(".lastQ .field input").forEach((field) => {
//   field.addEventListener("click", showSuggested);
// });

// function showSuggested() {
//   const count = document.querySelectorAll('input[type="checkbox"]:checked').length;
//   console.log(count);
//   const a1 = document.querySelector(".popup .articles .a1");
//   const a2 = document.querySelector(".popup .articles .a2");
//   const a3 = document.querySelector(".popup .articles .a3");
//   const a4 = document.querySelector(".popup .articles .a4");
//   if (count === 1) {
//     a1.style.transform = "translateY(400px)";
//     a1.style.display = "block";
//     a1.offsetHeight;
//     a1.style.transition = "transform .7s";
//     a1.style.transform = "translateY(0)";
//     a2.style.display = "none";
//   } else if (count === 2) {
//     a2.style.transform = "translateY(400px)";
//     a2.style.display = "block";
//     a2.offsetHeight;
//     a2.style.transition = "transform .7s";
//     a2.style.transform = "translateY(0)";
//     a3.style.display = "none";
//   } else if (count === 3) {
//     a3.style.transform = "translateY(400px)";
//     a3.style.display = "block";
//     a3.offsetHeight;
//     a3.style.transition = "transform .7s";
//     a3.style.transform = "translateY(0)";
//     a4.style.display = "none";
//   } else if (count === 4) {
//     a4.style.transform = "translateY(400px)";
//     a4.style.display = "block";
//     a4.offsetHeight;
//     a4.style.transition = "transform ..7s";
//     a4.style.transform = "translateY(0)";
//   } else if (count === 0) {
//     a1.style.display = "none";
//     const count = document.querySelectorAll('input[type="checkbox"]:checked').length;
//     console.log(count);
//     if (count === 1) {
//       document.querySelector(".popup .articles .a1").style.display = "block";
//     } else if (count === 2) {
//       document.querySelector(".popup .articles .a2").style.display = "block";
//     } else if (count === 3) {
//       document.querySelector(".popup .articles .a3").style.display = "block";
//     } else if (count === 4) {
//       document.querySelector(".popup .articles .a4").style.display = "block";
//     }
//   }
// }
function hidePopup() {
  document.querySelector(".popup").classList.remove("form-window");
}

let visible = 0;
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const arrows = [next, prev];

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "next":
        if (visible < 4) {
          visible++;
          setVisible();
          up();
        }
        break;
      case "prev":
        if (visible > 0) {
          visible -= 1;
          setVisible();
          down();
        }
        break;
    }
    console.log(visible);
  });
});
let slides = [...document.querySelectorAll("fieldset")];
function up() {
  let tlup = gsap.timeline();
  tlup.from(slides[visible], { opacity: 0, duration: 1 });
  tlup.to(slides[visible - 1], { opacity: 0, duration: 1 });
}
function down() {
  let tldown = gsap.timeline();
  tldown.to(slides[visible], { opacity: 1, duration: 1 });
  tldown.to(slides[visible - 1], { opacity: 1, duration: 1 });
}

function setVisible() {
  slides.forEach((slide) => {
    if (slides.indexOf(slide) == visible) {
      slide.classList.add("visible");
    } else {
      slide.classList.remove("visible");
    }
  });
  setMarker();
  showSuggested();
}
const articles = [...document.querySelectorAll(".popup .article")];

setVisible();
function setMarker() {
  const marker = document.querySelector("#Rectangle_45");
  const arrow = document.querySelector("#left .arrow");
  switch (visible) {
    case 0:
      marker.style.height = "15%";
      arrow.classList.add("cross");
      document.querySelector(".cross").addEventListener("click", hidePopup);
      break;
    case 1:
      marker.style.height = "44%";
      arrow.classList.remove("cross");
      document.querySelector(".grey").removeEventListener("click", hidePopup);

      break;
    case 2:
      marker.style.height = "72%";
      arrow.classList.remove("cross");
      document.querySelector(".grey").removeEventListener("click", hidePopup);
      break;
    case 3:
      marker.style.height = "100%";
      arrow.classList.add("cross");
      document.querySelector(".cross").addEventListener("click", hidePopup);

      articles.forEach((a) => {
        a.classList.add("paint");
      });
      break;
    case 4:
      hidePopup();
      break;
  }
}

function showSuggested() {
  if (visible >= 1) {
    output();
    let labels = [...document.querySelectorAll(".lastQ label")];
    labels.forEach((label) => {
      label.addEventListener("click", output);
    });
  } else {
    articles.forEach((a) => a.classList.remove("above"));
  }
  function output() {
    setTimeout(() => {
      articles.forEach((a) => a.classList.remove("above"));
      let checks = [...document.querySelectorAll('.lastQ input[type="checkbox"]:checked')];
      for (let i = 0; i < checks.length && i < 4; i++) {
        articles[i].classList.add("above");
      }
    }, 1);
  }
}

const dateInput = document.querySelector("#dob");
dateInput.onblur = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  let date = today.toLocaleDateString();
  let inputted = dateInput.value;
  formatDate(date, inputted);
};

function formatDate(date, inputted) {
  let year = date.split("/")[2] - 18;
  let month = date.split("/")[1];
  let day = date.split("/")[0];
  let eya = `${year}-${month}-${day}`;
  if (inputted > eya) {
    dateInput.nextElementSibling.style.color = "rgb(196, 0, 0)";
    dateInput.nextElementSibling.nextElementSibling.style.visibility = "visible";
  } else {
    dateInput.nextElementSibling.style.color = "";
    dateInput.nextElementSibling.nextElementSibling.style.visibility = "hidden";
  }
}

// formatDate(today, "mm/dd/yy");
