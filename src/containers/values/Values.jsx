import React from 'react'
import './Values.css'
import CoreCard from '../../components/CoreCard/CoreCard'
import images from '../../constants/images'
const Values = () => {
    return (
        <div className="core__container section__padding">
            <div className="core__main">
                <div className="core-text">
                    <h2>Our Core Values</h2>
                </div>
                <div className="core-cards">
                    <CoreCard icon={images.valueicon1} h3_txt={`Personalised \n Care`} p_txt="Customized solutions tailored to your needs." />
                    <CoreCard icon={images.valueicon2} h3_txt={`Quality \n Assurance`} p_txt="High standards ensure superior care." />
                    <CoreCard icon={images.valueicon3} h3_txt={`Professional \n Excellence`} p_txt="Experienced staff provide expert care." />
                    <CoreCard icon={images.valueicon4} h3_txt={`Empathy & \n Care`} p_txt="We respect and your concerns matter to us." />

                </div>
            </div>
        </div>
    )
}

export default Values