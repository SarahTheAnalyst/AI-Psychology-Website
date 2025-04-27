window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

  //FIX THE BUBBLES FOR THE PHONES
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
  