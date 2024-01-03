import React from 'react';
import styles from './Title.module.css';

const Title = ({children, title, isWhiteDesc, ...props}) => {
    return (
        <div className={styles.Title}>
            <div className={styles.title} {...props}>{title}</div>
            <div className={styles.description} {...props}>
                {children}
            </div>
        </div>
    )
}
export default Title;