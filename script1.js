var t1 = gsap.timeline()

t1.from(".nav h2,.nav .right h3",{
    y:-50,
    duration:2,
    delay:0.5,
    opacity:0,
    stagger:0.2
})
t1.from(".left h1",{
    x:-100,
    duration:1,
    delay:0.5,
    opacity:0,
})

t1.from(".left button",{
    opacity:0,
    duration:1,
    // delay:0.5
})
t1.from(".right2",{
    opacity:0,
    duration:1,
    // delay:0.5
})