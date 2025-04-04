import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// Animate centered buttons on page load
gsap.from("section:first-of-type button", {
    y: 0,
    opacity: 100,
    duration: 1,
    ease: "back.out(1.7)",
    stagger: 0.15,
    delay: 0.5
});


// ======================
// Text Animations
// ======================
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

// ======================
// Button Scroll Navigation
// ======================
document.getElementById("helloSectionBtn").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: "#helloSection",
            offsetY: 50,
        },
        ease: "power2.out",
        onComplete: () => ScrollTrigger.refresh()
    });
});

document.getElementById("scrollTriggerSectionBtn").addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: "#scrollTriggerSection",
            offsetY: 50,
        },
        ease: "power2.out",
        onComplete: () => ScrollTrigger.refresh()
    });
});

// ======================
// ScrollTrigger Animation: Rotate .box while scrolling
// ======================
gsap.to('.box', {
    rotation: 360,
    scrollTrigger: {
        trigger: '.box',
        start: 'top 80%',
        end: 'bottom center',
        scrub: true,
        //markers: true
    },
    opacity: 1, // Also fade in as it rotates
    ease: 'none'
});