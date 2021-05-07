import React from "react";
import "./style.css";
import TableHeader from "../TableHeader";

class Input extends React.Component {
  state = {
    searchTerm: "",
    refineEmployees: [],
  };

  componentDidMount() {
    if (this.state.refineEmployees.length < 1) {
      this.setState({
        refineEmployees: this.props.employees,
      });
    }
  }

  handleInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
    let userTyped = event.target.value;
    const refineList = this.props.employees.filter((item) => {
      let values =
        item.name.title +
        item.name.first +
        item.name.last +
        item.gender +
        item.dob.age +
        item.email +
        item.cell;
      return values.indexOf(userTyped) !== -1;
    });

    this.setState({
      refineEmployees: refineList,
    });
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            className="form-control form-control-lg"
            value={this.state.searchTerm}
            name="searchTerm"
            onChange={(event) => this.handleInputChange(event)}
            type="text"
            placeholder="Search for employees in your company"
          />
        </form>
        {this.state.refineEmployees.length > 0 && (
          <TableHeader empList={this.state.refineEmployees} />
        )}
      </div>
    );
  }
}

export default Input;
