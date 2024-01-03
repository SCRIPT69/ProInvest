import React from 'react';
import Title from '../../components/UI/Title/Title';
import CustomButton from '../../components/UI/CustomButton/CustomButton';

const ApplySection = () => {
    return (
        <section className="ApplySection">
            <div className="_container">
                <div className="ApplySection__body">
                    <div className="ApplySection__textcolumn">
                        <Title title="Looking to raise capital for your growing business?" style={{maxWidth:570,textAlign:"left"}}>Whether expanding or opening a brand-new concept, we make it easy to raise money from thousands of local investors.</Title>
                        <CustomButton>APPLY ONLINE</CustomButton>
                    </div>
                    <img src="img/applyImg.png"/>
                </div>
            </div>
        </section>
    )
}
export default ApplySection;