import {
  getLargeWhiteCircleStore,
  setLargeWhiteCircleStore
} from '../prototypes/prototype_22/store'

function createLargeWhiteCircle() {
  const array = ['a', 'b', 'c']
  setLargeWhiteCircleStore(array)

  console.log('Test', getLargeWhiteCircleStore())

  array.push('z')
  setLargeWhiteCircleStore(array)

  console.log('Test', getLargeWhiteCircleStore())
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_22')
  createLargeWhiteCircle()
})
