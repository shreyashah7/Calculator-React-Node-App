import React, { Component } from 'react';
import './App.css';
import * as API from './api/API';

class App extends Component {

  state = {
    firstNum: '',
    secondNum: '',
    answer: ''
  };
  // calc-app:comment - Initializing the state variables used in forms
  componentWillMount() {
    this.setState({
      firstNum: '',
      secondNum: '',
      answer: ''
    });
  }
  // calc-app:comment - Server call to add two numbers
  calculatorOperations = (formdata, operation) => {
    formdata.operation = operation;
    API.calculateValue(formdata)
      .then((result) => {
        this.setState({
          answer: result != null ? result.data : "NaN"
        });
      });
  };

  // calc-app:comment - Clear the calculator Inputs
  clearData = () => {
    this.setState({
      firstNum: '',
      secondNum: '',
      answer: ''
    });
  }

  // calc-app:comment - Render the html for the view
  render() {
    return (
      <div className="App container">
        <form className="well form-horizontal" action="" method="post">
          <fieldset>
            <legend className="app-header">Calculator Application</legend>
            <div className="form-group">
              <label className="col-sm-4 col-md-4 col-lg-4 control-label"
                htmlFor="firstNum">First Number</label>
              <div className="col-sm-3 col-md-3 col-lg-3">
                <input
                  type="text"
                  className="form-control"
                  id="firstNum"
                  placeholder="Enter First Number"
                  name="firstNum"
                  value={this.state.firstNum}
                  onChange={(event) => {
                    this.setState({
                      firstNum: event.target.value
                    });
                  }} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-4 col-md-4 col-lg-4 control-label"
                htmlFor="secondNum">Second Number</label>
              <div className="col-sm-3 col-md-3 col-lg-3">
                <input type="text"
                  className="form-control"
                  id="secondNum"
                  placeholder="Enter Second Number"
                  name="secondNum"
                  value={this.state.secondNum}
                  onChange={(event) => {
                    this.setState({
                      secondNum: event.target.value
                    });
                  }} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-4 col-md-4 col-lg-4 control-label"
                htmlFor="answer">Answer</label>
              <div className="col-sm-3 col-md-3 col-lg-3">
                <input type="text"
                  disabled
                  className="form-control"
                  id="answer"
                  name="answer"
                  value={this.state.answer} />
              </div>
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-info mg-r-5" onClick={() => this.calculatorOperations(this.state, 'add')}>Addition</button>
              <button type="button" className="btn btn-info mg-r-5" onClick={() => this.calculatorOperations(this.state, 'subtract')}>Subtraction</button>
              <button type="button" className="btn btn-info mg-r-5" onClick={() => this.calculatorOperations(this.state, 'multiply')}>Multiplication</button>
              <button type="button" className="btn btn-info mg-r-5" onClick={() => this.calculatorOperations(this.state, 'divide')}>Division</button>
              <button type="button" className="btn btn-primary" onClick={() => this.clearData()}>Clear (AC)</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
