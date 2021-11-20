import React from 'react'
import styles from '../styles/AvailableApp.module.css'

const AvailableApp = () => {
    return (        
        <div className={styles.jumbotronBackground}>
            <div className={`${styles.textWrapp} container col-8`}>                
                <div>
                    <h2 className={styles.descFood}>Download the app now.</h2>
                </div>
                <h4 className={styles.tagline}>Available on your favorite store. Start your premium experience now</h4>
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

export default AvailableApp
