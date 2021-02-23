import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: Math.floor(Math.random() * 100),
    lightness: Math.floor(Math.random() * 100),
  }
  updateHue = event => {
    this.setState({
      hue: event.target.value,
    })
  }
  updateSat = event => {
    this.setState({
      saturation: event.target.value,
    })
  }
  updateLight = event => {
    this.setState({
      lightness: event.target.value,
    })
  }
  randomColor = () => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
      saturation: Math.floor(Math.random() * 100),
      lightness: Math.floor(Math.random() * 100),
    })
  }

  render() {
    return (
      <body>
        <header>
          <h1
            style={{
              color: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
            }}
          >
            COLOR PICKER!
          </h1>
        </header>
        <section>
          <label
            style={{
              color: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
            }}
          >
            H: {this.state.hue}
            <input
              type="range"
              max="360"
              onChange={this.updateHue}
              value={this.state.hue}
            />
          </label>
          <label
            style={{
              color: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
            }}
          >
            S: {this.state.saturation}%
            <input
              type="range"
              max="100"
              onChange={this.updateSat}
              value={this.state.saturation}
            />
          </label>
          <label
            style={{
              color: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
            }}
          >
            L: {this.state.lightness}%
            <input
              type="range"
              max="100"
              onChange={this.updateLight}
              value={this.state.lightness}
            />
          </label>
          <button onClick={this.randomColor}>Random Color</button>

          <canvas
            style={{
              backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
            }}
          ></canvas>
        </section>
      </body>
    )
  }
}
