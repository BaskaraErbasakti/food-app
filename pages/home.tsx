import React from 'react'
import FoodNavbar from '../components/foodNavbar'
import Jumbotron from '../components/jumbotron'
import PhoneDisplay from '../components/phoneDisplay'
import HowAppWork from '../components/howAppWork'
import styles from '../styles/Phone.module.css'
import { Container } from 'reactstrap'

const home = () => {
    return (
        <div>
            <FoodNavbar />
            <Jumbotron />  
            <PhoneDisplay />
            <Container className={styles.line}></Container> 
            <HowAppWork />           
        </div>
         
    )
}

export default home
