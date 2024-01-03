import React from 'react';
import styles from './UpButton.module.css';

const UpButton = ({...props}) => {
    return (
        <a href="#top" className={styles.UpButton} {...props}></a>
    )
}
export default UpButton;