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
  
  
  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  render(){
    const divStyle = {
      'color': 'black',
      'text-align':'center'
    }

    const cars = this.state.cars
    return(
      <div style = {divStyle}>
        <h1>{this.state.pageTitle}</h1>
        
        
        <button onClick={this.changeTitleHandler.bind(this, ' changed')}>click!</button>

        <h1  style={{fontSize: '40px',margin: 'auto'}}>Hello, stranger!</h1>
        <Car 
          name = {cars[0].name} 
          year = {cars[0].year}
          onChangeTitle ={this.changeTitleHandler.bind(this, cars[0].name)}
          
          />
        <Car 
          name = {cars[1].name} 
          year = {cars[1].year}
          onChangeTitle = {()=>this.changeTitleHandler(cars[1].name)}
          />
          
      </div>
    );
  }
  
}
export default App;
