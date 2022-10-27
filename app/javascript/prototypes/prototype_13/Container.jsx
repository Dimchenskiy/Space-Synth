import * as Tone from 'tone'
import React, { Component } from 'react'

import * as bassSettings from './tunes/bass.js'
import * as melodySettings from './tunes/melody.js'
import * as drumsSettings from './tunes/drums.js'

import ToneSynth from './modules/ToneSynth.jsx'
import Channel from './modules/Channel.jsx'

import SC_Button from './components/SC_Button'
import SC_Slider from './components/SC_Slider'

let bassSynth
let bassChorus
let bassPingPongDelay
let bassDistortion

let melodySynth
let melodyChorus
let melodyPingPongDelay
let melodyAutoWah

let samplerChannel

export default class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bassSettings,
      melodySettings,
      drumsSettings
    }
  }

  handleStart = () => {
    const { bassSettings, melodySettings, drumsSettings } = this.state

    //
    //
    bassSynth = new Tone.Synth(bassSettings.synth)
    bassChorus = new Tone.Chorus(bassSettings.chorus).start()
    bassDistortion = new Tone.Distortion(bassSettings.distortion)
    bassPingPongDelay = new Tone.PingPongDelay(
      bassSettings.pingPongDelay
    ).toDestination()

    bassSynth.chain(bassChorus, bassDistortion, bassPingPongDelay)

    const bassPart = new Tone.Part((time, note) => {
      bassSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, bassSettings.sequence.steps).start(0)

    bassPart.loopEnd = bassSettings.sequence.duration
    bassPart.loop = true
    //
    //
    melodySynth = new Tone.Synth(melodySettings.synth)
    melodyChorus = new Tone.Chorus(melodySettings.chorus).start()
    melodyAutoWah = new Tone.AutoWah(melodySettings.autoWah)
    melodyPingPongDelay = new Tone.PingPongDelay(
      melodySettings.pingPongDelay
    ).toDestination()

    melodySynth.chain(melodyChorus, melodyAutoWah, melodyPingPongDelay)

    const melodyPart = new Tone.Part((time, note) => {
      melodySynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, melodySettings.sequence.steps).start(0)

    melodyPart.loopEnd = melodySettings.sequence.duration
    melodyPart.loop = true
    //
    //
    const sampler = new Tone.Sampler({
      urls: {
        A1: '00050-Vermona-DRM1-MK3-BassDrum29.mp3',
        A2: '00014-Linn-9000-Rim-2.mp3',
        A3: '00056-Vermona-DRM1-MK3-HH01.mp3'
      },
      baseUrl: 'http://localhost:3000/samples/'
      // onload: () => {
      //   sampler.triggerAttackRelease(['A1', 'A2', 'A1', 'A2'], 0.5)
      // }
    })

    samplerChannel = new Tone.Channel(drumsSettings.channel).toDestination()

    sampler.chain(samplerChannel)

    const drumsPart = new Tone.Part((time, note) => {
      sampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, drumsSettings.sequence.steps).start(0)

    drumsPart.loopEnd = drumsSettings.sequence.duration
    drumsPart.loop = true

    Tone.Transport.start()
  }

  handleBassValueChange = (property, value) => {
    const { bassSettings } = this.state

    if (property === 'synthType') {
      bassSynth.oscillator.type = value
      bassSettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      bassSynth.envelope.attack = value
      bassSettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      bassSynth.envelope.decay = value
      bassSettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      bassSynth.envelope.sustain = value
      bassSettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      bassSynth.envelope.release = value
      bassSettings.synth.envelope.release = value
    } else if (property === 'pingPongDelayWet') {
      bassPingPongDelay.wet.value = value
      bassSettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      bassChorus.wet.value = value
      bassSettings.chorus.wet = value
    } else if (property === 'distortionWet') {
      bassDistortion.wet.value = value
      bassSettings.distortion.wet = value
    }

    this.setState({
      bassSettings
    })
  }

  handleMelodyValueChange = (property, value) => {
    const { melodySettings } = this.state

    if (property === 'synthType') {
      melodySynth.oscillator.type = value
      melodySettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      melodySynth.envelope.attack = value
      melodySettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      melodySynth.envelope.decay = value
      melodySettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      melodySynth.envelope.sustain = value
      melodySettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      melodySynth.envelope.release = value
      melodySettings.synth.envelope.release = value
    } else if (property === 'pingPongDelayWet') {
      melodyPingPongDelay.wet.value = value
      melodySettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      melodyChorus.wet.value = value
      melodySettings.chorus.wet = value
    } else if (property === 'autoWahWet') {
      melodyAutoWah.wet.value = value
      melodySettings.autoWah.wet = value
    }

    this.setState({
      melodySettings
    })
  }

  handleDrumsValueChange = (property, value) => {
    const { drumsSettings } = this.state

    if (property === 'channelVolume') {
      samplerChannel.volume.value = value
      drumsSettings.channel.volume = value
    } else if (property === 'channelMute') {
      samplerChannel.mute = value
      drumsSettings.channel.mute = value
    }

    this.setState({
      drumsSettings
    })
  }

  render() {
    const { bassSettings, melodySettings, drumsSettings } = this.state

    return (
      <div className="Container">
        <div className="Start_Button">
          <SC_Button text="Start" handleClick={this.handleStart} />
        </div>
        <div className="Bass_Settings">
          <ToneSynth
            settings={bassSettings}
            handleValueChange={this.handleBassValueChange}
          />
          <SC_Slider
            name="Delay Wet"
            min={0}
            max={1}
            step={0.01}
            value={bassSettings.pingPongDelay.wet}
            property="pingPongDelayWet"
            handleChange={this.handleBassValueChange}
          />

          <SC_Slider
            name="Chorus Wet"
            min={0}
            max={1}
            step={0.01}
            value={bassSettings.chorus.wet}
            property="chorusWet"
            handleChange={this.handleBassValueChange}
          />

          <SC_Slider
            name="Distortion Wet"
            min={0}
            max={1}
            step={0.01}
            value={bassSettings.distortion.wet}
            property="distortionWet"
            handleChange={this.handleBassValueChange}
          />
        </div>

        <div className="Melody_Settings">
          <ToneSynth
            settings={melodySettings}
            handleValueChange={this.handleMelodyValueChange}
          />
          <SC_Slider
            name="Delay Wet"
            min={0}
            max={1}
            step={0.01}
            value={melodySettings.pingPongDelay.wet}
            property="pingPongDelayWet"
            handleChange={this.handleMelodyValueChange}
          />
          <SC_Slider
            name="Chorus Wet"
            min={0}
            max={1}
            step={0.01}
            value={melodySettings.chorus.wet}
            property="chorusWet"
            handleChange={this.handleMelodyValueChange}
          />
          <SC_Slider
            name="AutoWah Wet"
            min={0}
            max={1}
            step={0.01}
            value={melodySettings.autoWah.wet}
            property="autoWahWet"
            handleChange={this.handleMelodyValueChange}
          />
        </div>

        <div className="Drums_Settings">
          <Channel
            settings={drumsSettings}
            handleValueChange={this.handleDrumsValueChange}
          />
        </div>
        <div className="Background"></div>
        <div className="First_text">SYNTH PLANET-U53</div>
        <div className="Second_text">Melody</div>
        <div className="Third_text">Bass</div>
        <div className="Four_text">Sampler</div>
      </div>
    )
  }
}
