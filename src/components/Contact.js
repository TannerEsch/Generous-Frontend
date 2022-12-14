import React, { useState } from 'react';
import axios from 'axios';
import * as AiIcons from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiTwotoneEnvironment } from "react-icons/ai";
const { REACT_APP_SERVER_URL } = process.env;

const Contact = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newContact = {
            name: input.name,
            email: input.email,
            subject: input.subject,
            message: input.message
        }
        alert("Thank you for reaching out! We'll get back to you as soon as we can.")
        
        axios.post(`${REACT_APP_SERVER_URL}/users/:id/contact`, newContact)
    }


    return (
        <div>

            <section className="mb-4">


                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

                <p className="text-center w-responsive mx-auto mb-5">Have any questions or suggestions? Please do not hesitate to contact us directly. Leave your information below and we'll get back to you as soon as we can!</p>

                <div className="row">


                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                            <div className="row">


                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input onChange={handleChange} type="text" id="name" name="name" value={input.name} className="form-control"></input>
                                        <label for="name" className="">Your name</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input onChange={handleChange} type="text" id="email" name="email" value={input.email} className="form-control"></input>
                                        <label for="email" className="">Your email</label>
                                    </div>
                                </div>


                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input onChange={handleChange} type="text" id="subject" name="subject" value={input.subject} className="form-control"></input>
                                        <label for="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">


                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea onChange={handleChange} type="text" id="message" name="message" value={input.message} rows="2" className="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>


                        </form>

                        <div className="text-center text-md-left">
                            <a className="btn btn-primary" onClick={handleClick}>Send</a>
                        </div>
                        <div className="status"></div>
                    </div>



                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p><AiTwotoneEnvironment /></p>
                                <p>San Francisco, CA 94126, USA</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p><AiFillPhone /></p>
                                <p>678-999-8212</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p><AiIcons.AiFillMail /></p>
                                <p>contact@Generous.com</p>
                            </li>
                        </ul>
                    </div>


                </div>

            </section>

        </div>
    )
}

export default Contact;