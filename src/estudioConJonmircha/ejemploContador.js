import { Component } from "react";

export class Ejemplo extends Component {
  state = {
    contador: 0,
  };

  masUno = (e) => {
    this.setState({ contador: this.state.contador + 1 });    
  };

  menosUno = (e) => {
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <>
        <h1 className="bg-blue-600">Renderizado de Elementos</h1>
        <h2> {this.state.contador} </h2>
        <nav className="flex justify-evenly">
          <button
            onClick={this.masUno}
            className="bg-emerald-400 p-2 rounded-md mb-3"
          >
            Mas uno
          </button>
          <button
            onClick={this.menosUno}
            className="bg-purple-400 p-2 rounded-md mb-3"
          >
            Menos uno
          </button>
        </nav>
      </>
    );
  }
}
