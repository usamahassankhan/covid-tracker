import React,{ useState,useEffect} from 'react';
import styles from './CountryPicker.module.css';
import {NativeSelect,FormControl} from '@material-ui/core';
import {fetchcountries} from "../../api/index";
const CountryPicker = ({handleCountryChange}) => {
const [fetchedCountries,setfetchedCountries]=useState([]);
    useEffect(()=>{

    const fetchAPI=async()=>{
setfetchedCountries(await fetchcountries());
    }
    fetchAPI();
},[setfetchedCountries]);
console.log(fetchedCountries);


    return (
<FormControl className={styles.formControler}>
<NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
   
    <option value="global">Global</option>
    {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
</NativeSelect>
</FormControl>
            
       
    )
}
export default CountryPicker;
