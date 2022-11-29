import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGenerateNumber = () => {
    const newRandomNumber = Match.ceil(Math.random() * 100)
    this.setState({randomNumber: newRandomNumber})
  }
  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="buttton"
            className="button"
            onClick={this.onGenerateNumber}
          >
            Generate
          </button>
          <p className="number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
