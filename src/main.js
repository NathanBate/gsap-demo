import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { gsap } from "gsap";

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

//setupCounter(document.querySelector('#counter'))

gsap.from("#hello", {
    duration: 1.5,
    repeat: -1,
    y: -100,
    opacity: 0,
    ease: "bounce.out",
});

gsap.from("#separate span", {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    repeat: -1,
    ease: "back.out(1.7)"
});

const tl = gsap.timeline({ repeat: -1 });

tl.from("#separate-timeline", { opacity: 0, scale: 0, duration: 1 })
    .to("#separate-timeline", { color: "#3498db", duration: 0.5 }, "+=0.5")
    .to("#separate-timeline", { rotate: 10, yoyo: true, repeat: 1, duration: 0.3 });

gsap.to("#loop", {
    rotation: 360,
    repeat: -1,
    ease: "none",
    duration: 10
});