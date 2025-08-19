import React from 'react'
import './ContactDetails.css'
import images from '../../constants/images'

const ContactDetails = () => {
    return (
        <div className="details-container section__padding">
            <div className="details-main">

                <div className="details-left">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea className="details-message" placeholder="Message"></textarea>
                    <button>Book Now</button>
                </div>


                <div className="details-right">
                    <div className="details-right-heading">
                        <h1>Contact Details</h1>
                    </div>

                    <div className="right-content1">
                        <div className="right-icon">
                            <img src={images.map} alt="map" />
                        </div>
                        <div className="right-content">
                            <p>Address</p>
                            <h1>123 Wellness Avenue Suite 400 City, State, 558844</h1>
                        </div>
                    </div>

                    <div className="right-content1">
                        <div className="right-icon">
                            <img src={images.phone} alt="phone" />
                        </div>
                        <div className="right-content">
                            <p>Phone</p>
                            <h1>+1 (555) 123-4567</h1>
                        </div>
                    </div>

                    <div className="right-content1">
                        <div className="right-icon">
                            <img src={images.email} alt="email" />
                        </div>
                        <div className="right-content">
                            <p>Email</p>
                            <h1>info@lifecare.com</h1>
                        </div>
                    </div>

                    <div className="right-content1">
                        <div className="right-icon">
                            <img src={images.calendar} alt="calendar" />
                        </div>
                        <div className="right-content">
                            <p>Office Hours</p>
                            <h1>Monday - Friday: 9:00 AM - 5:00 PM</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails
