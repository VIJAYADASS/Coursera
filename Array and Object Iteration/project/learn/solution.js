// Task 1
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    for (word of dairy) {
        console.log(word)
    }
}
logDairy()
console.log();

// Task 2
const animal = {
  canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (const [key, value] of Object.entries(bird)) {
    console.log(`${key}: ${value}`);
  }
}

birdCan();
console.log();

// Task 3

function animalCan() {
  for (const key in bird) {
    console.log(`${key}: ${bird[key]}`);
  }
}

animalCan();