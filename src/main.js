import './styles/main.css';

const env = document.querySelector('body').dataset.env;

// Check that service workers are supported
if ('serviceWorker' in navigator && env === 'production') {
  // use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    try {
      navigator.serviceWorker.register('/sw.js');
    } catch (error) {
      console.error('Service worker registration failed: ', error);
    }
  });
}

// const title = document.querySelector('#title');
// const speed = 0.2;
// 
// title.style.transform = 'scale( calc( var(--scrollparallax) * 1 ) )';
// 
// window.addEventListener('scroll', function() {
//   title.style.setProperty('--scrollparallax', (document.body.scrollTop || document.documentElement.scrollTop) * speed);
// });
const image1 = document.getElementById('image1');
window.addEventListener('scroll', () => {
  let scrollY = window.scrollY/8000;
  let scale = 1;
  let amount = scale + scrollY;
  if (amount >= 1) {
    image1.style.transform = 'scale('+amount+')';
  } else {
    image1.style.transform = 'scale(1)';
  } 
});

const image2 = document.getElementById('image2');
window.addEventListener('scroll', () => {
  let scrollY2 = window.scrollY/9000;
  let scale = 1;
  let amount2 = scale + scrollY2;
  if (amount2 >= 1) {
  image2.style.transform = 'scale('+amount2+')';
  } else {
    image2.style.transform = 'scale(1)';
  }
});

const image3 = document.getElementById('image3');
window.addEventListener('scroll', () => {
  let scrollY3 = window.scrollY/8250;
  let scale = 1;
  let amount3 = (scale + scrollY3) - 0.1017;
  if (amount3 >= 1) {
  image3.style.transform = 'scale('+amount3+')';
  } else {
    image3.style.transform = 'scale(1)';
  }
});

const image4 = document.getElementById('image4');
window.addEventListener('scroll', () => {
  let scrollY4 = window.scrollY/9250;
  let scale = 1;
  let amount4 = (scale + scrollY4) - 0.1478;
  if (amount4 >= 1) {
  image4.style.transform = 'scale('+amount4+')';
  } else {
    amount4.style.transform = 'scale(1)';
  }
});
