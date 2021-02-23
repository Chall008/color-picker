import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: 100,
    saturation: 30,
    lightness: 0,
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

  render() {
    return (
      <body>
        <header>
          <h1>Color Picker</h1>
        </header>
        <section>
          <label>
            H: {this.state.hue}
            <input
              type="range"
              max="360"
              onChange={this.updateHue}
              value={this.state.hue}
            />
          </label>
          <label>
            S: {this.state.saturation}%
            <input
              type="range"
              max="100"
              onChange={this.updateSat}
              value={this.state.saturation}
            />
          </label>
          <label>
            L: {this.state.lightness}%
            <input
              type="range"
              max="100"
              onChange={this.updateLight}
              value={this.state.lightness}
            />
          </label>

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
