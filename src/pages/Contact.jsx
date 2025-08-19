import React, { useEffect } from "react";
import ContactBanner from "../containers/ContactBanner/ContactBanner";
import ContactDetails from "../containers/ContactDetails/ContactDetails";

const Contact = () => {
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
            <section className="fade-in"><ContactBanner /></section>
            <section className="fade-in"><ContactDetails /></section>
        </>
    );
};

export default Contact;
