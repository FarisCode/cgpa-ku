import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.scss'
import Semester from './Components/Semester/Semester';

export default class App extends Component {

  state = {
    semesters: 2,
    semesterResults: []
  }

  resultUpdater = (id) => {
    return (val) => {
      const updatedResults = [...this.state.semesterResults];
      updatedResults[id] = val;
      this.setState({
        semesterResults: updatedResults
      })
    }
  }

  render() {
    const renderSemesters = [];
    for (let i = 0; i < this.state.semesters; i++) {
      renderSemesters.push(<Semester resultUpdater={this.resultUpdater(i)} key={i} id={i} />)
    }

    return (
      <div className='topContainer'>
        <div className='heading'>
          <div className='image'></div>
          <div className='content'>
            <h1>CGPA Calculator</h1>
            <span>University of Karachi</span>
          </div>
        </div>
        <div className="main">
          {renderSemesters}

          <Button animated>
            <Button.Content visible>Add Semester</Button.Content>
            <Button.Content hidden>
              <Icon name='plus' />
            </Button.Content>
          </Button>
        </div>
        <div className="footer">
          <span>Calculations are performed by the equations and table provided on <a rel="noopener noreferrer" href="http://www.uok.edu.pk/sem_results/rules.php" target='_blank'>Official Website</a></span>
        </div>
      </div>
    )
  }
}
