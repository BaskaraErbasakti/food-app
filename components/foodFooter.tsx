import React from 'react'
import { Container } from 'reactstrap'
import styles from '../styles/FoodFooter.module.css'
import Logo from '../public/logo.png'
import Image from 'next/image'

const FoodFooter = () => {
    return (
        <Container className="d-flex justify-content-evenly align-items-center pt-2">
            <div>
                <Image src={Logo} alt="logo" width="206px" height="101.76px" />
            </div>
            <div className="d-flex justify-content-evenly align-items-center">
                <button className="mx-2">
                    <Image src="/facebook.png" alt="facebook" width="41px" height="41px"/>
                </button>
                <button className="mx-2">
                    <Image src="/twitter.png" alt="twitter" width="41px" height="41px"/>
                </button>
                <button className="mx-2">
                    <Image src="/instagram.png" alt="instagram" width="41px" height="41px"/>
                </button>                
            </div>
            <div>
                <p className="m-0">Copywright 2020 Bella Onojie.com</p>
            </div>
        </Container>
    )
}

export default FoodFooter
