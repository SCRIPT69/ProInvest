import React from 'react';
import cl from './CustomButton.module.css';

const CustomButton = ({children, modifications, ...props}) => {
    const classes = [cl.CustomButton];

    if (Array.isArray(modifications)) {
        for (let btnClass of modifications) {
            switch (btnClass) {
                case "CustomButton_little":
                    classes.push(cl.CustomButton_little);
                    break;
                case "CustomButton_pinky":
                    classes.push(cl.CustomButton_pinky);
                    break;
                case "CustomButton_border":
                    classes.push(cl.CustomButton_border);
                    break;
            }
        }
    }

    return (
        <button className={classes.join(' ')} {...props}> 
            {children}
        </button>
    )
}
export default CustomButton;