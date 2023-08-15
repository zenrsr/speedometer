/* eslint-disable react/button-has-type */
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  increase = () => {
    this.setState(prev => ({
      count: prev.count + 10,
    }))
  }

  decrease = () => {
    this.setState(prev => ({
      count: prev.count - 10,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speed-img"
        />
        <p className="info">Speed is {count}mph</p>
        <p className="mini-info">Min Limit is 0mph and Max Limit is 200mph</p>
        <div className="button-container">
          <button className="accelerate button" onClick={this.increase}>
            Accelerate
          </button>
          <button className="brake button" onClick={this.decrease}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
