var prevScrollPos = window.pageYOffset;
var navbar = document.querySelector('.navbar');
var windowHeight = window.innerHeight;
var threshold = windowHeight * 0.3; // 70% av fönsterhöjden
var isAtTop = true; // En flagga för att kontrollera om användaren är vid toppen

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  // Kolla om användaren är nära toppen av sidan
  isAtTop = currentScrollPos <= threshold;

  // Kontrollera om användaren scrollar uppåt och är tillräckligt nära toppen
  if (prevScrollPos > currentScrollPos && isAtTop) {
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
}


/*
document.addEventListener("DOMContentLoaded", function () {


  new cursoreffects.bubbleCursor();

  // Här initierar du din "typing animation" (om den är en del av din webbplats)

});
*/




/*


/!*cursor-effects*!/
window.addEventListener("load", (event) => {
  new cursoreffects.bubbleCursor();
});

function bubbleCursor(options) {
  let hasWrapperEl = options && options.element;
  let element = hasWrapperEl || document.body;

  let width = window.innerWidth;
  let height = window.innerHeight;
  let cursor = { x: width / 2, y: width / 2 };
  let particles = [];
  let canvas, context;

  let canvImages = [];

  function init(wrapperEl) {
    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");

    canvas.style.top = "0px";
    canvas.style.left = "0px";
    canvas.style.pointerEvents = "none";

    if (hasWrapperEl) {
      canvas.style.position = "absolute";
      element.appendChild(canvas);
      canvas.width = element.clientWidth;
      canvas.height = element.clientHeight;
    } else {
      canvas.style.position = "fixed";
      document.body.appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
    }

    bindEvents();
    loop();
  }

  // Bind events that are needed
  function bindEvents() {
    element.addEventListener("mousemove", onMouseMove);
    element.addEventListener("touchmove", onTouchMove, { passive: true });
    element.addEventListener("touchstart", onTouchMove, { passive: true });
    window.addEventListener("resize", onWindowResize);
  }

  function onWindowResize(e) {
    width = window.innerWidth;
    height = window.innerHeight;

    if (hasWrapperEl) {
      canvas.width = element.clientWidth;
      canvas.height = element.clientHeight;
    } else {
      canvas.width = width;
      canvas.height = height;
    }
  }

  function onTouchMove(e) {
    if (e.touches.length > 0) {
      for (let i = 0; i < e.touches.length; i++) {
        addParticle(
          e.touches[i].clientX,
          e.touches[i].clientY,
          canvImages[Math.floor(Math.random() * canvImages.length)]
        );
      }
    }
  }

  function onMouseMove(e) {
    if (hasWrapperEl) {
      const boundingRect = element.getBoundingClientRect();
      cursor.x = e.clientX - boundingRect.left;
      cursor.y = e.clientY - boundingRect.top;
    } else {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    }

    addParticle(cursor.x, cursor.y);
  }

  function addParticle(x, y, img) {
    particles.push(new Particle(x, y, img));
  }

  function updateParticles() {
    context.clearRect(0, 0, width, height);

    // Update
    for (let i = 0; i < particles.length; i++) {
      particles[i].update(context);
    }

    // Remove dead particles
    for (let i = particles.length - 1; i >= 0; i--) {
      if (particles[i].lifeSpan < 0) {
        particles.splice(i, 1);
      }
    }
  }

  function loop() {
    updateParticles();
    requestAnimationFrame(loop);
  }

  function Particle(x, y, canvasItem) {
    const lifeSpan = Math.floor(Math.random() * 60 + 60);
    this.initialLifeSpan = lifeSpan; //
    this.lifeSpan = lifeSpan; //ms
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10),
      y: -0.4 + Math.random() * -1,
    };
    this.position = { x: x, y: y };
    this.canv = canvasItem;

    this.baseDimension = 4;

    this.update = function (context) {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
      this.velocity.y -= Math.random() / 600;
      this.lifeSpan--;

      const scale =
        0.2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan;

      context.fillStyle = "#90bdd0";
      context.strokeStyle = "#3a92c5";
      context.beginPath();
      context.arc(
        this.position.x - (this.baseDimension / 2) * scale,
        this.position.y - this.baseDimension / 2,
        this.baseDimension * scale,
        0,
        2 * Math.PI
      );

      context.stroke();
      context.fill();

      context.closePath();
    };
  }

  init();
}
*/



/* typing animation blå div*/

var i = 0;
var txt =
  "From Vision to Reality: I bring brands to life and transform ideas into beautifully designed websites that captivate and engage. Got an interesting project? I can help you. 👩‍💻\n";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

/*end type div */

/*
// JavaScript-kod för "bubble" effekt
const bubblesElement = document.getElementById("bubbles");

for (let i = 0; i < 20; i++) {
  const bubble = document.createElement("div");
  bubble.className = "bubble";

  bubblesElement.appendChild(bubble);
}
*/

/*button action scroll */

