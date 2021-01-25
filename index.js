 gsap.from('.navbar h4',{opacity:0, duration:2, x:-50})
gsap.from('.links li', {opacity:0, duration:2,y:-40, stagger:0.2})
gsap.from('.info h4', {x:-60, opacity:0, duration:1, })
gsap.from('.info h1',{y:-40, opacity: 0, duration:1, delay:1})
gsap.from('.container .info p',{y:40, opacity: 0, duration:1, delay:1})


gsap.registerPlugin(ScrollTrigger);

let tl=gsap.timeline({scrollTrigger:{
    trigger:".info-parallel ",
    start:'top 60%',
    end:'top 5%',
    toggleActions:'restart none reverse pause',
    },
    default:{duration:5}
})
    .from('.info-parallel h4',{opacity:0,x:-50,})
    .from('.info-parallel .heading1',{y:-40, opacity: 0})
    .from('.info-parallel .sp',{y:40, opacity: 0} )
    .from('.info-parallel .limage .simage',{y:-40, opacity: 0, stagger:0.3})


let tl1=gsap.timeline({scrollTrigger:{
    trigger:".blogs .bheading",
    start:'top 60%',
    end:'top 5%',
    toggleActions:'restart none reverse none',
    },
    default:{duration:5}
})

    .from('.blogs',{"xPercent": -100, duration:1})
    .from('.blogs  h4',{opacity:0,x:-50})
    .from('.blogs  h1',{y:-40, opacity: 0})
    .from('.blogs .bheading .blog-pera',{y:40, opacity: 0})
    .from('.flex-blog .left-blog .blog',{x:-50, opacity:0, duration:1, stagger:0.3})
    .from('.flex-blog .left-blog button',{x:20, opacity:0, ease:'power0'})
    .from('.flex-blog .right-blog .blog',{x:50, opacity:0, duration:1, delay:-2, stagger:0.3})
    .from('.flex-blog .right-blog button',{x:-20, opacity:0, ease:'power0'})


let tl2=gsap.timeline({scrollTrigger:{
    trigger:".gallery .bheading",
    start:'top 60%',
    end:'bottom 50%',
    toggleActions:'restart none reverse none',
    },
    default:{duration:5}
})
    .from('.gallery  h4',{opacity:0,x:-50})
    .from('.gallery  h1',{y:-40, opacity: 0})
    .from('.gallery p',{y:40, opacity: 0})
    .from('.pictures .pic',{x:-60, opacity:0, stagger:0.2})

let tl3=gsap.timeline({scrollTrigger:{
    trigger:".why-us .bheading",
    start:'top 60%',
    end:'bottom 50%',
    toggleActions:'restart none reverse none',
    },
    default:{duration:5}
})
    .from('.why-us  h4',{opacity:0,x:-50})
    .from('.why-us  h1',{y:-40, opacity: 0})
    .from('.why-us p',{y:40, opacity: 0})
    .from('.infos .info',{x:-50, opacity:0, stagger:0.3})
    .from('.us-img',{y:-30, opacity:0})
    .from('.us-img img',{y:20, opacity:0})

let tl4=gsap.timeline({scrollTrigger:{
    trigger:".upcoming .bheading",
    start:'top 60%',
    end:'bottom 50%',
    toggleActions:'restart none reverse none',
    },
    default:{duration:5}
})
    .from('.upcoming h4',{opacity:0,x:-50})
    .from('.upcoming h1',{y:-40, opacity: 0})
    .from('.upcoming .bheading p',{y:40, opacity: 0})
    .from('.upcoming-infos video',{x:-50, opacity:0})
    .from('.video-info .vinfo',{x:40, opacity:0, stagger:0.3})


let tl5=gsap.timeline({scrollTrigger:{
    trigger:".reviews .bheading",
    start:'top 60%',
    end:'bottom 50%',
    toggleActions:'restart none none none',
    },
    default:{duration:5}
})
    .from('.reviews h4',{opacity:0,x:-50})
    .from('.reviews h1',{y:-40, opacity: 0})
    .from('.reviews .bheading p',{y:40, opacity: 0})
    .from('.reviews #person1',{x:-60, opacity:0})
    .from('.reviews #person2',{x:60, opacity:0})
    .from('.reviews #person3',{y:60, opacity:0})

let tl6=gsap.timeline({scrollTrigger:{
    trigger:"footer",
    toggleActions:'restart none reverse none',
    },
    default:{duration:5}
})
    .from("footer",{xPercent: -100, duration:.5})
    .from(".new a,.msg,button,.new-p",{x:50, opacity:0,stagger:0.09})
    .from(".bar",{x:50, opacity:0})
