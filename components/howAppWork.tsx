import React from 'react'
import styles from '../styles/HowAppWork.module.css'
import Image from 'next/image'
import ImageCreateAccount from "../public/create-account.png"
import ImageExplore from "../public/explore.png"
import ImageCheckout from "../public/checkout.png"
import { Container } from 'reactstrap'

const HowAppWork = () => {
    return (
        <Container className="d-flex flex-column align-items-center mt-4 pt-4">
            <div className="d-flex justify-content-center">
                <h1 className={styles.titleAppWork}>How the app works</h1>
            </div>        
            <div className="d-flex align-items-center mt-4">
                <div className={styles.boxImage}>
                    <Image src={ImageCreateAccount} alt="create-account" height="650%" width="500%"/>
                </div>
                <div className={styles.boxText}>
                    <h3 className={styles.titleCreateAccount}>Create an account</h3>
                    <h2 className={styles.commandCreateAccount}>Create/login to an existing account to get started</h2>
                    <h4 className={styles.descCreateAccount}>An account is created with your email and a desired password</h4>
                </div>                
            </div>
            <div className="d-flex align-items-center mt-4">
                <div className={styles.boxTextTengah}>
                    <h3 className={styles.titleCreateAccount}>Explore varieties</h3>
                    <h2 className={styles.commandCreateAccount}>Shop for your favorites meal as e dey hot.</h2>
                    <h4 className={styles.descCreateAccount}>Shop for your favorite meals or drinks and enjoy while doing it.</h4>
                </div>   
                <div className={styles.boxImageTengah}>
                    <Image src={ImageExplore} alt="create-account" height="600%" width="550%"/>
                </div>             
            </div>
            <div className="d-flex align-items-center mt-4">
                <div className={styles.boxImage}>
                    <Image src={ImageCheckout} alt="create-account" height="650%" width="500%"/>
                </div>
                <div className={styles.boxText}>
                    <h3 className={styles.titleCreateAccount}>Checkout</h3>
                    <h2 className={styles.commandCreateAccount}>When you done check outand get it delivered.</h2>
                    <h4 className={styles.descCreateAccount}>When you done check out and get it delivered with ease.</h4>
                </div>                
            </div>
        </Container>
    )
}

export default HowAppWork
