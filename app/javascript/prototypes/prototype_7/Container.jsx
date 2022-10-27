import * as Tone from 'tone'
import React, { Component } from 'react'

import SC_Button from './SC_Button'

export default class Container extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const synthSettings = {
      volume: -20,
      detune: 0,
      portamento: 0.05,
      envelope: {
        attack: 0.05,
        attackCurve: 'exponential',
        decay: 0.1,
        decayCurve: 'exponential',
        sustain: 0.2,
        release: 1.1,
        releaseCurve: 'exponential'
      },
      oscillator: {
        type: 'square',
        modulationType: 'sine',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    }

    const synth = new Tone.Synth(synthSettings)

    // const distortionSettings = {
    //   wet: 1,
    //   distortion: 1,
    //   oversample: '4x'
    // }

    // const distortion = new Tone.Distortion(distortionSettings).toDestination()

    const chorusSettings = {
      wet: 0.5,
      type: 'sine',
      frequency: 1.1,
      delayTime: 2.5,
      depth: 0.7,
      spread: 150
    }

    const chorus = new Tone.Chorus(chorusSettings).start()

    const pingPongDelaySettings = { wet: 1, delayTime: 0.3, maxDelayTime: 1 }

    const pingPongDelay = new Tone.PingPongDelay(pingPongDelaySettings)

    const jcReverbSettings = {
      wet: 0.2,
      roomSize: 0.1
    }

    const jcReverb = new Tone.JCReverb(jcReverbSettings).toDestination()

    const tremoloSettings = {
      wet: 1,
      frequency: 10,
      type: 'square',
      depth: 0.5,
      spread: 180
    }

    const tremolo = new Tone.Tremolo(9, 0.75).toDestination().start()

    const chebySettings = {
      wet: 0.1,
      order: 50,
      oversample: 'none'
    }

    const cheby = new Tone.Chebyshev(50).toDestination()

    const feedbackDelaySettings = {
      wet: 0.1,
      delayTime: 0.2,
      maxDelay: 0.8
    }

    const feedbackDelay = new Tone.FeedbackDelay('8n', 0.5).toDestination()

    const distSettings = {
      wet: 1,
      distortion: 0.8,
      oversample: '4x'
    }

    const dist = new Tone.Distortion(0.8).toDestination()

    const autoWahSettings = {
      wet: 1,
      baseFrequency: 100,
      octaves: 6,
      sensitivity: 0,
      Q: 2,
      gain: 2,
      follower: 0.1
    }

    const autoWah = new Tone.AutoWah(50, 6, -30).toDestination()
    // const freeverbSettings = {
    //   wet: 1,
    //   roomSize: 0.5,
    //   dampening: 10
    // }
    //
    // const freeverb = new Tone.Freeverb(freeverbSettings)

    const channelSettings = { volume: 0, pan: 0, mute: false, solo: false }
    const channel = new Tone.Channel(channelSettings).toDestination()

    synth.chain(chorus, cheby, dist, channel)
    // synth.triggerAttackRelease('C4', '1')

    //
    //
    // Мелодия
    //
    //

    // Целые ноты
    // const sequence = [
    //   {
    //     time: '0:0:0',
    //     noteName: 'C3',
    //     duration: '1m',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:0',
    //     noteName: 'G4',
    //     duration: '1m',
    //     velocity: 1
    //   }
    // ]

    // Четвертные ноты играются в четвертные интервалы
    // const sequence = [
    //   {
    //     time: '0:0:0',
    //     noteName: 'C3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:0',
    //     noteName: 'E3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:0',
    //     noteName: 'G3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:0',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:0',
    //     noteName: 'G4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:0',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:0',
    //     noteName: 'C4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:0',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   }
    // ]

    // Шестнадцатые ноты
    // const sequence = [
    //   {
    //     time: '0:0:0',
    //     noteName: 'C3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:0:1',
    //     noteName: 'E3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:0:2',
    //     noteName: 'G3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:0:3',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:0',
    //     noteName: 'G4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:1',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:2',
    //     noteName: 'C4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:3',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:0',
    //     noteName: 'C3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:1',
    //     noteName: 'E3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:2',
    //     noteName: 'G3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:3',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:0',
    //     noteName: 'G4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:1',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:2',
    //     noteName: 'C4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:3',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   //
    //   {
    //     time: '1:0:0',
    //     noteName: 'C3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:1',
    //     noteName: 'E3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:2',
    //     noteName: 'G3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:3',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:0',
    //     noteName: 'G4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:1',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:2',
    //     noteName: 'C4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:3',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:0',
    //     noteName: 'C3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:1',
    //     noteName: 'E3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:2',
    //     noteName: 'G3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:3',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:0',
    //     noteName: 'G4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:1',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:2',
    //     noteName: 'C4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:3',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   }
    // ]

    // Тестовая мелодия
    const sequence = [
      {
        time: '0:0:0',
        noteName: 'C3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:0:2',
        noteName: 'C3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:1:0',
        noteName: 'C3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:1:2',
        noteName: 'E3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:2:0',
        noteName: 'E3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:2:1',
        noteName: 'F3',
        duration: '1n',
        velocity: 1
      },
      {
        time: '0:2:2',
        noteName: 'E3',
        duration: '1n',
        velocity: 1
      },
      {
        time: '0:2:3',
        noteName: 'F3',
        duration: '1n',
        velocity: 1
      },
      {
        time: '1:0:0',
        noteName: 'C3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:0:2',
        noteName: 'C3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:1:0',
        noteName: 'C3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:1:2',
        noteName: 'E3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:1:3',
        noteName: 'F3',
        duration: '1n',
        velocity: 1
      },
      {
        time: '1:2:0',
        noteName: 'E3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:2:1',
        noteName: 'C3',
        duration: '1n',
        velocity: 1
      },
      {
        time: '1:2:2',
        noteName: 'E3',
        duration: '4n',
        velocity: 1
      }

      // {
      //   time: '0:0:2',
      //   noteName: 'G2',
      //   duration: '1n',
      //   velocity: 1
      // },
      // {
      //   time: '0:1:0',
      //   noteName: 'A3',
      //   duration: '4n',
      //   velocity: 1
      // },
      // {
      //   time: '0:2:0',
      //   noteName: 'C3',
      //   duration: '1n',
      //   velocity: 1
      // },
      // {
      //   time: '0:2:1',
      //   noteName: 'E3',
      //   duration: '1n',
      //   velocity: 1
      // },
      // {
      //   time: '0:2:2',
      //   noteName: 'A3',
      //   duration: '1n',
      //   velocity: 1
      // },
      // {
      //   time: '0:3:0',
      //   noteName: 'A3',
      //   duration: '1n',
      //   velocity: 1
      // },
      // {
      //   time: '0:3:2',
      //   noteName: 'G3',
      //   duration: '1n',
      //   velocity: 1
      // },
      // {
      //   time: '1:0:2',
      //   noteName: 'A3',
      //   duration: '1n',
      //   velocity: 1
      // },
      // {
      //   time: '1:0:3',
      //   noteName: 'E3',
      //   duration: '1n',
      //   velocity: 1
      // },
      // {
      //   time: '1:1:0',
      //   noteName: 'C3',
      //   duration: '1n',
      //   velocity: 1
      // },
      // {
      //   time: '1:1:2',
      //   noteName: 'E3',
      //   duration: '1n',
      //   velocity: 1
      // },
      // {
      //   time: '1:2:0',
      //   noteName: 'E3',
      //   duration: '1n',
      //   velocity: 1
      // },
      // {
      //   time: '1:2:1',
      //   noteName: 'A3',
      //   duration: '1n',
      //   velocity: 1
      // },
      // {
      //   time: '1:2:3',
      //   noteName: 'C3',
      //   duration: '1n',
      //   velocity: 1
      // },
      // {
      //   time: '1:3:1',
      //   noteName: 'E3',
      //   duration: '1n',
      //   velocity: 1
      // }
    ]

    // Создаём партию, добавляем в неё секвенцию
    // и включаем проигрывание
    const part = new Tone.Part((time, note) => {
      synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, sequence).start(0)

    // Указываем длительность партии
    part.loopEnd = '2m'

    // Включаем зацикливание
    part.loop = true

    // Включаем звук в браузере
    // sampler.context.resume()

    // Включаем отсчёт времени в Tone.js
    Tone.Transport.start()
  }

  render() {
    return (
      <div className="Container">
        <SC_Button
          text="Art Design & Coding Community"
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}
