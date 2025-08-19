import React from 'react'
import images from '../../constants/images'
import './Logo.css'

const Logo = () => {
    return (
        <div className="logos section__padding">
            <div className="logos-slide">
                <img src={images.Logo_1} alt="" />
                <img src={images.Logo_2} alt="" />
                <img src={images.Logo_3} alt="" />
                <img src={images.Logo_4} alt="" />
                <img src={images.Logo_5} alt="" />

            </div>
            <div className="logos-slide">
                <img src={images.Logo_1} alt="" />
                <img src={images.Logo_2} alt="" />
                <img src={images.Logo_3} alt="" />
                <img src={images.Logo_4} alt="" />
                <img src={images.Logo_5} alt="" />

            </div>
        </div>
    )
}

export default Logo