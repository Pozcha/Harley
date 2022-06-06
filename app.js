const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
  slide.addEventListener('click', () => {
    removeSlideActive();

    slide.classList.add('active');
  });
}

function removeSlideActive() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}
