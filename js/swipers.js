var showBoxSwiper = new Swiper('.showBox', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000
  }
})
console.log(showBoxSwiper.el)
showBoxSwiper.el.onmouseenter = () => {
  showBoxSwiper.autoplay.stop()
}
showBoxSwiper.el.onmouseleave = () => {
  showBoxSwiper.autoplay.start()
};

const catalogSwiper = new Swiper('.catalogSwiper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 4000
  },
  effect: 'cube',
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
})