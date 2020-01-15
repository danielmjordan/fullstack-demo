import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';
import '../styles/App.scss';

const requestUrl = 'http://localhost:3000/'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'None',
      bugs: exampleData,
    };
    this.filterHandler = this.filterHandler.bind(this);
  }

  componentDidMount() {
    fetch(requestUrl)
      .then((data) => data.json())
      .then((results) => this.setState( { bugs: results }))
  }

  filterHandler(filter) {
    this.setState({ filter });
  }

  render() {
    return (
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
    );
  }
}

export default App;
