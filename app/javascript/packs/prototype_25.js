import p5 from 'p5'
import { getRandomArbitrary } from '../prototypes/utilities'

const prototypeId = 'prototype_25'
const canvas = {}

let colorSwitch = false
let clearCanvas = false

let rules = {
  X: [
    // Original rule
    { rule: 'F[+X][-X]FX', prob: 0.5 },

    // Fewer limbs
    { rule: 'F[-X]FX', prob: 0.05 },
    { rule: 'F[+X]FX', prob: 0.05 },

    // Extra rotation
    { rule: 'F[++X][-X]FX', prob: 0.1 },
    { rule: 'F[+X][--X]FX', prob: 0.1 },

    // Berries/fruits
    { rule: 'F[+X][-X]FA', prob: 0.1 },
    { rule: 'F[+X][-X]FB', prob: 0.1 }
  ],
  F: [
    // Original rule
    { rule: 'FF', prob: 0.85 },

    // Extra growth
    { rule: 'FFF', prob: 0.05 },

    // Stunted growth
    { rule: 'F', prob: 0.1 }
  ]
}

const len = 4
const ang = 25
const numGens = 6

let drawRules

let word = 'X'

function calcHue(percent) {
  return Math.floor(percent * 3.6)
}

function sketch(p) {
  p.setup = () => {
    p.createCanvas(600, 600)

    p.strokeWeight(2)

    p.drawRules = {
      A: () => {
        // Draw circle at current location
        p.noStroke()
        p.fill('#E5CEDC')
        p.circle(0, 0, len * 2)
      },
      B: () => {
        // Draw circle at current location
        p.noStroke()
        p.fill('#FCA17D')
        p.circle(0, 0, len * 2)
      },
      F: () => {
        // Draw line forward, then move to end of line
        p.stroke('#9ea93f')
        p.line(0, 0, 0, -len)
        p.translate(0, -len)
      },
      '+': () => {
        // Rotate right
        p.rotate((PI / 180) * -ang)
      },
      '-': () => {
        // Rotate right
        p.rotate((PI / 180) * ang)
      },
      // Save current location
      '[': p.push(),
      // Restore last location
      ']': p.pop()
    }

    p.noLoop()
  }

  p.draw = () => {
    p.background(28)

    // Generate our L-System from the start
    word = 'X'

    for (let i = 0; i < numGens; i++) {
      word = p.generate()
      console.log(word)
    }

    // Draw L-System
    p.push()
    p.translate(p.width / 2, p.height)
    for (let i = 0; i < word.length; i++) {
      let c = word[i]
      if (c in drawRules) {
        drawRules[c](p)
      }
    }
    p.pop()
  }

  p.mouseReleased = () => {
    p.draw()
  }

  p.generate = () => {
    let next = ''

    for (let i = 0; i < word.length; i++) {
      let c = word[i]
      if (c in rules) {
        let rule = rules[c]

        // Check if we're using an array or not
        if (Array.isArray(rule)) {
          next += p.chooseOne(rule) // If we are, choose one of the options
        } else {
          next += rules[c] // Otherwise use the rule directly
        }
      } else {
        next += c
      }
    }

    return next
  }

  p.chooseOne = (ruleSet) => {
    let n = p.random() // Random number between 0-1
    let t = 0
    for (let i = 0; i < ruleSet.length; i++) {
      t += ruleSet[i].prob // Keep adding the probability of the options to total
      if (t > n) {
        // If the total is more than the random value
        return ruleSet[i].rule // Choose that option
      }
    }
    return ''
  }
}

function renderUI() {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  const sliderWrapper = document.createElement('div')
  sliderWrapper.classList.add('sliderWrapper')

  const slider = document.createElement('input')
  slider.classList.add('slider')
  slider.type = 'range'
  slider.step = 1
  slider.min = 0
  slider.max = 100
  slider.value = brightness

  slider.addEventListener('input', (e) => {
    if (colorSwitch) {
      hue = calcHue(e.target.value)
    } else {
      brightness = e.target.value
    }
  })

  const toggleSwitch = document.createElement('div')
  toggleSwitch.classList.add('toggleSwitch')
  toggleSwitch.innerText = 'Toggle Color'

  toggleSwitch.addEventListener('click', () => {
    toggleSwitch.classList.toggle('active')
    colorSwitch = !colorSwitch

    if (colorSwitch) {
      slider.value = calcHue(e.target.value)
    } else {
      slider.value = brightness
    }
  })

  const resetButton = document.createElement('div')
  resetButton.classList.add('resetButton')
  resetButton.innerText = 'Clear'

  resetButton.addEventListener('click', () => {
    clearCanvas = true
  })

  sliderWrapper.appendChild(slider)
  wrapper.appendChild(sliderWrapper)
  wrapper.appendChild(toggleSwitch)
  wrapper.appendChild(resetButton)
  document.body.appendChild(wrapper)
}

document.addEventListener('DOMContentLoaded', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  new p5(sketch)

  setTimeout(renderUI, 300)
})
