import React from "react";
import "./ServicesValues.css";
import images from "../../constants/images";

const ServicesValues = () => {
    const services = [
        {
            id: 1,
            img: images.services1,
            tag: "GENERAL HEALTH",
            title: "Primary Care",
            text: "LifeCare's primary care services go beyond the basics to offer a comprehensive healthcare solution for individuals and families.",
        },
        {
            id: 2,
            img: images.services2,
            tag: "SPECIALIZED CARE",
            title: "Cardiology",
            text: "Expert cardiac consultations and treatments with advanced medical technology and personalized care plans.",
        },
        {
            id: 3,
            img: images.services3,
            tag: "DIAGNOSTICS",
            title: "Laboratory Tests",
            text: "Accurate and quick diagnostics services with modern equipment to ensure the best treatment outcomes.",
        },
        {
            id: 4,
            img: images.services4,
            tag: "WELLNESS",
            title: "Nutrition Plans",
            text: "Personalized diet and nutrition consultations to keep you and your family healthy and energized.",
        },
        {
            id: 5,
            img: images.services5,
            tag: "CHILD CARE",
            title: "Pediatrics",
            text: "Dedicated healthcare services for infants, children, and adolescents with experienced pediatricians.",
        },
        {
            id: 6,
            img: images.services6,
            tag: "EMERGENCY",
            title: "24/7 Care",
            text: "Round-the-clock emergency services to ensure immediate attention during critical situations.",
        },
    ];

    return (
        <div className="services-values section__padding">
            <div className="services-values-container">
                {services.map((service) => (
                    <div className="services-card" key={service.id}>
                        <img
                            src={service.img}
                            alt={service.title}
                            className="services-card-img"
                        />
                        <div className="services-card-body">
                            <span className="services-card-tag">{service.tag}</span>
                            <h3 className="services-card-title">{service.title}</h3>
                            <p className="services-card-text">{service.text}</p>
                            <button className="services-card-btn">Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesValues;
