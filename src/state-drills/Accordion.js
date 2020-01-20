import React, { Component } from "react"
import './Accordion.css'

class Accordion extends Component {
  static defaultProps = {
    sections: []
  };
  state = {
    activeSectionIndex: null
  }


  handleSetActiveSecion  = (sectionIndex) => {
    this.setState( { activeSectionIndex: sectionIndex } )
  }
  
  renderItem(section, idx, activeSectionIndex) {
    return (
      <li className='Accordion-item' key={idx}>
        <button 
          type='button'
          onClick={() => this.handleSetActiveSecion(idx)}
        >
          {section.title}
        </button> 
        {(activeSectionIndex === idx) && <p>{section.content}</p>} 
      </li> //When a button is clicked, only that section should be open and the other sections should be closed.
    ) 
  }

  render() {
    const { activeSectionIndex } = this.state // activeSectionIndex = this.state
    const { sections } = this.props // sections = this.props
    return (
      <ul className='Accordion'>
        {sections.map((section, idx) =>
          this.renderItem(section, idx, activeSectionIndex)
        )}
      </ul>
    )
  }
}

export default Accordion;