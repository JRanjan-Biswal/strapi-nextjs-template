import React from 'react'
import styles from './mobileHamburger.module.css';

const MobileHamburger = ({isOpen=false}) => {
    return (
        <div className={`${styles.mobileBurgerMenu} ${isOpen ? styles.open : undefined}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default MobileHamburger