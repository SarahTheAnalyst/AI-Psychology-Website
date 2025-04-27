window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  
    const isMobile = window.matchMedia("(hover: none)").matches;
  
    if (isMobile) {
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
  });
  