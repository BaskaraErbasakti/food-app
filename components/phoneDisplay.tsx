import React from 'react'
import PhoneOrange from '../public/phone-orange.png'
import PhoneWhite from '../public/phone-white.png'
import Image from 'next/image'
import styles from '../styles/Phone.module.css'


const PhoneDisplay = () => {
    return (
        <div className={styles.boxPhone}>        
            <div className={styles.phoneOrange}>
                <Image src={PhoneOrange} alt="phone-orange" loading="lazy" width="780%" height="650%"/>
            </div>
            <div className={styles.phoneWhite}>
                <Image src={PhoneWhite} alt="phone-white" loading="lazy" width="780%" height="650%"/>
            </div>
            
        </div>
    )
}

export default PhoneDisplay
