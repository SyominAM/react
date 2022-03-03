import './App.css';
import React, {Component} from 'react';
import Car from './Car/Car';
class App extends Component{
  state ={
    cars: [
      {name: 'KIA',year:2108},
      {name: 'FORD',year:2118},
    ],
    pageTitle:'React components',
    showCars:false
  }
  
  
  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) =>{
    console.log("changed",event.target.value)
    this.setState({
      pageTitle: event.target.value
    })
  }

  toggleCarsHandler = () =>{
    this.setState({
      showCars: !this.state.showCars 
    })
  }


  render(){
    const divStyle = {
      'color': 'black',
      'text-align':'center'
    }

    return(
      <div style = {divStyle}>
        <h1>{this.state.pageTitle}</h1>
        
        <input type = "text" onChange={this.handleInput} />

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        <h1  style={{fontSize: '40px',margin: 'auto'}}>Hello, stranger!</h1>
        
        { 
          this.state.showCars
          ? this.state.cars.map((car, index) => {
            return (
              <Car
                key={index}
                name={car.name}
                year={car.year}
                onChangeTitle={() => this.changeTitleHandler(car.name)}
              />
            )
        }) :null
      }

      
      </div>
    );
  }
  
}
export default App;
