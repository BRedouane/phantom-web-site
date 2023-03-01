ScrollSmoother.create({
    smooth: 2              
  });
  
  
  gsap.fromTo('body', {
    "--bg-x": '40%',
    "--bg-y": '20%'
  }, {
    "--bg-x": '60%',
    "--bg-y": '30%',
    ease: 'none',
    scrollTrigger: {
      trigger: ".effect-wrapper", 
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      // markers: true,
    }, 
  })
  