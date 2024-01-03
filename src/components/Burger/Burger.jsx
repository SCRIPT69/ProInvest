import React, { useEffect, useState } from 'react';
import styles from './Burger.module.css';

const Burger = ({burgerMenuRef, burgerMenuOpened, setBurgerMenuOpened, props}) => {

    //This thing is responsible for the appearance of the burger at a certain screen width
    //when changing you should also change it in Burger.module.css in media request
    //also in burgerMenuRef, for dark background and special settings
    const windowWidthLimit = 682;

    useEffect(() => {
        if (window.innerWidth <= windowWidthLimit) {
            if (burgerMenuOpened) {
                burgerMenuRef.current.style.display = "flex";
            }
            else {
                burgerMenuRef.current.style.display = "none";
            }
        }
    }, [burgerMenuOpened])

    return (
        <div>
            <div className={styles.Burger} onClick={() => {setBurgerMenuOpened(true)}}>
                <span></span>
            </div>
        </div>
    )
}
export default Burger;