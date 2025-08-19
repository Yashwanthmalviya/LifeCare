
import React, { useEffect } from "react";
import AboutUsHero from "../containers/AboutUsHero/AboutUsHero";
import AboutUsCore from "../containers/AboutUsCore/AboutUsCore";
import AboutUsTeam from "../containers/AboutUsTeam/AboutUsTeam";
import AboutUsTestimonials from "../containers/AboutUsTestimonials/AboutUsTestimonials";
import Cta from "../components/Cta/Cta"

const About = () => {

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
            <section className="fade-in"><AboutUsHero /></section>
            <section className="fade-in"><AboutUsCore /></section>
            <section className="fade-in"><AboutUsTeam /></section>
            <section className="fade-in"><AboutUsTestimonials /></section>
            <section className="fade-in"><Cta /></section>
        </>
    );
};

export default About;
