import React, { useState } from 'react';
import './Accordion.css';
import images from '../../constants/images';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion_container">
            <div
                className="accordion_header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3>{title}</h3>
                <img
                    src={isOpen ? images.button2 : images.button}
                    alt="toggle"
                    className={`accordion_icon ${isOpen ? 'rotate' : ''}`}
                />
            </div>

            <div className={`accordion_content ${isOpen ? 'open' : ''}`}>
                {content}
            </div>
        </div>
    );
};

export default Accordion;
