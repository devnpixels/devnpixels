anime({
  targets: '.logoBox',
  rotateX : ['180deg', 0],
  duration : 5000
})

document.querySelectorAll('.socialBox a').forEach((el, i) => {
  anime({
    targets: el,
    translateX: [-50, 0],
    delay: i * 100,
    opacity: [0, 1],
    duration: 2000,
  })
});

[...document.querySelector('.introBox .intro .right article').children].forEach((el, i) => {
  anime({
    targets: el,
    opacity: [0, 1],
    translateY: [-50, 0],
    delay: 50 * i,
    duration: 2000
  })
});

[...document.querySelector('.frameBox').children].forEach((el, i) => {
  anime({
    targets: el,
    opacity: [0, 1],
    translateX: [50, 0],
    duration: 2000,
    delay: 100 * i
  })
});