import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
export default class App extends React.Component {
  state = {
    // vytvori promenou komponenty
    names: []
  };
  constructor() {
    super();
    this.getNames();
  }

  getNames() {
    fetch(`https://private-62ed3d-namelist2.apiary-mock.com/names`)
      .then(data => data.json()) // napojeni na predchozi funkci(fetch), zretezeni navratovych hodnot
      .then(names => {
        this.setState({ names: names.Students });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let NamesList = this.state.names.map(name => (
      <p>
        <strong>
          <tr> {name.name}</tr>
        </strong>
      </p>
    ));
    let NamesList2 = this.state.names.map(name => (
      <p>
        <strong>
          <tr>{name.lastname}</tr>
        </strong>
      </p>
    ));

    //return <div>Dobrý den.{JSON.stringify(this.state.names)}</div>; // vypsani pole names jako string
    return (
      <div>
        <table bordercolor="black" border="1" cellPadding="5" cellSpacing="1">
          <tr>
            <td>
              <h3> Jmeno</h3>
            </td>
            <td>
              <h3> Prijmeni</h3>
            </td>
          </tr>
          <tr>
            {" "}
            <td>{NamesList}</td>
            <td>{NamesList2}</td>
          </tr>
        </table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
