import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = {
       who: 'world'
    }
  }
  
  clickButtonFriend = () => {
    this.setState({ who: 'friend!'})
  }
  clickButtonReact = () => {
    this.setState({ who: 'React!'})
  }
  clickButtonWorld = () => {
    this.setState({ who: 'world!'})
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={this.clickButtonFriend}>Friend</button>
        <button onClick={this.clickButtonReact}>React</button>
        <button onClick={this.clickButtonWorld}>World</button>
      </div>
    )
  }
}

export default HelloWorld