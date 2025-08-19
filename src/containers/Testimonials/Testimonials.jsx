import React from 'react'
import './Testimonials.css'
import images from '../../constants/images';

const testimonials = [
    {
        text: "After a recent surgery, I turned to LifeCare for support during my recovery. They customized services to fit my unique needs, and their professional, compassionate staff truly made a difference in my healing journey. I can't recommend LifeCare enough.",
        name: "(Jane Pauline Costa, 45)",
        img: images.photo1,
    },
    {
        text: "LifeCare's telemedicine services have been a game-changer for me. I can consult top-notch doctors from the comfort of my home, saving time and reducing stress. An excellent service for busy people!",
        name: "(Cristina, 22)",
        img: images.photo2,
    },
    {
        text: "I trust LifeCare for my entire family's healthcare needs. Their team combines professionalism with a personal touch that's truly rare in healthcare today. The empathetic and respectful care they provide has made a world of difference to us. We're grateful for LifeCare.",
        name: "(David Sanchez, 30)",
        img: images.photo3,
    },
    {
        text: "The quality of care at LifeCare is unparalleled. Their health management program helped me get my diabetes under control. The professionals here genuinely care about your wellbeing.",
        name: "(Jessica Felico, 40)",
        img: images.photo4,
    },
    {
        text: "I had an emergency and needed quick attention. LifeCare's rapid response team was there within minutes, providing expert care that made a world of difference. Their efficiency and professionalism saved the day.",
        name: "(Ketut Susilo, 33)",
        img: images.photo5,
    },
    {
        text: "Their diagnostics and labs are the best I've experienced—fast, accurate, and hassle-free. The results were explained clearly, helping me make informed decisions about my healthcare.",
        name: "(Roberto, 43)",
        img: images.photo6,
    },
];

const Testimonials = () => {
    return (
        <div className="testimonials_main">
            <div className="testimonials_container section_padding  ">
                <div className="testimonials_header">
                    <h2>Hear the Words of <span style={{ color: "var(--color-blue)" }}>Satisfied Clients</span></h2>
                    <p>Our committed medical team is dedicated to delivering customized care and innovative medical solutions.</p>
                </div>

                <div className="testimonial_wrapper row1">
                    <div className="testimonial_slider">
                        {testimonials.map((t, index) => (
                            <div className="testimonial_card" key={index}>
                                <img src={t.img} alt={t.name} className="testimonial_img" />
                                <p className="testimonial_text">“{t.text}”</p>
                                <h4 className="testimonial_name">- {t.name}</h4>
                            </div>
                        ))}


                        {testimonials.map((t, index) => (
                            <div className="testimonial_card" key={`dup-${index}`}>
                                <img src={t.img} alt={t.name} className="testimonial_img" />
                                <p className="testimonial_text">“{t.text}”</p>
                                <h4 className="testimonial_name">- {t.name}</h4>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="testimonial_wrapper row2">
                    <div className="testimonial_slider">
                        {testimonials.map((t, index) => (
                            <div className="testimonial_card" key={index}>
                                <img src={t.img} alt={t.name} className="testimonial_img" />
                                <p className="testimonial_text">“{t.text}”</p>
                                <h4 className="testimonial_name">- {t.name}</h4>
                            </div>
                        ))}


                        {testimonials.map((t, index) => (
                            <div className="testimonial_card" key={`dup-${index}`}>
                                <img src={t.img} alt={t.name} className="testimonial_img" />
                                <p className="testimonial_text">“{t.text}”</p>
                                <h4 className="testimonial_name">- {t.name}</h4>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Testimonials