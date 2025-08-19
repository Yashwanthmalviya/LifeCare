import React from 'react'
import './Booking.css';
import images from '../../constants/images'
import BookingText from '../../components/BookingArea/BookingText';
import DisButton from '../../components/DisButton/DisButton';
import { MdOutlineLocalPhone } from 'react-icons/md';



const Booking = () => {
    return (
        <div className="booking__main section__padding">
            <div className="booking__container">
                <div className="booking__header">
                    <h2><span style={{ color: "var(--color-blue)" }}>Booking</span> Made Simple</h2>
                </div>

                <div className="booking__bottom">
                    <div className="booking__image">
                        <img src={images.BookingImg} alt="" />
                    </div>


                    <div className="booking__content">
                        <div>
                            <BookingText icon={images.BookingIcon1} title="1. Register Online" content="Sign up with basic details." />
                            <BookingText icon={images.BookingIcon2} title="2. Explore Services" content="Find the right healthcare service." />
                            <BookingText icon={images.BookingIcon3} title="3. Choose a Provider" content="Select your preferred healthcare professional." />
                            <BookingText icon={images.BookingIcon4} title="4. Pick a Time" content="Choose a convenient appointment slot." />
                            <BookingText icon={images.BookingIcon5} title="5. Confirm Booking" content="Review and confirm your appointment." />

                        </div>
                        <div style={{ width: '100%' }}>
                            <DisButton icon={MdOutlineLocalPhone} t1="Book an appointment" t2="Book Now" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking