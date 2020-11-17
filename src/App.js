import React, { Component } from 'react'
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api/index';

export default class App extends Component {
state={
  data:{},

}



  async componentDidMount( ){
   const fetchdata=await fetchData();
this.setState({data:fetchdata});
  }
  render() {
    return (
      <div className={styles.Container}>
        <Cards data={this.state.data}/>
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}
