
"use strict";

const stars = document.querySelectorAll("#star");
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

stars.forEach(star => {
    let duration = Math.random() * (0.4) + 1.3;
    // console.log(duration);
    star.style.animation = `stars ${duration}s linear infinite alternate-reverse`;
});

window.addEventListener('load', function() {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");

    setTimeout(()=> {
        popup.style.display = "block";
    }, 5000);

    setInterval(()=> {
        popup.style.display = "block";
    }, 100000);

});
const buttons = document.querySelectorAll("a");

buttons.forEach((button) => {
  button.onclick = function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    this.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };
});

close.addEventListener('click', function() {
    popup.style.display = "none";
});
