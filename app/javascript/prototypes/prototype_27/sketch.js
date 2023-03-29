import p5 from 'p5'
import { getRandomArbitrary } from '../utilities'
import {
  getStoreShift,
  getStoreEnthropy,
  getStoreEffect,
  getBackgroundColorRed,
  getBackgroundColorGreen,
  getBackgroundColorBlue,
  getFlowerColorRed,
  getFlowerColorGreen,
  getFlowerColorBlue
} from './store'

let rules = {
  X: [
    // Правило
    { rule: 'F[+X][-X]FX', prob: 0.5 },

    { rule: 'F[-X]FX', prob: 0.05 },
    { rule: 'F[+X]FX', prob: 0.05 },

    // Вращение
    { rule: 'F[++X][-X]FX', prob: 0.1 },
    { rule: 'F[+X][--X]FX', prob: 0.1 },

    // Цветы
    { rule: 'F[+X][-X]FA', prob: 0.1 },
    { rule: 'F[+X][-X]FCB', prob: 0.1 }
  ],
  F: [
    { rule: 'FF', prob: 0.85 },

    { rule: 'FFF', prob: 0.05 },

    { rule: 'F', prob: 0.1 }
  ]
}

const len = 4
const ang = 25
const numGens = 6

let drawRules

let word = 'X'

let w, e, u

function sketch(p) {
  p.setup = () => {
    p.createCanvas(600, 600)

    p.strokeWeight(3)

    w = getRandomArbitrary(0, 255)
    e = getRandomArbitrary(0, 255)
    u = getRandomArbitrary(0, 255)

    drawRules = {
      A: () => {
        // Ягода
        p.noStroke()
        p.fill('#FF6E03')
        p.circle(0, 0, len * 2)
      },
      B: () => {
        // Цветок круглый
        p.noStroke()
        p.fill('#FCA17D')
        p.p.circle(0, 0, len * 2)
      },
      C: () => {
        // Цветок 4 стороны
        p.translate(0, 0)
        p.noStroke()
        p.fill(flowerColorRed, flowerColorGreen, flowerColorBlue)
        for (let i = 0; i < 10; i++) {
          p.ellipse(0, 0, 10, 30)
          p.rotate(PI / 2)
        }
      },
      D: () => {
        // Цветок квадратный
        p.noStroke()
        p.fill(flowerColorRed, flowerColorGreen, flowerColorBlue)
        p.rect(-9, -9, len * 5)
      },
      E: () => {
        // Цветок 8 сторон
        p.translate(0, 0)
        p.noStroke()
        p.fill(flowerColorRed, flowerColorGreen, flowerColorBlue)
        for (let i = 0; i < 10; i++) {
          p.ellipse(0, 0, 10, 30)
          p.rotate(PI / 4)
        }
      },
      F: () => {
        // Линия стебля
        p.stroke('#329165')
        p.line(0, 0, 0, -len)
        p.translate(0, -len)
      },
      '+': () => {
        // Поворот вправо
        p.rotate((PI / 180) * -ang)
      },
      '-': () => {
        // Поворот влево
        p.rotate((PI / 180) * ang)
      },
      '[': p.push,
      ']': p.pop
    }

    p.noLoop()
  }

  p.draw = () => {
    p.background(backgroundColorRed, backgroundColorGreen, backgroundColorBlue)

    word = 'X'

    for (let i = 0; i < numGens; i++) {
      word = generate()
      console.log(word)
    }

    p.push()
    p.translate(width / 2, height)
    for (let i = 0; i < word.length; i++) {
      let c = word[i]
      if (c in drawRules) {
        drawRules[c]()
      }
    }
    p.pop()
  }

  function generate() {
    let next = ''

    for (let i = 0; i < word.length; i++) {
      let c = word[i]
      if (c in rules) {
        let rule = rules[c]

        if (Array.isArray(rule)) {
          next += chooseOne(rule)
        } else {
          next += rules[c]
        }
      } else {
        next += c
      }
    }

    return next
  }

  function chooseOne(ruleSet) {
    let n = random()
    let t = 0
    for (let i = 0; i < ruleSet.length; i++) {
      t += ruleSet[i].prob
      if (t > n) {
        return ruleSet[i].rule
      }
    }
    return ''
  }

  function initSketch(id) {
    canvasContainerId = id
    new p5(sketch)
  }

  export { initSketch }
}
