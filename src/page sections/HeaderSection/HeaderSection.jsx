import React from 'react';
import GetStarted from '../../page\ sections/GetStarted/GetStarted';
import NavHeader from '../../components/UI/NavHeader/NavHeader';

const HeaderSection = () => {
    return (
        <header className="HeaderSection">
            <div className="_container">
                <NavHeader/>
                <GetStarted/>
            </div>
        </header>
    )
}
export default HeaderSection;