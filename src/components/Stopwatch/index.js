// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {count: 0}

  updateTimer = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
  }

  onResetTimer = () => {
    this.setState({count: 0})
    clearInterval(this.timeInterval)
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  renderSeconds = () => {
    const {count} = this.state
    const seconds = Math.Floor(count % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {count} = this.state
    const minutes = Math.loor(count / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {count} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="container">
            <div className="time-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="logo"
                alt="timer"
              />
              <p className="title">Timer</p>
            </div>
            <h1 className="count" testid="timer">
              {time}
            </h1>
            <div className="button-container">
              <button
                className="green-button button"
                type="button"
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                className="red-button button"
                type="button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                className="reset-button button"
                type="button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
