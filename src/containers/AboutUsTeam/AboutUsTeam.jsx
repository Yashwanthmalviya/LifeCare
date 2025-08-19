import React from 'react'
import './AboutUsTeam.css'
import images from '../../constants/images'


const AboutUsTeam = () => {
    return (
        <div className="team__container section__padding">
            <div className="team__main">
                <div className="team-text">
                    <h2>Our Team</h2>
                </div>

                <div className="team__cards">
                    <div className="team-content">
                        <div className="team-content-image">
                            <img src={images.team1} alt="" />
                        </div>
                        <div className="card-text">
                            <h1 className='name'>Greta Mae Evans</h1>
                            <p>Expert Care</p>
                        </div>

                        <div className="team-content-icons">
                            <img src={images.iconoir_facebook} alt="" />
                            <img src={images.iconoir_instagram} alt="" />
                            <img src={images.iconoir_twitter} alt="" />
                        </div>
                    </div>
                    <div className="team-content">
                        <div className="team-content-image">
                            <img src={images.team2} alt="" />
                        </div>
                        <div className="card-text">
                            <h1 className='name'>Pedro Fernandes</h1>
                            <p>Expert Care</p>
                        </div>

                        <div className="team-content-icons">
                            <img src={images.iconoir_facebook} alt="" />
                            <img src={images.iconoir_instagram} alt="" />
                            <img src={images.iconoir_twitter} alt="" />
                        </div>
                    </div>
                    <div className="team-content">
                        <div className="team-content-image">
                            <img src={images.team3} alt="" />
                        </div>
                        <div className="card-text">
                            <h1 className='name'>Aaron Loeb</h1>
                            <p>Expert Care</p>
                        </div>

                        <div className="team-content-icons">
                            <img src={images.iconoir_facebook} alt="" />
                            <img src={images.iconoir_instagram} alt="" />
                            <img src={images.iconoir_twitter} alt="" />
                        </div>
                    </div>
                    <div className="team-content">
                        <div className="team-content-image">
                            <img src={images.team4} alt="" />
                        </div>
                        <div className="card-text">
                            <h1 className='name'>Rachelle Beaudry</h1>
                            <p>Expert Care</p>
                        </div>

                        <div className="team-content-icons">
                            <img src={images.iconoir_facebook} alt="" />
                            <img src={images.iconoir_instagram} alt="" />
                            <img src={images.iconoir_twitter} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsTeam