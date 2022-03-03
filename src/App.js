import './App.css';
import React, {Component} from 'react';

class App extends Component{
  render(){

  return React.createElement(
    'div',
    {
      className: 'App'
    },
    React.createElement(
      'h1',
      null,
      'Hello'
    )
   
  )
  }
  
}
export default App;
