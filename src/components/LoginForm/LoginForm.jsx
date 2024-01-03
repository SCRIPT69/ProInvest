import React from 'react';
import MyModal from '../UI/MyModal/MyModal';
import styles from './LoginForm.module.css';
import CustomButton from '../UI/CustomButton/CustomButton';
import PasswordInput from '../PasswordInput/PasswordInput';

const LoginForm = ({loginVisible, setLoginVisible, setRegisterVisible}) => {
    const setLoginBtnActiveness = (activeness) => {
        const loginBtn = document.getElementById("LoginBtn");
        if (activeness) {
            loginBtn.classList.remove(styles.LoginForm__buttonDisabled);
        }
        else {
            loginBtn.classList.add(styles.LoginForm__buttonDisabled);
        }
    }

    return (
        <MyModal visible={loginVisible} setVisible={setLoginVisible}>
            <div className={styles.LoginForm}>
                <div className={styles.LoginForm__title}>Log in</div>

                <div className={styles.LoginForm__minititle}>Enter your login</div>
                <input type="text" placeholder='login' className={styles.LoginForm__input}/>

                <PasswordInput isRegistration={false} setButtonActiveness={setLoginBtnActiveness}/>

                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <a href="" id="LoginBtn" className={[styles.LoginForm__button, styles.LoginForm__buttonDisabled].join(' ')}>log in</a>
                </div>

                <div className={styles.LoginForm__text}>Don't have an account? <span className={styles.LoginForm__link} onClick={() => {setLoginVisible(false);setRegisterVisible(true)}}>Register</span></div>
            </div>
        </MyModal>
    )
}
export default LoginForm;