const togglesDown = [...document.getElementsByClassName("toggle-down")]
const togglesUp = [...document.getElementsByClassName("toggle-up")]
// carousel
const productContainer = [...document.getElementsByClassName("slider")]
const nxtBtn = [...document.querySelectorAll('.nextBtn')];
const preBtn = [...document.querySelectorAll('.prevBtn')];

const navBtns = [...document.querySelectorAll('.link')];

navBtns.forEach(navBtn => { 
  navBtn.addEventListener('click', () => {
    console.log(navBtn)
    navBtn.classList.toggle('active')

  })
})

togglesDown.forEach(toggle => { 
    toggle.addEventListener('click', () => {
        toggle.parentElement.getElementsByTagName('p')[0].classList.toggle('hidden')
        toggle.parentElement.getElementsByTagName('p')[0].style.marginTop = ".5rem"
        toggle.classList.toggle('hidden')
        toggle.parentElement.getElementsByClassName('toggle-up')[0].classList.toggle('hidden')
    })
})

togglesUp.forEach(toggle => { 
    toggle.addEventListener('click', () => {
        toggle.parentElement.getElementsByTagName('p')[0].classList.toggle('hidden')
        toggle.classList.toggle('hidden')
        toggle.parentElement.getElementsByClassName('toggle-down')[0].classList.toggle('hidden')
    })
})



productContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Menu Burger
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let menuOpen =false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.remove('hidden');
    menu.classList.add('visible');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('visible');
    menu.classList.add('hidden');
    menuOpen = false;
  }
});

// Fade in & Sliders
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

let theme = localStorage.getItem('theme')

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
  };

const appearOnScroll = new IntersectionObserver 
  (function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target)
      }
    })
  }, 
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  })
  
  sliders.forEach(slider => {
    appearOnScroll.observe(slider)
  })
