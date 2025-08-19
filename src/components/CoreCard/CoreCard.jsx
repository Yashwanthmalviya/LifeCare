import React from 'react'
import './CoreCard.css'
import images from '../../constants/images'



const CoreCard = ({ icon, h3_txt, p_txt }) => {
    return (
        <div className="coreCard__container">
            <div className="coreCard__top">
                <div className="coreCard__icon">
                    <img src={icon} alt="" />

                </div>
            </div>
            <div className="coreCard__text">
                <h3>{h3_txt}</h3>
                <p>{p_txt}</p>
            </div>
        </div>
    )
}

export default CoreCard