anime({
  targets: '.logoBox',
  rotateX : ['180deg', 0],
  duration : 5000
})

anime({
  loop: true,
  targets: ['.logoBox i', '.profile header h1 i'],
  rotate: '1turn',
  easing: 'linear',
  duration: 2000
})

document.querySelectorAll('hr').forEach((el, i) => {
  anime({
    targets: el,
    width: [0, `${el.clientWidth}px`],
    duration: 1000,
    easing: 'linear'
  })
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

document.querySelectorAll('.straw a').forEach((el,i)=>{
  anime({
    targets : el,
    translateY : [-50, 0],
    rotate : '1turn',
    delay : i * 50,
    opacity : [0,1],
    duration : 2000
  })
})