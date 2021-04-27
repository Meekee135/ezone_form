import "./styles/main.scss";

import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


document.querySelector(".a3 .btn").addEventListener("click", openModal);

function openModal() {
    document.querySelector(".modal-article").style.display = "block";

    document.querySelector(".closeArticle").addEventListener("click", () => {
        document.querySelector(".modal-article").style.display = "none";
    })
}