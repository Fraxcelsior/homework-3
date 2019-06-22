import React from 'react';
import './App.css';
import { addModel } from './actions/addModel'
import { connect } from 'react-redux'


const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.updateSelection = this.updateSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSelection(event) {
    console.log("PROPS?", this.props, "STATE IN UPDATE", this.state)
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    //data.find(model => model.name === this.state.value)
    
    this.props.addModel(
      data.find(model => model.name === this.state.value)
    )
  }



  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.updateSelection}>
              <option selected value="">-- pick a model --</option>
              {data.map(computer => <option value={computer.name}>{computer.name} ({computer.year})</option>)}
            </select>
          </label>
         
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({

})


export default connect(mapStateToProps, { addModel: addModel })(App)


/*
workbench

const computerObject = (data, selection = this.state.value) => {
      data.find(model => model.name === selection)
    }
    this.props.addModel(computerObject);



     <button onClick={this.dispatchSelection}>add</button>
*/