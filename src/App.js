import React, { Component } from 'react';
import './App.css';

class App extends React.Component{
  constructor(props)
  {
  super(props)
  this.state = {
    latitude: null,
    longitude: null,
    countryName: null,
    cityName: null
    
  };
  this.getLocation = this.getLocation.bind(this);
  };
  
  getLocation()
  {
        fetch('https://api.ipdata.co/?api-key=dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e')
        .then((response) =>{
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
              response.json().then((data) =>{
                  console.log(data);
                  console.log(data.latitude);
                  console.log(data.longitude);
                  console.log(data.country_name);
                  this.setState({
                    latitude : data.latitude,
                    longitude : data.longitude,
                    countryName : data.country_name,
                    cityName : data.city
                  })
                });
              }
            )
            .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
  }

  render(){
    return(
      <div className="App">
      <h2>
        Google Map Assignment
      </h2>
      <button onClick={this.getLocation}>GetLocation</button>
      <h4>Coordinates</h4>
      <p>Latitude: {this.state.latitude}</p>
      <p>Longitude: {this.state.longitude}</p>
      <p>Country Name: {this.state.countryName}</p>
      <p>City Name: {this.state.cityName}</p>
      <p></p>
        <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk&q=${this.state.latitude},${this.state.longitude}`} >
        </iframe>
      </div>
    )
  }
}

export default App;
