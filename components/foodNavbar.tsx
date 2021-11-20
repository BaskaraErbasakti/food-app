import React from 'react'
import { Container, Col } from 'reactstrap'
import Image from 'next/image'
import Logo from '../public/logo.png'
import styles from '../styles/Navbar.module.css'

const FoodNavbar = () => {
    return (
        <Container className="d-flex">
            <Col>
                <Image src={Logo} alt="logo" width="206px" height="101.76px"></Image>
            </Col>
            <Col className="d-flex align-items-center">
                <Col className="d-flex justify-content-center" type="button" >
                    <h2 className={styles.fontHome} >Home</h2>
                </Col>
                <Col className="d-flex justify-content-center" type="button">
                    <h2 className={styles.fontNavbar} >Prodct</h2>
                </Col>
                <Col className="d-flex justify-content-center" type="button">
                    <h2 className={styles.fontNavbar} >Faq</h2>
                </Col>
                <Col className="d-flex justify-content-center" type="button">
                    <h2 className={styles.fontNavbar} >Contact</h2>
                </Col>
            </Col>
        </Container>
    )
}

export default FoodNavbar
