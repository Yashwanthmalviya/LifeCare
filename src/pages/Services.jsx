import React, { useEffect } from "react";
import ServicesBanner from "../containers/ServicesBanner/ServicesBanner";
import Cta from "../components/Cta/Cta";
import Testimonials from "../containers/Testimonials/Testimonials";
import Booking from "../containers/Booking/Booking";
import ServicesValues from "../containers/ServicesValues/ServicesValues";



const Services = () => {

    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );
        elements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <>
            <section className="fade-in"><ServicesBanner /></section>
            <section className="fade-in"><ServicesValues /></section>
            <section className="fade-in"><Booking /></section>
            <section className="fade-in"><Testimonials /></section>
            <section className="fade-in"><Cta></Cta></section>
        </>
    );
};

export default Services;
