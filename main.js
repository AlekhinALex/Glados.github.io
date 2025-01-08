'use strict'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
if(ScrollTrigger.isTouch != 1){
    ScrollSmoother.create({
        wrapper:'.wrapper',
        content:'.content',
        smooth:1.6,
        effects:true,
    })

    gsap.fromTo('.main-header',{opacity: 1},{
        opacity: 0,
        scrollTrigger:{ 
            trigger:'.main-header',
            start:"center",
            end:"900",
            scrub:true
    }
    })
    gsap.fromTo('.main-tittle',{opacity: 1},{
        opacity: 0,
        scrollTrigger:{ 
            trigger:'.main-tittle',
            start:"center",
            end:"900",
            scrub:true
    }
    })
    let itemsL = document.querySelectorAll('.gallery__left .gallery__item')
    itemsL.forEach(item => {
        gsap.fromTo(item,{x: -90,opacity: 0},{
            opacity:1,
            x:0,
            scrollTrigger:{
                trigger:item,
                start:'-1000',
                end:'-100',
                scrub:true
        }
        })
    })

    let itemsR = document.querySelectorAll('.gallery__right .gallery__item')
    itemsR.forEach(item => {
        gsap.fromTo(item,{x: 90,opacity: 0},{
            opacity:1,
            x:0,
            scrollTrigger:{
                trigger:item,
                start:'-1000',
                end:'-100',
                scrub:true
        }
        })
    })

    let itemC = document.querySelectorAll(".circle");
    itemC.forEach(item => {
        gsap.fromTo(item,{y:-30,opacity:0},{
            opacity:1,
            y:0,
            scrollTrigger:{
                trigger:"..circle2",
                start:center,
                end:bottom,
                scrub:true
            }
        })
    })
    let itemC2 = document.querySelectorAll(".circle2");
    itemC.forEach(item => {
        gsap.fromTo(item,{y:30,opacity:0},{
            opacity:1,
            y:0,
            scrollTrigger:{
                trigger:"..circle2",
                start:center,
                end:bottom,
                scrub:true
            }
        })
    })

    let itemStyleL = document.querySelectorAll(".style_gallery__left .style_gallery__item");
    itemStyleL.forEach(item =>{
        gsap.fromTo(item,{x: 120,opacity: 0},{
            opacity:1,
            x:0,
            scrollTrigger:{
                trigger:item,
                start:'-1110',
                end:'-100',
                scrub:true
        }
        })
    })
    let itemStyleR = document.querySelectorAll(".style_gallery__right .style_gallery__item");
    itemStyleR.forEach(item =>{
        gsap.fromTo(item,{x: -120,opacity: 0},{
            opacity:1,
            x:0,
            scrollTrigger:{
                trigger:item,
                start:'-1110',
                end:'-100',
                scrub:true
        }
        })
    })

}


