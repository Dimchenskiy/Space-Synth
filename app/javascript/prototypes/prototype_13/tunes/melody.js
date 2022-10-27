const synth = {
  volume: -15,
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

const pingPongDelay = { wet: 0.1, delayTime: 0.25, maxDelayTime: 1 }

const autoWah = {
  wet: 0.2,
  baseFrequency: 100,
  octaves: 6,
  sensitivity: 0,
  Q: 2,
  gain: 2,
  follower: 0.1
}

const sequence = {
  steps: [
    {
      time: '0:1:0',
      noteName: 'C5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:2',
      noteName: 'C5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'D5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '1:0:2',
      noteName: 'E5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '1:1:2',
      noteName: 'E5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '2:1:0',
      noteName: 'C5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '2:3:2',
      noteName: 'C5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '3:0:0',
      noteName: 'D5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '3:0:2',
      noteName: 'E5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '3:1:2',
      noteName: 'E5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '3:2:2',
      noteName: 'G5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '4:0:0',
      noteName: 'A5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '4:1:2',
      noteName: 'G5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '4:3:0',
      noteName: 'E5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '5:0:0',
      noteName: 'D5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '5:0:3',
      noteName: 'C5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '5:1:2',
      noteName: 'A4',
      duration: '1n',
      velocity: 1
    },
    {
      time: '5:3:0',
      noteName: 'C5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '5:3:2',
      noteName: 'G4',
      duration: '1n',
      velocity: 1
    },
    {
      time: '6:0:0',
      noteName: 'C5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '6:0:3',
      noteName: 'D5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '6:1:2',
      noteName: 'E5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '6:2:2',
      noteName: 'G5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '7:0:0',
      noteName: 'C5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '7:1:0',
      noteName: 'D5',
      duration: '1n',
      velocity: 1
    },
    {
      time: '7:1:2',
      noteName: 'C5',
      duration: '1n',
      velocity: 1
    }
    // {
    //   time: '7:2:2',
    //   noteName: 'G4',
    //   duration: '1n',
    //   velocity: 1
    // }
  ],
  duration: '8m'
}

export { synth, chorus, pingPongDelay, autoWah, sequence }
