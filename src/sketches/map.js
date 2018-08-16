import pFive from 'p5';

export default function sketch(p5) {
    let player;
    let bullet;
    let players = [];
    let background = 10;
    let bullets = [];

    p5.disableFriendlyErrors = true;

    p5.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        background = props.color
    }

    p5.setup = function () {
        p5.frameRate(23);
        let box = p5.createCanvas(window.innerWidth, window.innerHeight / 2);
        player = new Player(box.width / 2, box.height / 2);
    };

    class Player {
        constructor(xPos, yPos) {
            this.x = xPos;
            this.y = yPos;
            this.hitpoints = 50;
            this.diameter = 50;
            this.speed = 1;
            this.weapon = {};
            this.pos = p5.createVector(this.x, this.y);
        }
        display() {
            p5.rect(this.x, this.y, this.diameter, this.diameter);
            p5.rectMode(p5.CENTER);
        }
        move() {
            if (this.x < p5.width - this.diameter / 2) {
                if (p5.keyIsDown(p5.RIGHT_ARROW) || p5.keyIsDown(68)) {
                    this.x = this.x + 5;
                }
            }
            if (this.x > 0 + this.diameter / 2) {
                if (p5.keyIsDown(p5.LEFT_ARROW) || p5.keyIsDown(65)) {
                    this.x = this.x - 5;
                }
            }
            if (this.y < p5.height - this.diameter / 2) {
                if (p5.keyIsDown(p5.DOWN_ARROW) || p5.keyIsDown(83)) {
                    this.y = this.y + 5;
                }
            }
            if (this.y > 0 + this.diameter / 2) {
                if (p5.keyIsDown(p5.UP_ARROW) || p5.keyIsDown(87)) {
                    this.y = this.y - 5;
                }
            }
        }
        shoot() {
            let mouseDirection = p5.createVector(p5.mouseX, p5.mouseY).sub(this.pos).heading();
            p5.mousePressed = () => {
                bullets.push(new Bullet(this.x, this.y, mouseDirection));
                if (bullets.length > 9) {
                    bullets.splice(0, 1);
                }
            }
        }
        update() {
            this.pos = p5.createVector(this.x, this.y);
            p5.stroke(20);
            p5.line(p5.mouseX, p5.mouseY, this.x, this.y);
        }
    };

    class Bullet {
        constructor(startingPositionX, startingPositionY, angle) {
            this.r = 10;
            this.pos = p5.createVector(startingPositionX, startingPositionY);
            this.speed = 10;
            this.vel = pFive.Vector.fromAngle(angle).mult(this.speed);
            this.dead = false;
        }
        display() {
            p5.fill(255, 255, 255);
            p5.ellipse(this.pos.x, this.pos.y, this.r);
        }
        update() {
            this.pos = p5.createVector(this.pos.x, this.pos.y);
            this.pos.add(this.vel);
            // if (p5.offScreen(this.pos.x, this.pos.y, this.radius)) this.dead = true;
            console.log(this.dead);
        }
    }

    p5.draw = function () {
        p5.background(background[0], background[1], background[2]);
        player.move();
        player.display();
        player.update();
        player.shoot();
        if (bullets.length > 0) {
            bullets.forEach(bullet => {
                bullet.display();
                bullet.update();
            })
        }
        let fps = p5.frameRate();
        p5.text("FPS: " + fps.toFixed(0), 10, p5.height - 10);
    };
}

// Ship.prototype.hit = function (obj) {
//     var d = dist(this.pos.x, this.pos.y, obj.pos.x, obj.pos.y);
//     if (d < this.r + obj.r) {
//         return true;
//     } else {
//         return false;
//     }
// }
