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
    const a1 = document.querySelector(".popup .articles .a1");
    const a2 = document.querySelector(".popup .articles .a2");
    const a3 = document.querySelector(".popup .articles .a3");
    const a4 = document.querySelector(".popup .articles .a4");
    if (count === 1) {
        a1.style.transform = "translateY(400px)";
        a1.style.display = "block";
        a1.offsetHeight;
        a1.style.transition = "transform .7s";
        a1.style.transform = "translateY(0)";
        a2.style.display = "none";
    } else if (count === 2) {
        a2.style.transform = "translateY(400px)";
        a2.style.display = "block";
        a2.offsetHeight;
        a2.style.transition = "transform .7s";
        a2.style.transform = "translateY(0)";
        a3.style.display = "none";
    } else if (count === 3) {
        a3.style.transform = "translateY(400px)";
        a3.style.display = "block";
        a3.offsetHeight;
        a3.style.transition = "transform .7s";
        a3.style.transform = "translateY(0)";
        a4.style.display = "none";
    } else if (count === 4) {
        a4.style.transform = "translateY(400px)";
        a4.style.display = "block";
        a4.offsetHeight;
        a4.style.transition = "transform ..7s";
        a4.style.transform = "translateY(0)";
    } else if (count === 0) {
        a1.style.display = "none";
    }

}







// asd
//  // - create FLIP-animation to animate featureElement from img in target, to
//     //   its intended position. Do it with normal animation or transition class!
//     // FIRST
//     const start = document.querySelector(`figure[data-feature="${feature}"`).getBoundingClientRect();
//     console.log(start);
//     // LAST
//     const end = childElement.getBoundingClientRect();
//     console.log(end);
//     // INVERT (translate element to the start position)
//     const diffX = start.x - end.x;
//     const diffY = start.y - end.y;
//     childElement.style.transform = `translate(${diffX}px, ${diffY}px)`;
//     childElement.offsetHeight;
//     // PLAY: animate the element to translate (0,0)
//     childElement.style.transition = "transform 3s";
//     childElement.style.transform = "translate(0, 0)";
//     console.log(features);

//     asd