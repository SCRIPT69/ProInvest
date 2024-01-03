import React from 'react';
import UpButton from '../../components/UI/UpButton/UpButton';
import InputForm from '../../components/UI/InputForm/InputForm';

const FooterSection = () => {
    return (
        <section className="FooterSection">
            <div className="_container">
                <div className="FooterSection__links">
                    <div className="FooterSection__column">
                        <a href="" className="FooterSection__mainTitle">ProInvest</a>
                        <div className="FooterSection__copyright">Copyright © 2020. LogoIpsum. All rights reserved.</div>
                    </div>
                    <div className="FooterSection__column">
                        <div className="FooterSection__title">Services</div>
                        <a href="" className="FooterSection__link">Email Marketing</a>
                        <a href="" className="FooterSection__link">Campaigns</a>
                        <a href="" className="FooterSection__link">Branding</a>
                        <a href="" className="FooterSection__link">Offline</a>
                    </div>
                    <div className="FooterSection__column">
                        <div className="FooterSection__title">About</div>
                        <a href="" className="FooterSection__link">Our Story</a>
                        <a href="" className="FooterSection__link">Benefits</a>
                        <a href="" className="FooterSection__link">Team</a>
                        <a href="" className="FooterSection__link">Careers</a>
                    </div>
                    <UpButton/>
                </div>
                <div className='FooterSection__contacts'>
                    <div className='FooterSection__form'>
                        <div className='FooterSection__inputTitle'>Subscribe to our newsletter</div>
                        <InputForm type="email" placeholder="Email address" />
                    </div>
                    <div className="FooterSection__socialmedia">
                        <a href="" className="FooterSection__facebooklink"></a>
                        <a href="" className="FooterSection__twitterlink"></a>
                        <a href="" className="FooterSection__instagramlink"></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FooterSection;