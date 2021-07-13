import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  state = {
    texto: 'Turma React'
  }
  handleClick() {
    alert('Alerta Oiii')
  }
  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Hello World! {this.state.texto}</h1>
        <input type="text" onChange={this.handleTextChange}></input>
        <button onClick={this.handleClick.bind(this)}>Click</button>
      </div>

    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App name={"Cleydson Souza"} />
  </React.StrictMode>,
  document.getElementById('root')
);
