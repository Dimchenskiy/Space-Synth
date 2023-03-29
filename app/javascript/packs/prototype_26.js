import p5 from 'p5'
import { getRandomArbitrary } from '../prototypes/utilities'

const prototypeId = 'prototype_26'
const canvas = {}

let colorSwitch = false
let clearCanvas = false

let r, g, b

function calcHue(percent) {
  return Math.floor(percent * 3.6)
}

function setup() {
  createCanvas(720, 400)
  // Pick colors randomly
  r = random(255)
  g = random(255)
  b = random(255)
}

function draw() {
  background(127)
  // Draw a circle
  strokeWeight(2)
  stroke(r, g, b)
  fill(r, g, b, 127)
  ellipse(360, 200, 200, 200)
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200)
  if (d < 100) {
    // Pick new random color values
    r = random(255)
    g = random(255)
    b = random(255)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  new p5(setup)
})
