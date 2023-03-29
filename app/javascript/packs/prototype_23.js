import { sample } from '../prototypes/utilities'

import {
  getLargeWhiteCircleStore,
  setLargeWhiteCircleStore
} from '../prototypes/prototype_23/store'

function createLargeWhiteCircle() {
  return new Promise((resolve, reject) => {
    const sides = ['top', 'bottom']
    const side = sample(sides)
    console.log(side)

    resolve(side)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_23')
  // createLargeWhiteCircle()

  // prettier-ignore
  console.log(
    createLargeWhiteCircle().then(createLargeWhiteCircle)
  )
})
