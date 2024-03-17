import { useState } from 'react';
import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();

        const service_id = "service_ltflwgi";
        const template_id = "template_0nc55te";
        const publicKey = "nkWEKcfw2f_yqM2Xe";
        const template_params = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: "Santosh Kr",
        }

        emailjs.send(service_id, template_id, template_params, publicKey)
      .then((response) => {
        alert('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
    };

    return (
        <div className="main-content">
            <div className='contact'>
                <div className='content'>
                    <div className='content-child'>
                        <div className="header">
                            <h1>Reach Out to me!</h1>
                            <p>Discuss a Project or just want to say Hi? My inbox is open for all.</p>
                        </div>
                        <div className="bio-header">
                            <div className='bio'>
                                <div className='text'>
                                    <img src='src\component\Contact\user.png' alt="user" className='image' />
                                    <div>
                                        <h1>Name</h1>
                                        <p>Santosh Kumar Pasi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bio">
                                <div className='text'>
                                    <img src='src\component\Contact\location.png' alt="location" className='image' />
                                    <div>
                                        <h1>Address</h1>
                                        <p>Kolkate,India</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bio">
                                <div className='text'>
                                    <img src='src\component\Contact\email.png' alt="email" className='image' />                                  <div>
                                        <h1>Email</h1>
                                        <p>santoshkumarpasi464@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="connection">
                            <h1>Stay connected</h1>
                            <div className='links'>
                                <a href="https://www.linkedin.com/in/santosh-kumar-pasi-54a408226/" target="_blank">LinkedIn</a>
                                <a href="https://github.com/SantoshkrPasi" target='_blank'>Github</a>
                                <a href="https://web.telegram.org/k/#1116931871" target='_blank'>Telegraam</a>
                            </div>
                        </div>
                    </div>

                </div>
                <form className="form" onSubmit={sendEmail}>
                    <div className='form-content'>
                        <h3>Message Me</h3>
                        <div className='user'>
                            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='subject-message'>
                            <input type="text" className='subject' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                            <textarea type="text" className='message' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                    </div>
                    <button className='button'>Send Message</button>
                </form>
            </div>
        </div >
    )
}

export default Contact;
