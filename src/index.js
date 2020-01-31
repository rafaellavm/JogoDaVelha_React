import React from 'react';
import ReactDOM from 'react-dom';
import './css/estilos.css';
import * as serviceWorker from './serviceWorker';

class Quadrado extends React.Component {
  //Quando você chama setState em um componente, o React atualiza automaticamente os componentes filhos dentro dele também.
  constructor(props) {
    super(props);
    this.state = {
      value: null, // todos os valores ficam nulos
    };
  }

  render() {
    return (
      <button className="quadrado" onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>

    );
  }
}

class Tabuleiro extends React.Component {

  constructor(props)}

  renderSquare(i) {
    return <Quadrado value={i} />;
  }

  render() {
    const status = 'Proximo jogador X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Jogo extends React.Component {
  
  render() {
    return (
      <div className="jogo">
        <div className="jogo-tabuleiro">
          <Tabuleiro />
        </div>
        <div className="jogo-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Jogo />,
  document.getElementById('root')
);

serviceWorker.unregister();
