var canvas = document.createElement("canvas"),
    c = canvas.getContext("2d");
    
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

c.fillStyle = "black";
c.fillRect(0,0,canvas.width,canvas.height);
    
function Particle() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    this.vx = Math.random() * 10 - 5;
    this.vy = Math.random() * 10 - 5;
    
    this.gravity = 0.3;
}
Particle.prototype.draw = function() {
    this.x += this.vx;
    this.y += this.vy;
    
    this.vy += this.gravity;
    
    c.fillStyle = "red";
    c.fillRect(this.x,this.y,10,10);
};

var particle = new Particle();

setInterval(function(){
    c.fillStyle = "rgba(0,0,0,0.2)";
    c.fillRect(0,0,canvas.width,canvas.height);

    particle.draw();
}, 30);