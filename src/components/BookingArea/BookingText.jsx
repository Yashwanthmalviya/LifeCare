import React from 'react'
import './BookingText.css'
import images from '../../constants/images'


const BookingText = ({ icon, title, content }) => {
    return (
        <div className="bookingtext__main">
            <div className='bookingtext__icon'>
                <div className="bookingtext__icon-container">
                    <img src={icon} alt="" className='icon' />
                </div>
                <div class="dashes">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className='bookingtext__content'>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default BookingText