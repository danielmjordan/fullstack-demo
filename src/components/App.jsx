import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';
import '../styles/App.scss';
import Modal from './Modal.jsx';

const requestUrl = 'http://localhost:3000/'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      filter: 'None',
      originalBugs: [],
      bugs: [],
    };

    this.filterHandler = this.filterHandler.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ show: !this.state.show });
  }

  componentDidMount() {
    fetch(requestUrl)
      .then((data) => data.json())
      .then((results) => this.setState( { bugs: results, originalBugs: results }))
  }

  filterHandler(filter) {
    this.setState({ filter }, () => {
      if (this.state.filter !== 'None') {
        const filtered = this.state.bugs.filter(bug => bug.threatLevel === filter);
        this.setState({ bugs: filtered })
      } else {
        this.setState({ bugs: this.state.originalBugs });
      }
    })
  }

  render() {
    return (
      <div>
        <h2>BugReporter</h2>
        <button onClick={this.toggleModal}>Add Bug Report</button>
        <table>
          <Nav
            filterHandler={this.filterHandler}
          />
          {this.state.bugs.map((bug) => (
            <BugTile
              bugName={bug.bugName}
              bugDescription={bug.bugDescription}
              reportedBy={bug.reportedBy}
              createdDate={bug.createdDate}
              assignedTo={bug.assignedTo}
              threatLevel={bug.threatLevel}
              key={bug.bugName}
            />
          ))}
        </table>
        <table>
          <Modal show={this.state.show}/>
        </table>
      </div>
    );
  }
}

export default App;
