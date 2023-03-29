import React from 'react'
import ReactDOM from 'react-dom'

import Container from '../prototypes/prototype_27/Container'
import { initSketch } from '../prototypes/prototype_27/sketch'

import {
  getStoreShift,
  setStoreShift,
  getStoreEnthropy,
  setStoreEnthropy,
  getStoreEffect,
  setStoreEffect,
  getBackgroundColorRed,
  setBackgroundColorRed,
  getBackgroundColorGreen,
  setBackgroundColorGreen,
  getBackgroundColorBlue,
  setBackgroundColorBlue,
  getFlowerColorRed,
  setFlowerColorRed,
  getFlowerColorGreen,
  setFlowerColorGreen,
  getFlowerColorBlue,
  setFlowerColorBlue
} from '../prototypes/prototype_27/store'

const props = {
  shift: getStoreShift(),
  enthropy: getStoreEnthropy(),
  effect: getStoreEffect(),
  backColorRed: getBackgroundColorRed(),
  backColorGreen: getBackgroundColorGreen(),
  backColorBlue: getBackgroundColorBlue(),
  flowerColorRed: getFlowerColorRed(),
  flowerColorGreen: getFlowerColorGreen(),
  flowerColorBlue: getFlowerColorBlue()
}

const actions = {
  setStoreShift,
  setStoreEnthropy,
  setStoreEffect,
  setBackgroundColorRed,
  setBackgroundColorGreen,
  setBackgroundColorBlue,
  setFlowerColorRed,
  setFlowerColorGreen,
  setFlowerColorBlue
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_27')
  ReactDOM.render(
    <Container initSketch={initSketch} {...props} {...actions} />,
    container
  )
})
