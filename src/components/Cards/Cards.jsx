import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
if(!confirmed){
    return "loading... "
}

return (

    <div className={styles.Container}>
<Grid container spacing={3} justify="center">
    <Grid item component={Card}>
        <CardContent>
            <Typography color="textSecondary" gutterBottm >Infacted </Typography>
            <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} seperator=","/></Typography>
        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">Number of active cases of Covid -19</Typography>
        </CardContent>
    </Grid>
    <Grid item component={Card}>
        <CardContent>
            <Typography color="textSecondary" gutterBottm >Recovered </Typography>
            <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} seperator=","/></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">Number of Recovered cases from Covid -19</Typography>
        </CardContent>
    </Grid>
    <Grid item component={Card}>
        <CardContent>
            <Typography color="textSecondary" gutterBottm >Death</Typography>
            <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} seperator=","/></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">Number of death cases of Covid -19</Typography>
        </CardContent>
    </Grid> 

</Grid>
    </div>        
       
    )
}

export default Cards;