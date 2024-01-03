import React, { useRef } from 'react';
import cl from './NavHeader.module.css';
import Logo from '../Logo/Logo';
import CustomButton from '../CustomButton/CustomButton';
import { useState } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Burger from '../../Burger/Burger';
import MyModal from '../MyModal/MyModal';
import RegisterForm from '../../RegisterForm/RegisterForm';
import LoginForm from '../../LoginForm/LoginForm';

const NavHeader = () => {
    const [opportunitiesDropdownMenuValues, setOpportunitiesDropdownMenuValues] = useState([
        {id:1, value:"info", href:""},
        {id:2, value:"investments list", href:""},
        {id:3, value:"source", href:""},
    ])
    const [howItWorksDropdownMenuValues, setHowItWorksDropdownMenuValues] = useState([
        {id:1, value:"info", href:""},
        {id:2, value:"our work", href:""},
        {id:3, value:"about us", href:""},
    ])

    //for burger
    const navbarRef = useRef();
    const [burgerMenuOpened, setBurgerMenuOpened] = useState(false);

    //for modal window register
    const [registerVisible, setRegisterVisible] = useState(false);

    //for modal window login
    const [loginVisible, setLoginVisible] = useState(false);

    return (
        <nav className={cl.NavHeader}>
            <Logo/>
            <Burger burgerMenuRef={navbarRef} burgerMenuOpened={burgerMenuOpened} setBurgerMenuOpened={setBurgerMenuOpened}/>
            <ul className={cl.NavHeader__list} ref={navbarRef}>
                <div className={cl.ExitButton} onClick={() => {setBurgerMenuOpened(false)}}>×</div>

                <li className={cl.NavHeader__list_element}>
                    <DropdownMenu placeholder="Investment Opportunities" values={opportunitiesDropdownMenuValues}/>
                </li>
                <li className={cl.NavHeader__list_element}>
                    <DropdownMenu placeholder="How it works" values={howItWorksDropdownMenuValues}/>
                </li>
                <li className={cl.NavHeader__list_element}>
                    <a href="">About us</a>
                </li>
            </ul>
            <div className={cl.NavHeader__btns}>
                <CustomButton modifications={["CustomButton_little"]} onClick={() => {setLoginVisible(true)}}>Login</CustomButton>
                <CustomButton modifications={["CustomButton_little","CustomButton_pinky"]} onClick={() => {setRegisterVisible(true)}}>Register</CustomButton>
            </div>

            <RegisterForm registerVisible={registerVisible} setRegisterVisible={setRegisterVisible} setLoginVisible={setLoginVisible}/>
            <LoginForm loginVisible={loginVisible} setLoginVisible={setLoginVisible} setRegisterVisible={setRegisterVisible}/>
        </nav>
    )
}
export default NavHeader;