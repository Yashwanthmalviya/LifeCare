import React from 'react'
import './DisButton.css'

const DisButton = ({ styles, icon: Icon, t1, t2 }) => {
    return (
        <div className="dis__container" style={styles}>
            <div className="dis__icon"><Icon /></div>

            <div className="dis__text">
                <p className='dis1'>{t1}</p>
                <p className='dis2'>{t2}</p>
            </div>
        </div>
    )
}

export default DisButton