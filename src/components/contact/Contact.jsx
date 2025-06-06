import "./contact.scss"

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {

    const ref = useRef()
    const formRef = useRef()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_sx7jjjd', 'template_1l0kz2j', formRef.current, {
                publicKey: 'BwHeOgag-MxEJzmsc',
            })
            .then(
                () => {
                    setSuccess(true)
                },
                (error) => {
                    setError(true)
                },
            );
    };
    return (
        <div
            ref={ref}
            className="contact" id="Contact">
            <div className="textContainer">
                <h1>Contact Me</h1>
                <div className="item"  >
                    <h2>Email :</h2>
                    <span><a href="mailto:ihzahmahendra6661@gmail.com"><b>ihzahmahendra6661@gmail.com</b></a></span>
                </div>
                <div className="item">
                    <h2>Location :</h2>
                    <span><b>Pontianak Barat, Indonesia</b></span>
                </div>
                <div className="item">
                    <h2>Phone :</h2>
                    <span><b>08-9692-070-270</b></span>
                </div>
            </div>
            <div className="formContainer">
                <form
                    ref={formRef}
                    onSubmit={sendEmail}>
                    <input type="text" required placeholder="Name" name="name" />
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea rows={8} placeholder="Message" name="message" />
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </form>
            </div>
        </div>
    )
}
export default Contact