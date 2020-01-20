import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
  }
  
  componentWillUnmount() {
    clearInterval(this.timeout)
  }


  clickButtonEvent = () => {
    console.log('Value of chamber : ' + this.state.chamber)
    console.log(this.state.spinningTheChamber)
    console.log(this.state.chamber)
    
    this.setState({
      spinningTheChamber: true,
    })
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8)
      
      this.setState({ 
        chamber: randomChamber,
        spinningTheChamber: false
      })
    }, 2000)
  }

  renderText() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    
    if(spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    }
    else if (chamber === bulletInChamber) {
      return 'BANG!!!!!'
    }
    else {
      return 'you\'re safe!'
    }
    
  }
  
  
  render() {
    return (
      <div className='RoutetteGun'>
        <p>{this.renderText()}</p>
        <button onClick={this.clickButtonEvent}>
          Pull the trigger!
        </button>
      </div>
    )
  }
}

export default RouletteGun