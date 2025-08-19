import React from 'react'
import './Services.css'
import images from '../../constants/images'
import Accordion from '../../components/Accordion/Accordion'

const Services = () => {
    return (
        <div className="services__main section__padding">
            <div className="services__container">
                <div className="services__top">
                    <h2><span>Our Comprehensive</span><span style={{ color: "var(--color-blue)" }}>Services</span></h2>
                    <p><span>Our range of comprehensive medical services has been</span><span> carefully designed to cater to your various healthcare</span><span>needs,</span></p>
                </div>

                <div className="services__bottom">
                    <div className="services__accordion">
                        <Accordion title="Primary Care" content="LifeCare's primary care services go beyond the basics to offer a comprehensive healthcare solution for individuals and families. Whether it's routine check-ups, preventive screenings, or ongoing health maintenance, we focus on creating a comfortable and trusting relationship between you and your healthcare provider. We’re committed to understanding your health history, lifestyle, and unique needs to provide you with personalized, effective care." />
                        <Accordion title="Specialist Referrals" content="Navigating the world of specialized medicine can be daunting, but with LifeCare, you're never alone. Our referral services connect you with leading specialists in various fields like cardiology, orthopedics, and more. We facilitate a smooth transition from your primary care provider to the specialist, ensuring that your health records and treatment plans are meticulously coordinated for optimal care." />
                        <Accordion title="Diagnostics & Labs" content="Our state-of-the-art diagnostics and lab facilities set us apart. We offer a wide range of services, from blood tests and urinalysis to advanced imaging studies. Quick and accurate results are crucial for effective treatment, and we pride ourselves on our efficiency and precision. Our healthcare professionals take the time to explain the results and your options, empowering you to make informed decisions about your healthcare journey." />
                        <Accordion title="Telemedicine Services" content="Modern healthcare is about convenience and accessibility, and our telemedicine services epitomize these qualities. With secure video consultations, phone calls, or chat support, you can now connect with experienced healthcare providers without leaving your home. This service is especially beneficial for follow-up appointments, second opinions, and minor issues that don't require a physical examination." />
                        <Accordion title="Emergency Response" content="Emergencies are unpredictable, but our response isn't. Our emergency response teams are trained to act swiftly and effectively to provide immediate care in critical situations. Whether you're dealing with a sudden illness, accident, or any other urgent matter, our priority is to stabilize your condition and provide expert medical attention as quickly as possible." />
                        <Accordion title="Health Management" content="Living a healthy life requires more than just treating diseases; it requires proactive health management. Our programs are designed to focus on prevention, early detection, and lifestyle modification. Tailored to your specific needs, these plans integrate nutrition, exercise, mental well-being, and regular check-ups to help you achieve and maintain optimal health over the long term." />

                    </div>
                    <div className="services__image">
                        <img src={images.accord_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services