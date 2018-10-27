import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      { name: 'Max', age: 28},
      { name: 'Sanket', age: 30},
      { name: 'Shruti', age: 29}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <p>This is really working!!!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name='Max' age='28' />
        <Person name='Sanket' age='30'>My Hobbies: Coding</Person>
        <Person name='Shruti' age='29' /> 
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
