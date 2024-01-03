import React from 'react';
import MyModal from '../UI/MyModal/MyModal';
import styles from './RegisterForm.module.css';
import CustomButton from '../UI/CustomButton/CustomButton';
import PasswordInput from '../PasswordInput/PasswordInput';

const RegisterForm = ({registerVisible, setRegisterVisible, setLoginVisible}) => {
    const setRegisterBtnActiveness = (activeness) => {
        const registerBtn = document.getElementById("RegisterBtn");
        if (activeness) {
            registerBtn.classList.remove(styles.RegisterForm__buttonDisabled);
        }
        else {
            registerBtn.classList.add(styles.RegisterForm__buttonDisabled);
        }
    }

    return (
        <MyModal visible={registerVisible} setVisible={setRegisterVisible}>
            <div className={styles.RegisterForm}>
                <div className={styles.RegisterForm__title}>Registration</div>

                <div className={styles.RegisterForm__minititle}>Enter new login</div>
                <input type="text" placeholder='login' className={styles.RegisterForm__input}/>

                <PasswordInput isRegistration={true} setButtonActiveness={setRegisterBtnActiveness}/>

                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <a href="" id="RegisterBtn" className={[styles.RegisterForm__button, styles.RegisterForm__buttonDisabled].join(' ')}>register</a>
                </div>

                <div className={styles.RegisterForm__text}>Already have an account? <span className={styles.RegisterForm__link} onClick={() => {setRegisterVisible(false);setLoginVisible(true)}}>Log in</span></div>
            </div>
        </MyModal>
    )
}
export default RegisterForm;