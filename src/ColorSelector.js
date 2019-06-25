import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      // const changeColor = () => { this.props.setNewColor(str) }
      return <div key={idx} className="color-swatch" onClick={(e) => { this.props.setNewColor(str) }
      } style={{ backgroundColor: str }} />
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
