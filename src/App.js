import './App.css';
import React, {Component} from 'react';
import Car from './Car/Car';
class App extends Component{
  render(){
    const divStyle = {
      'color': 'orange',
      'text-align':'center'
    }
    return(
      <div style = {divStyle}>
        <h1  style={{fontSize: '220px',margin: 'auto'}}>Hello, stranger!</h1>
        <Car name = {'BMW'} year = {2228} />
      </div>
    );
  }
  
}
export default App;
