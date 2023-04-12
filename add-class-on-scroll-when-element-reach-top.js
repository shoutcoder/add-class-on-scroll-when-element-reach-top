const myElement = document.querySelector('Your Selector which track to reach top 0');

function toggleClassOnScroll() {
  const elementRect = myElement.getBoundingClientRect();
  if (elementRect.top <= 0) {
    document.querySelector('Selector on which you want to add class').classList.add('Class that you want to add');
  } else {
    document.querySelector('.main-banner-container').classList.remove('Class that you want to remove');
  }
}

window.addEventListener('scroll', toggleClassOnScroll);
