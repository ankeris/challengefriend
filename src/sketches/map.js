

export default function sketch(p5) {
    let player;
    let players = [];
    let background = 10;


    p5.disableFriendlyErrors = true;

    p5.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        background = props.color
    }

    p5.setup = function () {
        p5.frameRate(23);
        let box = p5.createCanvas(window.innerWidth, window.innerHeight / 2);
        player = new p5.Player(box.width / 2, box.height / 2);
    };

    p5.Player = function (xPos, yPos) {
        this.x = xPos;
        this.y = yPos;
        this.hitpoints = 50;
        this.diameter = 50;
        this.speed = 1;
        this.display = () => {
            p5.rect(this.x, this.y, this.diameter, this.diameter);
            p5.rectMode(p5.CENTER);
        };
        this.movement = () => {
            if (this.x < p5.width - this.diameter / 2) {
                if (p5.keyIsDown(p5.RIGHT_ARROW)) {
                    this.x = this.x + 5;
                }
            }
            if (this.x > 0 + this.diameter / 2) {
                if (p5.keyIsDown(p5.LEFT_ARROW)) {
                    this.x = this.x - 5;
                }
            }
            if (this.y < p5.height - this.diameter / 2) {
                if (p5.keyIsDown(p5.DOWN_ARROW)) {
                    this.y = this.y + 5;
                }
            }
            if (this.y > 0 + this.diameter / 2) {
                if (p5.keyIsDown(p5.UP_ARROW)) {
                    this.y = this.y - 5;
                }
            }
        };
    };

    p5.draw = function () {
        p5.background(background[0], background[1], background[2]);
        player.movement();
        player.display();
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