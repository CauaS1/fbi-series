const image = document.querySelector('.fbi');
const text = document.querySelector('.text')
const anm = new TimelineMax();

anm.fromTo(image, 1, { height: "0%" }, { hieght: "80%", ease: Power2.easeInOut })
  .fromTo(
    image,
    1,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0 },
    "-=0.5"
  )
  .fromTo(
    text,
    1,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0 },
    "-=0.5"
  )


image.onclick = () => {
    anm.fromTo(image, 3, {width: "80%"}, {width: "100%"})

  setTimeout(() => {
    window.location.href = ''
  }, 2000)

} 