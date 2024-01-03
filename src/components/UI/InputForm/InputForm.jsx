import React from 'react';
import styles from './InputForm.module.css';

const InputForm = ({...props}) => {
    return (
        <form className={styles.InputForm__form}>
            <input className={styles.InputForm__input} {...props} />
            <button className={styles.InputForm__button} type="submit">{">"}</button>
        </form>
    )
}
export default InputForm;