import React from 'react'
import styles from '../styles/Jumbotron.module.css'

const Jumbotron = () => {
    return (
        <div className={styles.jumbotronBackground}>
            <div className={`${styles.textWrapp} container col-8`}>
                <p className={styles.titleFood}>Food app</p>
                <div>
                    <h1 className={styles.descFood}>Why stay hungry when you can order form Bella Onojie</h1>
                </div>
                <h4 className={styles.tagline}>Download the bella onoje’s food app now on</h4>
            </div>
            <div className="container d-flex col-6 justify-content-evenly">
                <button className={styles.boxPlaystore}>
                    <p className={styles.textPlaystore}>Playstore</p>
                </button>
                <button className={styles.boxAppstore}>
                    <p className={styles.textAppstore}>Appstore</p>
                </button>
            </div>
        </div>


        
    )
}

export default Jumbotron
