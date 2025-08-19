import React from 'react'
import './Hero.css'
import images from '../../constants/images'
import DisButton from '../../components/DisButton/DisButton'
import { MdOutlineLocalPhone } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { color } from 'framer-motion';


const Hero = () => {
    return (
        <div className="hero__container section__padding">
            <div className="hero__header">
                <div className="hero__text">
                    <div className='hero__heading '>
                        <h1>Experience Premium Healthcare
                        </h1>
                        <h1 style={{ color: 'var(--color-blue)' }}>  Quality Services You Can Rely On
                        </h1>
                    </div>
                    <div className="hero__p">
                        <p >
                            Experience exceptional healthcare tailored to your needs.
                        </p>
                        <p>
                            Trust LifeCare for compassionate, quality services that prioritize your wellbeing.
                        </p>
                    </div>
                </div>

                <div className="hero__image">
                    <div className="hero__image-container">
                        <DisButton styles={{ backgroundColor: "var(--color-black)" }} icon={MdOutlineLocalPhone} t1="Emergency Call" t2="+123 456 7890" />
                        <DisButton icon={FiClock} t1="Working Hours" t2="9am - 8pm" style={{ color: '#843283' }} />
                        <DisButton icon={MdOutlineLocalPhone} t1="Book an appointment" t2="Book Now" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero