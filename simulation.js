class Fish {
    constructor(x, y, z, max_v, max_f) {
        this.position = {x: x, y: y, z: z};
        this.velocity = {x: (Math.random()*max_v)-1, 
                         y: (Math.random()*max_v)-1,
                         z: (Math.random()*max_v)-1};
        this.acceleration = {x: 0, y: 0, z:0};
        this.max_velocity = max_v;
        this.max_force = max_f;
    }

    // Method to update position based on velocity and acceleration
    update() {
        this.acceleration.x = 0;
        this.acceleration.y = 0;
        this.acceleration.z = 0;

        this.velocity.x += this.acceleration.x;
        this.velocity.y += this.acceleration.y;
        this.velocity.z += this.acceleration.z;
        
        this.velocity.x = Math.min(this.max_velocity, Math.max(-this.max_velocity, this.velocity.x));
        this.velocity.y = Math.min(this.max_velocity, Math.max(-this.max_velocity, this.velocity.y));
        this.velocity.z = Math.min(this.max_velocity, Math.max(-this.max_velocity, this.velocity.z));
        
        // this.velocity.x += (1/100)*this.velocity.x*(2*Math.random()-1);
        // this.velocity.y += (1/100)*this.velocity.y*(2*Math.random()-1);
        // this.velocity.z += (1/100)*this.velocity.y*(2*Math.random()-1);


        if (this.position.x > canvas.width) {
            this.position.x = 0;
        }
        if (this.position.x < 0) {
            this.position.x = canvas.width;
        }

        if (this.position.y > canvas.width) {
            this.position.y = 0;
        }
        if (this.position.y < 0) {
            this.position.y = canvas.width;
        }

        if (this.position.z > canvas.width) {
            this.position.z = 0;
        }
        
        if ((this.position.z + this.velocity.z) >= canvas.width) {
            this.velocity.z = -this.velocity.z;
        }
        if ((this.position.z + this.velocity.z) <= 0) {
            this.velocity.z = -this.velocity.z;
        }

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.position.z += this.velocity.z;
    }

    // Method to apply a force to the fish
    apply_force(force) {
        this.acceleration.x += force.x;
        this.acceleration.y += force.y;
        this.acceleration.z += force.z;
    }
}



const canvas = document.getElementById('simCanvas');
const ctx = canvas.getContext('2d');


var displayWidth = 700;
var displayHeight = 400;
var scale = 7;
canvas.style.width = displayWidth + 'px';
canvas.style.height = displayHeight + 'px';
canvas.width = displayWidth * scale;
canvas.height = displayHeight * scale;

let num_fish = 100;
let max_v = 3;
let max_f = 10000;
let fish_list = [];

// Initialize fish
for (let i = 0; i < num_fish; i++) {
    fish_list.push(new Fish(Math.random()*canvas.width, 
                       Math.random()*canvas.height, 
                       Math.random()*canvas.width,
                       max_v,
                       max_f)
                  );
}


// Helper function to calculate distance between two points
function distance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2 + (p1.z - p2.z) ** 2);
}

// Fish rules
function alignment(fish) {
    let perception_radius = 8;
    let steering = {x: 0, y: 0, z: 0};
    let total = 0;
    for (let other of fish_list) {
        if (distance(fish.position, other.position) < perception_radius) {
            steering.x += other.velocity.x;
            steering.y += other.velocity.y;
            steering.z += other.velocity.z;
            total++;
        }
    }
    if (total > 0) {
        steering.x /= total;
        steering.y /= total;
        steering.z /= total;

        steering.x -= fish.velocity.x;
        steering.y -= fish.velocity.y;
        steering.z -= fish.velocity.z;

        steering.x = Math.min(fish.max_force, Math.max(-fish.max_force, steering.x));
        steering.y = Math.min(fish.max_force, Math.max(-fish.max_force, steering.y));
        steering.z = Math.min(fish.max_force, Math.max(-fish.max_force, steering.z));
    }
    return steering;
}

function cohesion(fish) {
    let perception_radius = 8;
    let steering = {x: 0, y: 0, z: 0};
    let total = 0;
    for (let other of fish_list) {
        if (distance(fish.position, other.position) < perception_radius) {
            steering.x += other.position.x;
            steering.y += other.position.y;
            steering.z += other.position.z;
            total++;
        }
    }
    if (total > 0) {
        steering.x /= total;
        steering.y /= total;
        steering.z /= total;

        steering.x -= fish.velocity.x;
        steering.y -= fish.velocity.y;
        steering.z -= fish.velocity.z;

        steering.x = Math.min(fish.max_force, Math.max(-fish.max_force, steering.x));
        steering.y = Math.min(fish.max_force, Math.max(-fish.max_force, steering.y));
        steering.z = Math.min(fish.max_force, Math.max(-fish.max_force, steering.z));
    }
    return steering;
}

function separation(fish) {
    let perception_radius = 1;
    let steering = {x: 0, y: 0, z: 0};
    let total = 0;
    for (let other of fish_list) {
        let d = distance(fish.position, other.position);
        if (other != fish && d < perception_radius) {
            let diff = { x: fish.position.x - other.position.x, 
                         y: fish.position.y - other.position.y,
                         z: fish.position.z - other.position.z
                        };
            
            diff.x /= d;
            diff.y /= d;
            diff.z /= d;

            steering.x += diff.x;
            steering.y += diff.y;
            steering.z += diff.z;
            total++;
        }
    }
    if (total > 0) {
        steering.x /= total;
        steering.y /= total;
        steering.z /= total;

        steering.x -= fish.velocity.x;
        steering.y -= fish.velocity.y;
        steering.z -= fish.velocity.z;

        steering.x = Math.min(fish.max_force, Math.max(-fish.max_force, steering.x));
        steering.y = Math.min(fish.max_force, Math.max(-fish.max_force, steering.y));
        steering.z = Math.min(fish.max_force, Math.max(-fish.max_force, steering.z));
    }
    return steering;
}

// Main animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let fish of fish_list) {
        let alignment_force = alignment(fish);
        let cohesion_force = cohesion(fish);
        let separation_force = separation(fish);

        fish.apply_force(alignment_force);
        fish.apply_force(cohesion_force);
        fish.apply_force(separation_force);
        fish.update();

        // Draw fish

        let x = fish.position.x;
        let y = fish.position.y;
        let z = fish.position.z;

        let vx = fish.velocity.x;
        let vy = fish.velocity.y;
        let vz = fish.velocity.z;

        let dx = fish.acceleration.x;
        let dy = fish.acceleration.y;
        let dz = fish.acceleration.z;


        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.fill();

        ctx.arc(x, y, z/100, 0, 2 * Math.PI);
        ctx.stroke();


    }

    requestAnimationFrame(animate);
}


// Start the simulation
animate();