if (window.lucide) {
  lucide.createIcons();
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && window.gsap && window.ScrollTrigger) {
  const plugins = [ScrollTrigger];

  if (window.SplitText) {
    plugins.push(SplitText);
  }

  gsap.registerPlugin(...plugins);

  const fadeIn = (targets, options = {}) => {
    const items = gsap.utils.toArray(targets);
    if (!items.length) return;

    gsap.from(items, {
      autoAlpha: 0,
      y: options.y ?? 34,
      duration: options.duration ?? 0.85,
      ease: options.ease ?? "power3.out",
      stagger: options.stagger ?? 0,
      scrollTrigger: {
        trigger: options.trigger || items[0],
        start: options.start || "top 78%",
        once: true,
      },
    });
  };

  const initAnimations = () => {
    gsap.from(".brand", {
      autoAlpha: 0,
      y: -18,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.15,
    });

    gsap.from(".hero h1, .hero__lead, .hero__pillars", {
      autoAlpha: 0,
      y: 34,
      duration: 0.95,
      ease: "power3.out",
      stagger: 0.14,
      delay: 0.25,
    });

    gsap.fromTo(
      ".hero .cta-btn",
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        delay: 0.58,
        clearProps: "opacity,visibility,transform",
      }
    );

    fadeIn(".partners h2", { trigger: ".partners", start: "top 74%" });
    fadeIn(".partners__list li", {
      trigger: ".partners__list",
      start: "top 78%",
      y: 26,
      stagger: 0.16,
    });

    fadeIn(".about .section-kicker", { trigger: ".about", start: "top 76%" });

    if (window.SplitText) {
      SplitText.create(".split-copy", {
        type: "words",
        wordsClass: "split-word",
        autoSplit: true,
        onSplit(self) {
          gsap.set(self.words, {
            color: "#555247",
            opacity: 0.34,
            x: -14,
          });

          return gsap.to(self.words, {
            color: (index, word) => (word.closest("strong") ? "#d8bd58" : "#f7f3e8"),
            opacity: 1,
            x: 0,
            ease: "none",
            stagger: 0.035,
            scrollTrigger: {
              trigger: ".about",
              start: "top 62%",
              end: "top 12%",
              scrub: 0.7,
            },
          });
        },
      });
    } else {
      fadeIn(".split-copy", { trigger: ".about", start: "top 70%" });
    }

    fadeIn(".how-it-works .hiw-kicker, .how-it-works .hiw-subtitle", {
      trigger: ".how-it-works",
      start: "top 70%",
      y: 28,
      stagger: 0.12,
    });
    fadeIn(".step", {
      trigger: ".steps",
      start: "top 76%",
      y: 36,
      stagger: 0.14,
    });
    fadeIn(".step__arrow", {
      trigger: ".steps",
      start: "top 76%",
      y: 10,
      duration: 0.65,
      stagger: 0.14,
    });
    fadeIn(".hiw-footer", {
      trigger: ".hiw-footer",
      start: "top 86%",
      y: 18,
    });

    fadeIn(".solutions-kicker, .solutions-title, .solutions-subtitle", {
      trigger: ".solutions",
      start: "top 70%",
      y: 30,
      stagger: 0.12,
    });
    fadeIn(".solution-card", {
      trigger: ".solutions-grid",
      start: "top 78%",
      y: 34,
      stagger: 0.12,
    });

    fadeIn(".final-kicker, .final-title, .final-copy", {
      trigger: ".final-cta",
      start: "top 72%",
      y: 32,
      stagger: 0.12,
    });
    fadeIn(".final-contact__icon, .final-contact__text", {
      trigger: ".final-contact",
      start: "top 82%",
      y: 24,
      stagger: 0.12,
    });
    gsap.fromTo(
      ".final-contact__button",
      { autoAlpha: 0, y: 18 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: ".final-contact",
          start: "top 82%",
          once: true,
        },
      }
    );

    ScrollTrigger.addEventListener("refreshInit", () => {
      gsap.set(".cta-btn", { autoAlpha: 1 });
    });
    fadeIn(".site-footer > *", {
      trigger: ".site-footer",
      start: "top 90%",
      y: 14,
      duration: 0.65,
      stagger: 0.1,
    });
  };

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(initAnimations);
  } else {
    initAnimations();
  }
}
