import React, { useEffect } from "react";
import Hero from "../containers/Hero/Hero";
import Logo from "../containers/Logos/Logo";
import Values from "../containers/values/Values";
import Services from "../containers/Services/Services";
import Testimonials from "../containers/Testimonials/Testimonials";
import Booking from "../containers/Booking/Booking";
import Cta from "../components/Cta/Cta";
import GridDemo from "../containers/GridDemo/GridDemo";

const Home = () => {

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
            <section className="fade-in"><Hero /></section>
            <section className="fade-in"><Logo /></section>
            <section className="fade-in"><Values /></section>
            <section className="fade-in"><Services /></section>
            <section className="fade-in"><Testimonials /></section>
            <section className="fade-in"><Booking /></section>
            <section className="fade-in"><Cta /></section>
            <section><GridDemo /></section>
        </>
    );
};

export default Home;
