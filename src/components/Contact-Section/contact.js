// In this section there is a contact form, which can be used to 
//contact us anonymously or with your name, and to give us feedback, suggestions for improvement etc.
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'

export default function contact() {
    const [alert, setAlert] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_i52o6nq', 'template_m7s278d', form.current, 'iqZe7SxUE-YGI2GrS')
            .then((result) => {
                console.log(result.text);
                setAlert(true);
                document.getElementById('contact-form').reset();
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section id="contact" className="contact beige-section" >
            <div className="container-fluid">
                <h1 className="black-text-color">Contact us</h1>
                <hr className="line" />
                <p className="grey-text-color">Bavaria, Germany</p>
                <div id="alert" className="alert alert-success alert-dismissible fade show"
                    role="alert"
                    style={{ display: alert ? 'block' : 'none' }}>
                    <strong>Thank you for contacting us!</strong>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="contact-div">
                    <form id="contact-form" ref={form} onSubmit={sendEmail}>
                        <div class="contact-form box-shadow">
                            <div class="contact-input">
                                <input name="subject" type="text" id="subject" class="form-control" placeholder="Subject" />
                            </div>
                            <div class="contact-input">
                                <input name="name" type="text" id="name" class="form-control" placeholder="Name" />
                            </div>
                            <div class="contact-input">
                                <input name="email" type="email" id="email" class="form-control" placeholder="E-Mail" />
                            </div>
                            <div class="contact-input">
                                <textarea name="message" id="message" class="form-control" placeholder="Message *"
                                    required="required"></textarea>
                            </div>
                        </div>
                        <div class="kontakt-input">
                            <button class="btn btn-lg btn-success" type="submit">Contact Us</button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}
