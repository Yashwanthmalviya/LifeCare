import React from 'react'
import './AboutUsCore.css'
import images from '../../constants/images'

const AboutUsCore = () => {
    return (
        <div className="core__container section__padding">
            <div className="core__main">
                <div className="core-text">
                    <h2>Our Core Values</h2>
                </div>
                <div className="aboutus-core-cards">
                    <div className="core-cards__content">
                        <div className="content__left">
                            <div className="content__left-icon">
                                <img src={images.valueicon1} alt="icon" />
                            </div>
                            <h3>Personalized Care</h3>
                            <p>Customized solutions tailored to your needs.</p>
                        </div>
                        <div className="content__right">
                            <p>At LifeCare, we believe in the power of individualized healthcare. Understanding that each patient comes with a unique set of needs and concerns, we strive to provide a customized care plan that respects your personal preferences and optimizes treatment outcomes. From the moment you walk into our facility, you'll notice our commitment to personalized healthcare that revolves around you.</p>
                        </div>
                    </div>


                    <div className="core-cards__content">
                        <div className="content__left">
                            <div className="content__left-icon">
                                <img src={images.valueicon2} alt="icon" />
                            </div>
                            <h3>Quality Assurance</h3>
                            <p>High standards ensure superior care.</p>
                        </div>
                        <div className="content__right">
                            <p>Quality isn't just a buzzword for us; it's the cornerstone of all we do. We adhere to the strictest clinical guidelines and employ state-of-the-art technologies to ensure you receive the best healthcare possible. From our front desk to our operating rooms, our focus on quality assurance aims to provide you with a consistently superior experience that you can trust.</p>
                        </div>
                    </div>


                    <div className="core-cards__content">
                        <div className="content__left">
                            <div className="content__left-icon">
                                <img src={images.valueicon3} alt="icon" />
                            </div>
                            <h3>Professional Excellence</h3>
                            <p>Experienced staff provide expert care.</p>
                        </div>
                        <div className="content__right">
                            <p>Our team is comprised of healthcare professionals who are leaders in their respective fields. With a focus on continuous education and staying abreast of the latest advancements in healthcare, we are committed to bringing our patients the very best in medical care. This dedication to professional excellence ensures that the treatment you receive is both cutting-edge and compassionate.</p>
                        </div>
                    </div>


                    <div className="core-cards__content">
                        <div className="content__left">
                            <div className="content__left-icon">
                                <img src={images.valueicon4} alt="icon" />
                            </div>
                            <h3>Empathy & Respect</h3>
                            <p>Your concerns matter to us.</p>
                        </div>
                        <div className="content__right">
                            <p>Healthcare is not just about diagnosing symptoms or prescribing medications; it's about treating people. That's why empathy and respect are at the core of our practice. We aim to create a welcoming, inclusive environment where patients of all backgrounds feel seen, heard, and respected. From the moment you make an appointment to the time you receive your treatment, our staff is committed to showing compassion and understanding, treating you as a valuable individual, not just a patient.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUsCore