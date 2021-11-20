import React from 'react'
import FoodNavbar from '../components/foodNavbar'
import Jumbotron from '../components/jumbotron'
import PhoneDisplay from '../components/phoneDisplay'
import HowAppWork from '../components/howAppWork'
import styles from '../styles/Phone.module.css'
import AvailableApp from '../components/availableApp'
import FoodFooter from '../components/foodFooter'
import { Container } from 'reactstrap'
import Head from 'next/head'

const index = () => {
    return (
        <div>
            <Head>
              <title>Home</title>   
              <link rel="shortcut icon" href="favicon1.ico" type="image/x-icon" />           
            </Head>
            
            <FoodNavbar />
            <Jumbotron />  
            <PhoneDisplay />
            <Container className={styles.line}></Container> 
            <HowAppWork />   
            <AvailableApp />
            <FoodFooter />
                 
        </div>
         
    )
}

export default index
