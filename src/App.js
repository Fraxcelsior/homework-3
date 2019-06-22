import React from 'react';
import './App.css';

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
 
  render() {
    return (
      <div className="App">
        <form >
        <label>
          <select value={data.name}>
          <option selected value="">-- pick a model --</option>
            {data.map(computer =><option value={computer.name}>{computer.name} ({computer.year})</option>)}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}


export default App;
