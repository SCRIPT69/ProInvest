import React, { useEffect, useState } from 'react';
import cl from './DropdownMenu.module.css';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';

const DropdownMenu = ({placeholder, values, hrefs, ...props}) => {
    const [dropdownMenuActive, setDropdownMenuActive] = useState("");

    const [showDropdownValues, setShowDropdownValues] = useState(false);
    const [dropdownValues, setDropdownValues] = useState([]);
    useEffect(() => {
        if (showDropdownValues) {
            setDropdownValues(values);
            if (Array.isArray(values) && values.length !== 0) {
                setDropdownMenuActive(cl.active);
            }
        }
        else {
            setDropdownValues([]);
            setDropdownMenuActive("");
        }
    }, [showDropdownValues, values]);

    return (
        <div {...props} className={[cl.DropdownMenu, dropdownMenuActive].join(' ')}
            onClick={() => {
                setShowDropdownValues(true);
            }}
            onMouseOut={(e) => {
                if (Array.isArray(dropdownValues) && dropdownValues.length !== 0 && !e.currentTarget.contains(e.relatedTarget)) {
                    setShowDropdownValues(false);
                }
            }}
        >
            <div className={cl.DropdownMenu__title}>
                {placeholder}
            </div>
            <div className={cl.DropdownMenu__values}>
                <TransitionGroup className={cl.DropdownMenu__values_inner}>
                    {dropdownValues.map((value) => 
                        <CSSTransition 
                            key={value.id}
                            timeout={100}
                            classNames="DropdownMenu__values"
                        >
                            <div className={cl.DropdownMenu__item} key={value.id}>
                                <a href={value.href}>{value.value}</a>
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    )
}
export default DropdownMenu;