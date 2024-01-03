import React, { useState } from 'react';
import Title from '../../components/UI/Title/Title';
import { useEffect } from 'react';
import InvestmentsGrid from '../../components/InvestmentsGrid/InvestmentsGrid';
import CustomButton from '../../components/UI/CustomButton/CustomButton';

const InvestmentsSection = () => {
    const allInvestments = [
        {id:1, name:"Oxalis", location:"Brooklyn, NY", description:"A recognized leader in language immersion & early education, opening second school.", img:'img/01.jpg', raisedValue:"574,920", ofValue:"1,000,000", rasiedPercent:57,},
        {id:2, name:"Oxalis", location:"Brooklyn, NY", description:"A recognized leader in language immersion & early education, opening second school.", img:'img/02.jpg', raisedValue:"574,920", ofValue:"1,000,000", rasiedPercent:57,},
        {id:3, name:"Oxalis", location:"Brooklyn, NY", description:"A recognized leader in language immersion & early education, opening second school.", img:'img/03.jpg', raisedValue:"574,920", ofValue:"1,000,000", rasiedPercent:57,},
        {id:4, name:"Oxalis", location:"Brooklyn, NY", description:"A recognized leader in language immersion & early education, opening second school.", img:'img/04.jpg', raisedValue:"574,920", ofValue:"1,000,000", rasiedPercent:57,},
        {id:5, name:"Oxalis", location:"Brooklyn, NY", description:"A recognized leader in language immersion & early education, opening second school.", img:'img/05.jpg', raisedValue:"574,920", ofValue:"1,000,000", rasiedPercent:57,},
        {id:6, name:"Oxalis", location:"Brooklyn, NY", description:"A recognized leader in language immersion & early education, opening second school.", img:'img/01.jpg', raisedValue:"574,920", ofValue:"1,000,000", rasiedPercent:57,},
        {id:7, name:"Oxalis", location:"Brooklyn, NY", description:"A recognized leader in language immersion & early education, opening second school.", img:'img/02.jpg', raisedValue:"574,920", ofValue:"1,000,000", rasiedPercent:57,},
        {id:8, name:"Oxalis", location:"Brooklyn, NY", description:"A recognized leader in language immersion & early education, opening second school.", img:'img/03.jpg', raisedValue:"574,920", ofValue:"1,000,000", rasiedPercent:57,},
        {id:9, name:"Oxalis", location:"Brooklyn, NY", description:"A recognized leader in language immersion & early education, opening second school.", img:'img/04.jpg', raisedValue:"574,920", ofValue:"1,000,000", rasiedPercent:57,},
    ];
    const [investments, setInvestments] = useState(allInvestments);
    const [maxInvestments, setMaxInvestments] = useState(6);
    useEffect(() => {
        if (maxInvestments == -1) {
            setInvestments(allInvestments);
        }
        else if (allInvestments.length > maxInvestments) {
            setInvestments(allInvestments.slice(0, maxInvestments));
        }
    }, [maxInvestments])
    
    return (
        <section className="InvestmentsSection">
            <div className='_container'>
                <Title title="Offerings open for investment" style={{maxWidth:770}}>Explore pre-vetted investment opportunities available in a growing number of industry categories.</Title>
                <InvestmentsGrid investments={investments}/>
                <CustomButton modifications={["CustomButton_border"]} style={{margin:"60px auto"}} onClick={(e) => {
                    setMaxInvestments(-1);
                    e.currentTarget.style.display = "none";
                }}>View All Projects</CustomButton>
            </div>
        </section>
    )
}
export default InvestmentsSection;