export const smoothScrollTo = (targetY: number, duration = 1000) => {
  const startY = window.scrollY;
  const distanceY = targetY - startY;
  const startTime = performance.now();

  function animation(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // EaseOutCubic
    window.scrollTo(0, startY + distanceY * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}