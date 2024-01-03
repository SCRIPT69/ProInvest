import React from 'react';
import Description from '../../components/UI/Description/Description';
import CustomButton from '../../components/UI/CustomButton/CustomButton';

const GetStarted = () => {
    return (
        <section className='GetStarted'>
            <div style={{position:"relative", zIndex:"2"}}>
                <div className='GetStarted__title'>
                    Meaningful investments in Main Street businesses
                </div>
                <Description style={{maxWidth:"470px"}}>Browse vetted investment offerings in communities all over the US.</Description>
                <CustomButton>Get Started</CustomButton>
            </div>
        </section>
    )
}
export default GetStarted;