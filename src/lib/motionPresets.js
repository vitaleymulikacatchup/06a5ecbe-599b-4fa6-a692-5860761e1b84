export const fadeUpPreset = (delay = 0, duration = 1.0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

export const fadeDownPreset = (delay = 0, duration = 1.0) => ({
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

export const fadeLeftPreset = (delay = 0, duration = 1.0) => ({
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

export const fadeRightPreset = (delay = 0, duration = 1.0) => ({
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

export const fadeInPreset = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

export const scaleInPreset = (delay = 0, duration = 0.9) => ({
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

export const scaleUpPreset = (delay = 0, duration = 1.1) => ({
  initial: { opacity: 0, scale: 0.9, y: 10 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: [0.25, 0.46, 0.45, 0.94] }
});

export const scaleDownPreset = (delay = 0, duration = 1.1) => ({
  initial: { opacity: 0, scale: 1.1 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeInOut" }
});

export const blurFadePreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, filter: "blur(10px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

export const blurUpPreset = (delay = 0, duration = 1.3) => ({
  initial: { opacity: 0, filter: "blur(8px)", y: 15 },
  whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: [0.43, 0.13, 0.23, 0.96] }
});

export const rotateFadePreset = (delay = 0, duration = 1.0) => ({
  initial: { opacity: 0, rotate: -5 },
  whileInView: { opacity: 1, rotate: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

export const rotateScalePreset = (delay = 0, duration = 1.1) => ({
  initial: { opacity: 0, rotate: -3, scale: 0.95 },
  whileInView: { opacity: 1, rotate: 0, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeInOut" }
});

export const slideUpPreset = (delay = 0, duration = 1.0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

export const slideDownPreset = (delay = 0, duration = 1.0) => ({
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

export const slideLeftPreset = (delay = 0, duration = 1.0) => ({
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

export const slideRightPreset = (delay = 0, duration = 1.0) => ({
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

export const bounceInPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, scale: 0.3 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: [0.68, -0.55, 0.265, 1.55] }
});

export const elasticUpPreset = (delay = 0, duration = 1.3) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: [0.68, -0.6, 0.32, 1.6] }
});

export const staggerFadeUpPreset = (index, baseDelay = 0.05, duration = 0.6) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay: index * baseDelay, duration, ease: "easeOut" }
});

export const staggerScalePreset = (index, baseDelay = 0.06, duration = 0.7) => ({
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay: index * baseDelay, duration, ease: "easeOut" }
});

export const staggerSlideLeftPreset = (index, baseDelay = 0.04, duration = 0.8) => ({
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay: index * baseDelay, duration, ease: "easeOut" }
});

export const staggerBlurPreset = (index, baseDelay = 0.05, duration = 0.9) => ({
  initial: { opacity: 0, filter: "blur(8px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { delay: index * baseDelay, duration, ease: "easeOut" }
});

export const staggerRotatePreset = (index, baseDelay = 0.07, duration = 0.75) => ({
  initial: { opacity: 0, rotate: -5 },
  whileInView: { opacity: 1, rotate: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay: index * baseDelay, duration, ease: "easeOut" }
});