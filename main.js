import "./style.scss";
import gsap from "gsap";

const items = document.querySelectorAll(".item");
const shoes = document.querySelector(".shoes");
const texts = document.querySelectorAll(".text");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    gsap.to(shoes, {
      duration: 2,
      y: `-${index * 100}%`,
      ease: "elastic.out(1,0.75)",
    });
    texts.forEach((text, i) => {
      if (i === index) {
        gsap.to(text, {
          duration: 1,
          opacity: 0,
          y: 50,
          ease: "elastic.out(1,0.75)",
        });
      } else {
        gsap.to(text, {
          duration: 1,
          opacity: 1,
          y: -50,
          ease: "elastic.out(1,0.75)",
        });
      }
    });
  });
});
