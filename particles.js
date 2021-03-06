var canvas = document.createElement("canvas"),
    c = canvas.getContext("2d"),
    particles = {},
    particleIndex = 0,
    particleNum = 10,
    mousePos = {x: 0,y: 0};
    
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

c.fillStyle = "black";
c.fillRect(0,0,canvas.width,canvas.height);
    
function Particle() {
    this.x = mousePos.x;
    this.y = mousePos.y;
    this.vx = Math.random() * 10 - 5;
    this.vy = Math.random() * 10 - 5;
    
    this.gravity = 0.3;
    
    particleIndex++;
    particles[particleIndex] = this;
    
    console.log(particles[particleIndex]);
    
    this.id = particleIndex;
    
    this.life = 0;
    this.maxLife = Math.random() * 100 + 10;
    
    this.color = "hsla(" + parseInt(Math.random()*360, 10) + ",100%,50%,"+Math.random().toFixed(2)+")";
}
Particle.prototype.draw = function() {
    this.x += this.vx;
    this.y += this. vy;
    
    this.vy += this.gravity;
    
    if (Math.random() < 0.1) {
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() *10 - 5;
    }
    
    this.life++;
    
    if (this.life >= this.maxLife) {
        delete particles[this.id];
    }
    
    c.fillStyle= this.color;
    c.fillRect(this.x,this.y,10,10);
};

function getMousePos(event) {
    return {
        x: event.clientX,
        y: event.clientY 
    };
}

window.addEventListener("mousemove", function(event) {
    mousePos = getMousePos(event);
});

setInterval(function(){
    c.globalCompositeOperation = "source-over";
    c.fillStyle = "rgba(0,0,0,0.2)";
    c.fillRect(0,0,canvas.width,canvas.height);
    
    for (var i = 0; i < particleNum; i++) {
        new Particle();
    }    
    
    c.globalCompositeOperation = "lighter";
    for (var i in particles) {
        particles[i].draw();
    }
}, 30);
