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

// import { gsap, ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);

document.querySelector(".a3").addEventListener("click", openModal);

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
