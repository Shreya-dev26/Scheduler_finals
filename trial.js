function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render(); // Ensure rendering on resize
});

function files(index) {
    var data = `
    ./0007.png
    ./0008.png
    ./0009.png
    ./0010.png
    ./0011.png
    ./0012.png
    ./0013.png
    ./0014.png
    ./0015.png
    ./0016.png
    ./0017.png
    ./0018.png
    ./0019.png
    ./0020.png
    ./0021.png
    ./0022.png
    ./0023.png
    ./0024.png
    ./0025.png
    ./0026.png
    ./0027.png
    ./0028.png
    ./0029.png
    ./0030.png
    ./0031.png
    ./0032.png
    ./0033.png
    ./0034.png
    ./0035.png
    ./0036.png
    ./0037.png
    ./0038.png
    ./0039.png
    ./0040.png
    ./0041.png
    ./0042.png
    ./0043.png
    ./0044.png
    ./0045.png
    ./0046.png
    ./0047.png
    ./0048.png
    ./0049.png
    ./0050.png
    ./0051.png
    ./0052.png
    ./0053.png
    ./0054.png
    ./0055.png
    ./0056.png
    ./0057.png
    ./0058.png
    ./0059.png
    ./0060.png
    ./0061.png

    `.split("\n")[index].trim();
    return data;
}

const frameCount = 200; // Adjust based on the actual number of images
const images = [];
let allImagesLoaded = 0;

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.onload = () => {
        allImagesLoaded++;
        if (allImagesLoaded === frameCount) {
            images[0].onload(); // Trigger the initial render when all images are loaded
        }
    };
    img.src = files(i);
    images.push(img);
}

const imageSeq = { frame: 0 };

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: 0.15,
        trigger: "#page>canvas",
        start: "top top",
        end: "600% top",
        scroller: "#main",
    },
    onUpdate: () => render(),
});

function render() {
    scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);

    var leftOffset = -50;
    var centerShift_x = leftOffset;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}


ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })