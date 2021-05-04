import React from 'react';
import Header from './components/header/header';
import Input from './components/Input/input';
import ListHeader from './components/ListHeader/ListHeader';
import ListItem from './components/ListItem/ListItem';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App extends React.Component {

  state = {
    employees: [],
  };

  componentDidMount() {
      axios.get(`https://randomuser.me/api/?results=20&nat=Aus`)
        .then(res => {
          this.setState({ employees: res.data.results });
        });
  }

  render() {
    return (
      <div className="background-img">
      <div className="App">
        <Header />
        <Input />
        <ListHeader />
        <ListItem />

        {/* {this.state.employees.length > 0 &&
        <Navbar employees={this.state.employees}/> */}
  }
  </div>
      </div>
    );
  }
}

export default App;
