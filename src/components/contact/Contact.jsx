import "./contact.scss"

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setSuccess(true)
                    setError(false)
                },
                () => {
                    setError(true)
                    setSuccess(false)
                },
            );
    };
    return (
        <div className="contact" id="Contact">
            <div className="textContainer">
                <h1>Contact Me</h1>
                <div className="item">
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
                    onSubmit={sendEmail}
                    aria-label="Contact form">
                    <input type="text" required placeholder="Name" name="name" aria-label="Your name" />
                    <input type="email" required placeholder="Email" name="email" aria-label="Your email" />
                    <textarea rows={8} placeholder="Message" name="message" aria-label="Your message" required />
                    <button type="submit">Submit</button>
                    {error && <p className="error-message" role="alert">Error sending message. Please try again.</p>}
                    {success && <p className="success-message" role="alert">Message sent successfully!</p>}
                </form>
            </div>
        </div>
    )
}
export default Contact