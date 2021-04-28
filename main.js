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


document.querySelectorAll(".articles .article").forEach(article => {
    article.addEventListener("click", openModal)
})

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

document.querySelectorAll(".lastQ .field input").forEach(field => {
    field.addEventListener("click", showSuggested)
})

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
