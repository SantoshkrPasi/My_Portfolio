import React from 'react';


const Contact = () => {
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
                            <a href="http://">LinkedIn</a>
                            <a href="http://">Github</a>
                            <a href="http://">Telegraam</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className='form'>
                    <div className='form-content'>
                    <h3>Message Me</h3>
                        <div className='user'>
                           <input type="text" placeholder='Name' />
                           <input type="text" placeholder='Email' />
                        </div>
                        <div className='subject-message'>
                            <input type="text" className='subject' placeholder='Subject'/>
                            <textarea type="text" className='message' placeholder='Describe Project'/>
                        </div>
                    </div>
                    <button className='button'>Send Message</button>
                </div>
        </div>
        </div>
    )
}

export default Contact;
