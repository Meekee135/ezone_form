import "./styles/main.scss";
// import curDot from "cursor-dot";
// const cursor = curDot();
// cursor({
//   zIndex: 100,
//   diameter: 80,
//   borderWidth: 1,
//   borderColor: "transparent",
//   easing: 4,
//   background: "#ddd",
// });

import { gsap } from "gsap/all";
// import { gsap, ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);

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
  console.log("clicked");
  document.querySelector(".popup").classList.add("form-window");

  // document.querySelector(".closeArticle").addEventListener("click", () => {
  //     document.querySelector(".modal-article").style.display = "none";
  // });
}

document.querySelectorAll(".lastQ .field input").forEach((field) => {
  field.addEventListener("click", showSuggested);
});

function showSuggested() {
  const count = document.querySelectorAll('input[type="checkbox"]:checked').length;
  console.log(count);
  if (count === 1) {
    document.querySelector(".popup .articles .a1").style.display = "block";
  } else if (count === 2) {
    document.querySelector(".popup .articles .a2").style.display = "block";
  } else if (count === 3) {
    document.querySelector(".popup .articles .a3").style.display = "block";
  } else if (count === 4) {
    document.querySelector(".popup .articles .a4").style.display = "block";
  }
}

let visible = 0;
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const arrows = [next, prev];

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "next":
        if (visible < 3) {
          visible++;
          setVisible();
        }
        break;
      case "prev":
        if (visible > 0) {
          visible -= 1;
          setVisible();
        }
        break;
    }
  });
});
setVisible();
function setVisible() {
  let slides = [...document.querySelectorAll("fieldset")];
  slides.forEach((slide) => {
    if (slides.indexOf(slide) == visible) {
      slide.classList.add("visible");
    } else {
      slide.classList.remove("visible");
    }
  });
  setMarker();
}

function setMarker() {
  const marker = document.querySelector("#Rectangle_45");
  switch (visible) {
    case 0:
      marker.style.height = "15%";
      break;
    case 1:
      marker.style.height = "44%";
      break;
    case 2:
      marker.style.height = "72%";
      break;
    case 3:
      marker.style.height = "100%";
      break;
  }
}

// const payload = {
//     header: "hi mom",
//     other: "here goes",
//   };

//   fetch(`/endpoint`, {
//     method: "post",
//     body: JSON.stringify(payload),
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((d) => {});
