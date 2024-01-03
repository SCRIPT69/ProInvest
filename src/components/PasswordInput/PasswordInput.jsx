import React, { useRef, useState } from 'react';
import styles from './PasswordInput.module.css';

const PasswordInput = ({isRegistration, setButtonActiveness}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState("password");
    const showPasswordBtnActive = (btn) => {
        if (showPassword) {
            setShowPassword(false);
            setInputType("password");
            btn.innerText = "show";
        }
        else {
            setShowPassword(true);
            setInputType("text");
            btn.innerText = "hide";
        }
    }

    const passwordInput1Ref = useRef();
    const passwordInput2Ref = useRef();
    const passwordErrorDiv1Ref = useRef();
    const passwordErrorDiv2Ref = useRef();

    const checkInputForErrors = (e) => {
        const passwordInput1 = passwordInput1Ref.current;
        const passwordInput2 = passwordInput2Ref.current
        const passwordErrorDiv1 = passwordErrorDiv1Ref.current;
        const passwordErrorDiv2 = passwordErrorDiv2Ref.current;

        setButtonActiveness(false);

        passwordInput1.style.backgroundColor = "rgba(255, 30, 30, 0.1)";
        if (passwordInput1.value.length < 8) {
            passwordErrorDiv1.innerText = "Password must be minimum 8 characters";
        }
        else if (!passwordInput1.value.match(/[a-z]/i) || !/[0-9]/.test(passwordInput1.value)) {
            passwordErrorDiv1.innerText = "Password must contain letters and numbers";
        }
        else {
            passwordInput1.style.backgroundColor = "#fff";
            passwordErrorDiv1.innerText = "";
            setButtonActiveness(true);

            if (isRegistration) {
                if (passwordInput2.value !== passwordInput1.value) {
                    passwordInput2.style.backgroundColor = "rgba(255, 30, 30, 0.1)";
                    passwordErrorDiv2.innerText = "The passwords mismatch";
                    setButtonActiveness(false);
                }
                else {
                    passwordInput2.style.backgroundColor = "#fff";
                    passwordErrorDiv2.innerText = "";
                }
            }
        }
    }
    return (
        <div>
            <div>
                <div className={styles.PasswordInput__minititle}>Enter the password</div>
                <div className={styles.PasswordInput__inputcontainer}>
                    <input type={inputType} placeholder='password' className={styles.PasswordInput__input} onChange={checkInputForErrors} ref={passwordInput1Ref}/>
                    <div className={styles.PasswordInput__showBtn} onClick={(e) => {
                        showPasswordBtnActive(e.currentTarget);
                    }}>show</div>
                </div>
            </div>
            <div className={styles.PasswordInput__error} ref={passwordErrorDiv1Ref}></div>

            {isRegistration ?
                <div>
                    <div className={styles.PasswordInput__minititle}>Repeat the password</div>
                    <div className={styles.PasswordInput__inputcontainer}>
                        <input type={inputType} placeholder='password' className={styles.PasswordInput__input} onChange={checkInputForErrors} ref={passwordInput2Ref}/>
                    </div>
                </div>
                : <div></div>
            }
            <div className={styles.PasswordInput__error} ref={passwordErrorDiv2Ref}></div>
        </div>
    )
}
export default PasswordInput;