function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
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
    render();
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
./0062.png
./0063.png
./0064.png
./0065.png
./0066.png
./0067.png
./0068.png
./0069.png
./0070.png
./0071.png
./0072.png
./0073.png
./0074.png
./0075.png
./0076.png
./0077.png
./0078.png
./0079.png
./0080.png
./0081.png
./0082.png
./0083.png
./0084.png
./0085.png
./0086.png
./0087.png
./0088.png
./0089.png
./0090.png
./0091.png
./0092.png
./0093.png
./0094.png
./0095.png
./0096.png
./0097.png
./0098.png
./0099.png
./0100.png
./0101.png
./0102.png
./0103.png
./0104.png
./0105.png
./0106.png
./0107.png
./0108.png
./0109.png
./0110.png
./0111.png
./0112.png
./0113.png
./0114.png
./0115.png
./0116.png
./0117.png
./0118.png
./0119.png
./0120.png
./0121.png
./0122.png
./0123.png
./0124.png

     
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 120;
  
  const images = [];
  const imageSeq = {
    frame: 0,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width; // horizontal ratio
    var vRatio = canvas.height / img.height; // vertical ratio
    var ratio = Math.min(hRatio, vRatio); // ensures the image fits within the canvas and maintains aspect ratio

    // Adjust this value to push the image further left. Negative values will move it more to the left.
    var leftOffset = -580; // Adjust this value as needed to move the image further to the left.

    var centerShift_x = leftOffset; // Applying the left offset here

    // Calculate the vertical center shift to keep the image vertically centered
    var centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
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