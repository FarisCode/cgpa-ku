import React, { Component } from 'react'
import { Icon, Button } from 'semantic-ui-react';
import CourseRow from '../CourseRow/CourseRow';
import './Semester.scss'

export default class Semester extends Component {
  state = {
    closeHovered: false,
    courses: 4,
  }

  render() {
    const renderCourses = [];
    for (let i = 0; i < this.state.courses; i++) {
      renderCourses.push(<CourseRow closeHovered={this.state.closeHovered} key={i} id={i} />)
    }
    return (
      <div className='semesterComponent'>
        <div className="topBar">
          <h2 className="header">
            Semester #{this.props.id + 1}
          </h2>
          <div className='closeIcon' onMouseEnter={() => { this.setState({ closeHovered: true }) }} onMouseLeave={() => { this.setState({ closeHovered: false }) }}>
            <Icon color={this.state.closeHovered ? 'red' : null} circular name='close' />
          </div>
        </div>
        <div className="content">
          {renderCourses}
        </div>
        <div className="bottom">
          <div className="result">
            Semester #1 GPA: <strong>0.00</strong>
          </div>
          <Button basic animated>
            <Button.Content visible>Add Course</Button.Content>
            <Button.Content hidden>
              <Icon name='plus' />
            </Button.Content>
          </Button>
        </div>
      </div>
    )
  }
}
