const synth = {
  volume: -20,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'triangle',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

const chorus = {
  wet: 0.3,
  type: 'sine',
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  spread: 180
}

const pingPongDelay = { wet: 0.2, delayTime: 0.25, maxDelayTime: 1 }

const distortion = {
  wet: 0.2,
  distortion: 0,
  oversample: '4x'
}

const sequence = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'E4',
      duration: '1n',
      velocity: 1
    },
    {
      time: '0:1:2',
      noteName: 'D4',
      duration: '1n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'C4',
      duration: '1n',
      velocity: 1
    },
    {
      time: '1:1:2',
      noteName: 'A3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '2:0:0',
      noteName: 'E4',
      duration: '1n',
      velocity: 1
    },
    {
      time: '2:1:2',
      noteName: 'D4',
      duration: '1n',
      velocity: 1
    },
    {
      time: '3:0:0',
      noteName: 'A3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '3:1:2',
      noteName: 'F3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '4:0:0',
      noteName: 'E3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '4:1:2',
      noteName: 'D3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '5:0:0',
      noteName: 'C3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '5:1:2',
      noteName: 'C4',
      duration: '1n',
      velocity: 1
    },
    {
      time: '6:0:0',
      noteName: 'E3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '6:1:2',
      noteName: 'D3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '7:0:0',
      noteName: 'C3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '7:1:2',
      noteName: 'C4',
      duration: '1n',
      velocity: 1
    }
  ],
  duration: '8m'
}

export { synth, chorus, pingPongDelay, distortion, sequence }
