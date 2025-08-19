import React from 'react'
import './AboutUsHero.css'
import images from '../../constants/images'

const AboutUsHero = () => {
    return (
        <div className="ab-hero__main section__padding">
            <div className="ab-hero__container">
                <div className="ab-hero__left">
                    <div className="ab-hero__heading">
                        <h1>Experience Premium Healthcare </h1>
                        <span style={{ color: "var(--color-blue)" }}>Quality Services You Can Rely On</span>
                    </div>
                    <p>Our team is comprised of healthcare professionals who are leaders in their respective fields. With a focus on continuous education and staying abreast of the latest advancements in healthcare, we are committed to bringing our patients the very best in medical care</p>
                    <div className="ab-hero__button">
                        <button type="button">Contact Us</button>
                    </div>
                </div>
                <div className="ab-hero__right">
                    <div className="ab-hero__image">
                        <img src={images.AboutUsHeroImage} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutUsHero