let cursor = document.getElementById('cursor')
let cursorID = document.getElementById('cursor-id')

document.addEventListener('mousemove', function(e){
    cursor.style.left = e.x + 'px'
    cursor.style.top = e.y + 'px'
    cursorID.style.left = e.x -50 + 'px' 
    cursorID.style.top = e.y - 50 + 'px' 

})



gsap.to('#nav',{
    backgroundColor: '#000', 
    duration: 1,
    height: "12vh",
    color: '#000',
    scrollTrigger:{
        trigger: '#nav', //nav bar pe jab scroll ho tab scroller triggerd ho 
        scroller: 'body', // or body body pe scroller hoga mera
        // markers:true,
        start: "top -18%", // jab top se 20% niche aa jau scroll karte hue tab upar likha hua code chal jayega bg color '#000' and height 7rem ho jaye etc.
        end: "top -18%",  // jab wapas 
        scrub:2 //  in loop chalayege scroller ko thoda soothing ke sath, value 1 se 5 kuch bhi de sakte ho for smoothing 
    }
})

gsap.to('#main',{
    backgroundColor: '#000',
    scrollTrigger:{
        trigger:'#main',
        scroller: 'body',
        start: 'top -30%',
        end: 'top -80%',
        scrub:2,
    }
})




gsap.from('.lesson-card',{
    opacity:0,
    stagger: 1,
    scrollTrigger:{
        trigger:'#page2',
        scroller:'body',
        start: 'top 40%',
        end: 'top 40%',
        // markers: true,
        scrub:3
    }
})

gsap.from('#cricket-lesson',{
    y: 80,  
    scrollTrigger:{
        trigger:'#page2',
        scroller:'body',
        start: 'top 40%',
        end: 'top 40%',
        // markers: true,
        scrub:1
    }
})

gsap.to('#first-quote',{
    top:-15,
    scrollTrigger:{
        trigger:'#page3',
        scroller:'body',
        start: 'top 80%',
        end: 'top 65%',
        // markers: true,
        scrub:1
    }
})

gsap.to('#second-quote',{
    bottom:10,
    scrollTrigger:{
        trigger:'#page3',
        scroller:'body',
        start: 'top 55%',
        end: 'top 60%',
        // markers: true,
        scrub:5
    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });


  gsap.from('#f1 img,#f2,#f2,#f3,#f4',{
    y: 90,
    opacity: 0,
    duration: 1,
    stagger:0.7,
    scrollTrigger: {
      trigger: "#footer",
      scroller: "body",
    //   markers:true,
      start: "top 73%",
      end: "top 85%",
      scrub: 2  }})
  
let anchors = document.querySelectorAll('#image-slide-box a')
anchors.forEach((elem) => {
    elem.addEventListener('click', function(e){
        anchors.forEach((elem)=>{
            elem.style.backgroundColor='#fff'
        })
        elem.style.backgroundColor = '#95c11e'

    })
});

let link =  document.querySelectorAll('#nav a')

link.forEach((elem)=>{
    elem.addEventListener('click', function(e){
        link.forEach((elem)=>{
            elem.style.textDecoration = 'none'

        })
        elem.style.textDecoration = 'underline'
})

})
