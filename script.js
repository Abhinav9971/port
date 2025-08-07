gsap.from("#skills .flex", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
  },
});
gsap.registerPlugin(ScrollTrigger);

gsap.from("#skills .flex", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
  },
});

gsap.utils.toArray(".progress-bar").forEach((bar, index) => {
  const target =
    bar.previousElementSibling.querySelector(".counter").dataset.target;
  ScrollTrigger.create({
    trigger: bar,
    start: "top 90%",
    onEnter: () => {
      gsap.to(bar, {
        width: target + "%",
        duration: 1.5,
        ease: "power2.out",
      });
      let count = { val: 0 };
      gsap.to(count, {
        val: target,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          bar.previousElementSibling.querySelector(".counter").innerText =
            Math.floor(count.val);
        },
      });
    },
  });
});
