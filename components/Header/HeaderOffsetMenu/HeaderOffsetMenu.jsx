import React from 'react';
import styles from "./HeaderOffsetMenu.module.css";
import Link from 'next/link';

const HeaderOffsetMenu = ({ isOpen = false, data, left, top, right }) => {

    let offsetDirectionOpen = top ? styles.topOpen : right ? styles.rightOpen : styles.leftOpen;
    let offsetDirectionClose = top ? styles.topClose : right ? styles.rightClose : styles.leftClose;

    return (
        <div className={`${styles.offsetMenuContainer} ${offsetDirectionClose} ${isOpen ? offsetDirectionOpen : undefined}`}>
            {
                data && data.length > 0 &&
                data.map((item, index) => (
                    <Link href={item.href || '#'} key={item.id || `menu_${index}`}>
                        <div className={styles.innerNav}>
                            {item.name}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default HeaderOffsetMenu