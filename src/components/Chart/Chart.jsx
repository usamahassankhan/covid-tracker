import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api/index';
import styles from './Chart.module.css';
import  {Line,Bar}from 'react-chartjs-2';  
const Chart = ({data,country}) => {
const [dailyData,setDailyData]=useState([]);
useEffect(()=>{
    const fetchAPI=async()=>{
        setDailyData(await fetchDailyData());  
    }
    console.log(dailyData);
    fetchAPI();
},[]);
const lineChart=( 
    dailyData.length
    ?(
<Line
data={{
    labels:dailyData.map(({date})=>date),
    datasets:[{
        data:dailyData.map(({confirmed})=>confirmed),
         label:"Infacted",
         borderColor:'#3333ff',
         fill:true,
    },{data:dailyData.map(({deaths})=>deaths),
    label:"Deaths",
    borderColor:'red',
    backgroundColor:'rgba(255,0,0,0.5)',
    fill:true,}], 
}}/>) 
:null
    );
const barChart=(
    data.confirmed ?(
<Bar
data={{
labels:['infacted','Recovered','Deaths'],
datasets:[{
    label:'People',
    backgroundColor:
    ['rgba(0,0,255,0.5)',
     'rgba(0,255,0,0.5)',
      'rgba(255,0,0,0.5)'],
      data:[data.confirmed.value,data.recovered.value,data.deaths.value]
}]
}}
options={{
    legend:{display:true,text:`current state in ${country}`},
}}
/>
    ):null
);

return (
<div className={styles.container}>
{country?barChart:lineChart}
</div>
            
       
    )
}
export default Chart;
