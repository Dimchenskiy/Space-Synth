import React, { Component } from 'react'
import SC_ToggleButton from './SC_ToggleButton'
import SC_Slider from './SC_Slider'

export default class Container extends Component {
  constructor(props) {
    super(props)

    const {
      shift,
      enthropy,
      effect,
      backgroundColorRed,
      backgroundColorGreen,
      backgroundColorBlue,
      flowerColorRed,
      flowerColorGreen,
      flowerColorBlue
    } = props

    this.state = {
      shift,
      enthropy,
      effect,
      backgroundColorRed,
      backgroundColorGreen,
      backgroundColorBlue,
      flowerColorRed,
      flowerColorGreen,
      flowerColorBlue
    }
  }

  componentDidMount() {
    this.props.initSketch('sketch')
  }

  handleShiftChange = () => {
    const { setStoreShift } = this.props
    const { shift } = this.state
    setStoreShift(!shift)

    this.setState({
      shift: !shift
    })
  }

  handleEnthropyChange = () => {
    const { setStoreEnthropy } = this.props
    const { enthropy } = this.state
    setStoreEnthropy(!enthropy)

    this.setState({
      enthropy: !enthropy
    })
  }

  handleEffectChange = () => {
    const { setStoreEffect } = this.props
    const { effect } = this.state
    setStoreEffect(!effect)

    this.setState({
      effect: !effect
    })
  }

  handleBackgroundColorRedChange = (property, value) => {
    const { setBackgroundColorRed } = this.props
    setBackgroundColorRed(value)

    this.setState({
      backgroundColorRed: value
    })
  }

  handleBackgroundColorGreenChange = (property, value) => {
    const { setBackgroundColorGreen } = this.props
    setBackgroundColorGreen(value)

    this.setState({
      backgroundColorGreen: value
    })
  }

  handleBackgroundColorBlueChange = (property, value) => {
    const { setBackgroundColorBlue } = this.props
    setBackgroundColorBlue(value)

    this.setState({
      backgroundColorBlue: value
    })
  }

  handleFlowerColorRedChange = (property, value) => {
    const { setFlowerColorRed } = this.props
    setFlowerColorRed(value)

    this.setState({
      flowerColorRed: value
    })
  }
  handleFlowerColorGreenChange = (property, value) => {
    const { setFlowerColorGreen } = this.props
    setFlowerColorGreen(value)

    this.setState({
      flowerColorGreen: value
    })
  }
  handleFlowerColorBlueChange = (property, value) => {
    const { setFlowerColorBlue } = this.props
    setFlowerColorBlue(value)

    this.setState({
      flowerColorBlue: value
    })
  }

  render() {
    const {
      shift,
      enthropy,
      effect,
      backgroundColorRed,
      backgroundColorGreen,
      backgroundColorBlue,
      flowerColorRed,
      flowerColorGreen,
      flowerColorBlue
    } = this.state

    return (
      <div className="Container">
        <div className="sketch" id="sketch"></div>
        <div className="StartScreen">
          <div className="Starttext1">Генеративный букет</div>
          <div className="Starttext2">
            Создай собственную открытку с цветком, чтобы порадовать близких с
            яркой весной!
          </div>
          <div className="Starttext3">Начать</div>
          <div className="image1"></div>
          <div className="image2"></div>
          <div className="image3"></div>
        </div>
        <div className="interface">
          <div className="text1">Фон</div>
          <div className="text2">Цветок</div>
          <div className="ractangle1"></div>
          <div className="reload">
            <SC_Button
              buttonType="iconAction"
              handleClick={() => window.location.reload()}
            />
          </div>
          <div className="backColorRed">
            <SC_Slider
              name="BackgroundColorRed"
              min={0}
              max={255}
              step={1}
              value={backgroundColorRed}
              property="backgroundColorRed"
              handleChange={this.handleBackgroundColorRedChange}
            />
          </div>
          <div className="backColorGreen">
            <SC_Slider
              name="BackgroundColorGreen"
              min={0}
              max={255}
              step={1}
              value={backgroundColorGreen}
              property="backgroundColorGreen"
              handleChange={this.handleBackgroundColorGreenChange}
            />
          </div>
          <div className="backColorBlue">
            <SC_Slider
              name="BackgroundColorBlue"
              min={0}
              max={255}
              step={1}
              value={backgroundColorBlue}
              property="backgroundColorBlue"
              handleChange={this.handleBackgroundColorBlueChange}
            />
          </div>
          <div className="FloColorRed">
            <SC_Slider
              name="FlowerColorRed"
              min={0}
              max={255}
              step={1}
              value={flowerColorRed}
              property="flowerColorRed"
              handleChange={this.handleFlowerColorRedChange}
            />
          </div>
          <div className="FloColorGreen">
            <SC_Slider
              name="FlowerColorGreen"
              min={0}
              max={255}
              step={1}
              value={flowerColorGreen}
              property="flowerColorGreen"
              handleChange={this.handleFlowerColorGreenChange}
            />
          </div>
          <div className="FloColorBlue">
            <SC_Slider
              name="FlowerColorBlue"
              min={0}
              max={255}
              step={1}
              value={flowerColorBlue}
              property="flowerColorBlue"
              handleChange={this.handleFlowerColorBlueChange}
            />
          </div>

          <SC_ToggleButton
            text="shift"
            isOn={shift}
            handleClick={this.handleShiftChange}
          />

          <SC_ToggleButton
            text="enthropy"
            isOn={enthropy}
            handleClick={this.handleEnthropyChange}
          />

          <SC_ToggleButton
            text="effect"
            isOn={effect}
            handleClick={this.handleEffectChange}
          />
        </div>
      </div>
    )
  }
}
