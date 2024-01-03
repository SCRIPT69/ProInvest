import React, { Children } from 'react';
import cl from './Description.module.css';

const Description = ({children, ...props}) => {
    return (
        <div className={cl.Description} {...props}>
            {children}
        </div>
    )
}
export default Description;