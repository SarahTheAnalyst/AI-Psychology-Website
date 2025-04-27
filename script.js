const canHover = window.matchMedia('(hover: hover)').matches;

if (!canHover) {
  // Only if device CANNOT hover (so, mobile)
  document.querySelectorAll('.bubble').forEach(bubble => {
    bubble.addEventListener('click', () => {
      if (!bubble.classList.contains('revealed')) {
        bubble.classList.add('revealed');
        bubble.innerHTML = bubble.getAttribute('data-info');
      } else {
        bubble.classList.remove('revealed');
        bubble.innerHTML = bubble.getAttribute('data-term');
      }
    });
  });
}
