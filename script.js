const canvas = document.getElementById("stripes-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stripes = [];

class Stripe {
    constructor(x, speed, width, color) {
        this.x = x;
        this.y = 0;
        this.width = width;
        this.height = canvas.height;
        this.speed = speed;
        this.color = color;
    }

    update() {
        this.x += this.speed;
        if (this.x > canvas.width) {
            this.x = -this.width;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


function initStripes() {
    const colors = ["rgba(255, 0, 0, 0.3)", "rgba(255, 0, 0, 0.5)", "rgba(255, 0, 0, 0.7)"];

    for (let i = 0; i < 10; i++) {
        let width = Math.random() * 30 + 20; // Ширина от 20px до 50px
        let speed = Math.random() * 2 + 0.5; // Скорость от 0.5 до 2.5
        let x = Math.random() * canvas.width;
        let color = colors[Math.floor(Math.random() * colors.length)];

        stripes.push(new Stripe(x, speed, width, color));
    }
}


function animateStripes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stripes.forEach((stripe) => {
        stripe.update();
        stripe.draw();
    });

    requestAnimationFrame(animateStripes);
}


initStripes();
animateStripes();


window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".hero h1").style.opacity = "1";
        document.querySelector(".hero h1").style.transform = "translateY(0)";
    }, 500);

    setTimeout(() => {
        document.querySelector(".hero p").style.opacity = "1";
        document.querySelector(".hero p").style.transform = "translateY(0)";
    }, 1000);

    setTimeout(() => {
        document.querySelector(".hero button").style.opacity = "1";
        document.querySelector(".hero button").style.transform = "translateY(0)";
    }, 1500);
});
