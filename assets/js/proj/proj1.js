//More info about this project and the newer optimized version: https://isladjan.com/work/4/
//Author: isladjan - https://isladjan.com/

gsap.registerPlugin(ScrollTrigger);

let speed = 100;
let height = document.querySelector("svg").getBBox().height;
//let svgCord = screenToSVG(document.querySelector("svg"), window.innerWidth / 2, window.innerHeight / 2);

gsap.set("#h2-1", { opacity: 0 });
gsap.set("#bg_grad", { attr: { cy: "-50" } });
gsap.set(["#dinoL", "#dinoR"], { y: 80 });
gsap.set("#dinoL", { x: -10 });

const mm = gsap.matchMedia();
mm.add("(max-width: 1922px)", () => {
    gsap.set(["#cloudStart-L", "#cloudStart-R"], { x: 10, opacity: 1 });
});

/*  SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "45% 100%",
    scrub: 3
});

// hills animation
scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0);
scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudsBig-L", { y: 4.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudsBig-R", { y: 4.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudStart-L", { x: -300 }, 0);
scene1.to("#cloudStart-R", { x: 300 }, 0);

//animate text
scene1.to("#info", { y: 8 * speed }, 0);

/*   Bird   */
gsap.fromTo(
    "#bird",
    { opacity: 1 },
    {
        y: -250,
        x: 800,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "15% top",
            end: "60% 100%",
            scrub: 4,
            onEnter: function () {
                gsap.to("#bird", { scaleX: 1, rotation: 0 });
            },
            onLeave: function () {
                gsap.to("#bird", { scaleX: -1, rotation: -15 });
            }
        }
    }
);

/* Clouds  */
let clouds = gsap.timeline();
ScrollTrigger.create({
    animation: clouds,
    trigger: ".scrollElement",
    start: "top top",
    end: "70% 100%",
    scrub: 1
});

clouds.to("#cloud1", { x: 500 }, 0);
clouds.to("#cloud2", { x: 1000 }, 0);
clouds.to("#cloud3", { x: -1000 }, 0);
clouds.to("#cloud4", { x: -700, y: 25 }, 0);

/* Sun motion Animation  */
let sun = gsap.timeline();
ScrollTrigger.create({
    animation: sun,
    trigger: ".scrollElement",
    start: "1% top",
    end: "2150 100%",
    scrub: 2
    //markers: true,
    //preventOverlaps: true, //if true, it will affect all preceding ScrollTriggers (you can use for example 'scrollTrigger1')
    //fastScrollEnd: true,   //(default 2500px/s)
});

//sun motion
sun.fromTo("#bg_grad", { attr: { cy: "-50" } }, { attr: { cy: "330" } }, 0);
//bg change
//sun.to("#sun", { attr: { offset: "0.15" } }, 0);
sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0);
sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0);
sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0);
sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0);
sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

/*   SCENE 2  */
let scene2 = gsap.timeline();
ScrollTrigger.create({
    animation: scene2,
    trigger: ".scrollElement",
    start: "15% top",
    end: "40% 100%",
    scrub: 3
});

scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

/* Bats */
gsap.set("#bats", { transformOrigin: "50% 50%" });
gsap.fromTo(
    "#bats",
    { opacity: 1, y: 400, scale: 0 },
    {
        y: 20,
        scale: 0.8,
        //transformOrigin: "50% 50%",
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "40% top",
            end: "70% 100%",
            scrub: 3,
            onEnter: function () {
                gsap.utils.toArray("#bats path").forEach((item, i) => {
                    gsap.to(item, {
                        scaleX: 0.5,
                        yoyo: true,
                        repeat: 9,
                        transformOrigin: "50% 50%",
                        duration: 0.15,
                        delay: 0.7 + i / 10
                    });
                });
                gsap.set("#bats", { opacity: 1 });
            },
            onLeave: function () {
                //gsap.to("#bats", { opacity: 0, delay: 2 });
            }
        }
    }
);

/* Sun increase */
let sun2 = gsap.timeline();
ScrollTrigger.create({
    animation: sun2,
    trigger: ".scrollElement",
    start: "2000 top",
    end: "5000 100%",
    scrub: 2
});

sun2.to("#sun", { attr: { offset: "1.4" } }, 0);
sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
sun2.to("#sun", { attr: { "stop-color": "#ffff00" } }, 0);
sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0);
sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0);
sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0);

/* Transition (from Scene2 to Scene3) */
gsap.set("#scene3", { y: height - 40, visibility: "visible" });
let sceneTransition = gsap.timeline();
ScrollTrigger.create({
    animation: sceneTransition,
    trigger: ".scrollElement",
    start: "60% top",
    end: "bottom 100%",
    scrub: 3
});

sceneTransition.to("#h2-1", { y: -height - 100, scale: 1.5, transformOrigin: "50% 50%" }, 0);
sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.0);
sceneTransition.to("#bg2", { y: 0 }, 0);

/* Scene 3 */
let scene3 = gsap.timeline();
ScrollTrigger.create({
    animation: scene3,
    trigger: ".scrollElement",
    start: "70% 50%",
    end: "bottom 100%",
    scrub: 3
});

//Hills motion
scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0);
scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03);
scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06);
scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09);
scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12);

//stars
scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);

// Scroll Back text
scene3.fromTo("#arrow2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.25);
scene3.fromTo("#text2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.3);
scene3.to("footer", { opacity: 1 }, 0.3);

//gradient value change
scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

/*   falling star   */
gsap.set("#fstar", { y: -400 });
let fstarTL = gsap.timeline();
ScrollTrigger.create({
    animation: fstarTL,
    trigger: ".scrollElement",
    start: "4200 top",
    end: "6000 bottom",
    scrub: 2,
    onEnter: function () {
        gsap.set("#fstar", { opacity: 1 });
    },
    onLeave: function () {
        gsap.set("#fstar", { opacity: 0 });
    }
});
fstarTL.to("#fstar", { x: -700, y: -250, ease: "power2.out" }, 0);

gsap.fromTo("#stars path:nth-of-type(1)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 0.8 });
gsap.fromTo("#stars path:nth-of-type(3)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1.8 });
gsap.fromTo("#stars path:nth-of-type(5)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1 });
gsap.fromTo("#stars path:nth-of-type(8)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1.2 });
gsap.fromTo("#stars path:nth-of-type(11)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 0.5 });
gsap.fromTo("#stars path:nth-of-type(15)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 2 });
gsap.fromTo("#stars path:nth-of-type(17)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1.1 });
gsap.fromTo("#stars path:nth-of-type(18)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1.4 });
gsap.fromTo("#stars path:nth-of-type(25)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1.1 });
gsap.fromTo("#stars path:nth-of-type(28)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 0.9 });
gsap.fromTo("#stars path:nth-of-type(30)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1.3 });
gsap.fromTo("#stars path:nth-of-type(35)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 2 });
gsap.fromTo("#stars path:nth-of-type(40)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 0.8 });
gsap.fromTo("#stars path:nth-of-type(45)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1.8 });
gsap.fromTo("#stars path:nth-of-type(48)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1 });

//reset scrollbar position after refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// function screenToSVG(svg, x, y) {
//     var pt = svg.createSVGPoint();
//     pt.x = x;
//     pt.y = y;
//     var cursorPt = pt.matrixTransform(svg.getScreenCTM().inverse());
//     return { x: Math.floor(cursorPt.x), y: Math.floor(cursorPt.y) }
// }