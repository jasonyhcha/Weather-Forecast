import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from "react-sparklines";
import Chart from  "../components/chart";

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => {
      return weather.main.temp *(1.8) - 459.67;
    });
    const pressures = cityData.list.map(weather => {
      return weather.main.pressure;
    });
    const humidites = cityData.list.map(weather => {
      return weather.main.humidity;
    });

    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" units="°F" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa"/>
        </td>
        <td>
          <Chart data={humidites} color="purple" units="%"/>
        </td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidty (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({weather}){
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
