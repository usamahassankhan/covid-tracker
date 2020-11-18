import React, { Component } from 'react'
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api/index';
import coronaImage from './image/image.png';
export default class App extends Component {
state={
  data:{},
  country:'',
}
  async componentDidMount( ){
   const fetchdata=await fetchData();
this.setState({data:fetchdata});
  }
 handleCountryChange=async(country)=>{
  const fetchdata=await fetchData(country);
this.setState({data:fetchdata,country:country}); 
}
  render() {
    const{data,country}=this.state;
    return (
      <div className={styles.Container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}
