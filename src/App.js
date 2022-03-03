import './App.css';
import React, {Component} from 'react';
import Car from './Car/Car';
class App extends Component{
  state ={
    cars: [
      {name: 'KIA',year:2108},
      {name: 'FORD',year:2118},
    ],
    pageTitle:'React components'
  }
  
  
  changeTitleHandler = () => {
    console.log('clicked')
  }

  render(){
    const divStyle = {
      'color': 'orange',
      'text-align':'center'
    }

    const cars = this.state.cars
    return(
      <div style = {divStyle}>
        <h1>{this.state.pageTitle}</h1>
        
        <button onClick={this.changeTitleHandler}>change title</button>

        <h1  style={{fontSize: '40px',margin: 'auto'}}>Hello, stranger!</h1>
        <Car name = {cars[0].name} year = {cars[0].year}/>
        <Car name = {cars[1].name} year = {cars[1].year}/>
      </div>
    );
  }
  
}
export default App;
