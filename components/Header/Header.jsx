'use client'
import React, { useState } from 'react';
import styles from "./header.module.css";
import MobileHamburger from './MobileHamburger';
import HeaderOffsetMenu from './HeaderOffsetMenu/HeaderOffsetMenu';
import Link from 'next/link';
import Image from 'next/image';

const data = [
    { href: '#', name: 'Home' },
    { href: '#', name: 'About Us' },
    { href: '#', name: 'Contact Us' },
    { href: '#', name: 'Faqs' },
    { href: '#', name: 'Gallery' },
]

const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);

    const handleBurgerMenuClick = () => setBurgerOpen(!burgerOpen);

    return (
        <div style={{ position: 'relative' }}>
            <header className={`${styles.header}`}>
                {/* <Logo /> */}
                <div className={styles.logo}>
                    <Image src="/next.svg" alt="logo" fill priority={true} />
                </div>

                {/* desktop navigation */}
                <div className={styles.navMainContainer}>
                    {
                        data && data.length > 0 && data.map((item, index) => (
                            <Link href={item.href || "#"} key={item.id || `menu_${index}`}>
                                <div>
                                    {item.name}
                                </div>
                            </Link>
                        ))
                    }
                </div>

                {/* mobile hamburger */}
                <div className={styles.mobileBurgerMenu} onClick={handleBurgerMenuClick}>
                    <MobileHamburger isOpen={burgerOpen} />
                </div>
            </header>

            {/* mobile navigation menu */}
            <div className={styles.offSetMenu}>
                {/* AVAILABLE OFFSETS (slide from) ====> left, top, right */}
                <HeaderOffsetMenu isOpen={burgerOpen} data={data} left={true} />
            </div>
        </div>
    )
}

export default Header