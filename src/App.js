import React from 'react';
import './App.css';
import axios from "axios";
import AppHeader from './components/AppHeader';
import Input from './components/Input';

class App extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=20&nat=Aus`).then((res) => {
      this.setState({ employees: res.data.results });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <AppHeader />
          {this.state.employees.length > 0 && (
            <Input employees={this.state.employees} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
