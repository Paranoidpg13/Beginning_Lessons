import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Item from './MyItem';


class CatchPokemon extends React.Component {
  constructor() {
    super()
    this.state = {
      name: null,
      height: null,
      type: [],
      weight: null,
    }
  }
  getNewCharacter() {
    const randNum = Math.ceil(Math.random()*1025)
    const url = `https://pokeapi.co/api/v2/pokemon/${randNum}`
    fetch(url)
      .then(response => response.json())
      .then(data => { console.log(data)   
        this.setState({
      name: data.name,
      height: data.height/10,
      type: data.types[0].type.name,
      type2: data.types[1].type.name,
      weight: data.weight/10,
      loadedCharacter: true,
      })


    })
  }
  render() {
    return (
    <div>
      {
        this.state.loadedCharacter &&
        <div> 
          <h1>{this.state.name}</h1>
      <p>{this.state.height} m</p>
      <p>weight: {this.state.weight} kg</p>
      <ul>
        <li>{this.state.type} </li>
        <li>{this.state.type2} </li>

      </ul>
     
        </div>
      }
       <button 
      type="button" 
      onClick={() => this.getNewCharacter()}
      className="bn" 
      >
        Randomize Pokemon
      </button>
      </div>
    )
  }

}


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <CatchPokemon />





        {/* <img src={logo} className="App-logo" alt="logo" />
        {/* <Item name="Pratik" />
        <Item name="Mota" /> */}
        {/*<p>
          Edit <code>src/App.js</code> and save to reload or enjoy.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
