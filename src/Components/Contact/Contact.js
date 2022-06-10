import React, { useState } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';

import { useRef } from 'react';

const Contact = () => {

    const form = useRef();
    const [done,setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_nx7l9bf', 'template_anz3fru', form.current, 'XNd3LYFWdyISZNxBd')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  


  return (
    <div className='contact-form'>
        <div className='w-left'>
            <div className='awsome'>
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1'
                 style={{background:"ABF1FF94"}}>

                </div>

            </div>

        </div>

                <div className='c-right'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user.name" className='user' placeholder='Name'/>
                        <input type="email" name="user.name" className='user' placeholder='Email'/>
                        <textarea name="message" className='user'placeholder='Message'/>
                        <input type="submit" value="Send" className='button'/>
                        <span>{done && "Thanks for Contacting me!"}</span>
                    </form>

                </div>
    </div>
  )
}

export default Contact
