import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { 
      count: 0,
      who: 'tock' 
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.interval = setInterval(() => {
      console.log('setInterval')
      console.log(this.state.count)
      if(this.state.count > 8) {
        this.setState({ who: 'BOOM!!!'})
      } 
      else if (this.state.count % 2 === 0) {
        this.setState({ who: 'tick'})
      }
      else {
        this.setState({ who: 'tock'})
      }
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <p>{this.state.who}</p>
      </div>
    )
  }
}

export default Bomb