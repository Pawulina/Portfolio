particlesJS.load("particles-js", "assets/particles.json", function () {
	console.log("callback - particles.js config loaded");
});

// Stars cursor
// ==============
document.addEventListener("mousemove", function (e) {
	const star = document.createElement("div");
	star.classList.add("cursor-star");

	const offsetX = Math.random() * 10 - 5;
	const offsetY = Math.random() * 10 - 5;

	star.style.left = e.pageX + offsetX + "px";
	star.style.top = e.pageY + offsetY + "px";

	const size = Math.floor(Math.random() * 5) + 3;
	star.style.width = star.style.height = size + "px";
	document.body.appendChild(star);

	setTimeout(() => {
		star.style.opacity = 0;
		star.style.transform = `translate(${Math.random() * 10 - 5}px, ${
			Math.random() * 10 - 5
		}px) rotate(${Math.random() * 20 - 10}deg) scale(0.8)`;
	}, 20);

	setTimeout(() => {
		star.remove();
	}, 400);
});

// GSAP animation
// ______________________________

gsap.registerPlugin(ScrollTrigger);

// Education timeline
// ==================

gsap.from(".timeline-item", {
	scrollTrigger: {
		trigger: ".education-timeline",
		start: "top 90%",
		toggleActions: "play none none reverse",
	},
	opacity: 0,
	y: 50,
	duration: 1,
	ease: "power2.out",
	stagger: 0.4,
});

gsap.to(".education-line", {
	scrollTrigger: {
		trigger: ".education-timeline",
		start: "top bottom",
		end: "bottom bottom",
		scrub: 2,
		toggleActions: "play none none reverse",
	},
	scaleY: 1,
	opacity: 1,
	ease: "none",
});

// Experience timeline
// ===================
// ===================

gsap.from(".experience-item", {
	scrollTrigger: {
		trigger: ".experience-timeline",
		start: "top 90%",
		toggleActions: "play none none reverse",
	},
	opacity: 0,
	y: 50,
	duration: 2,
	ease: "power2.out",
	stagger: 0.6,
});

gsap.to(".experience-line", {
	scrollTrigger: {
		trigger: ".experience-timeline",
		start: "top bottom",
		end: "bottom bottom",
		scrub: 1.7,
		toggleActions: "play none none reverse",
	},
	scaleY: 1,
	opacity: 1,
	ease: "none",
});

// My photo animation
// ==================

gsap.fromTo(
	".myPhoto",
	{ x: "-100%" },
	{
		x: "0%",
		duration: 2,
		ease: "power1.out",
		scrollTrigger: {
			trigger: ".myPhoto",
			start: "top 80%",
			end: "top 50%",
			scrub: 5,
		},
	}
);

// About me animation
// ==================
gsap.fromTo(
	".aboutMe-paragraph",
	{ x: "100%" },
	{
		x: "0%",
		duration: 2,
		ease: "power1.out",
		scrollTrigger: {
			trigger: ".aboutMe-paragraph",
			start: "top 80%",
			end: "top 50%",
			scrub: 5,
		},
	}
);
