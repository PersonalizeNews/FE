import React from 'react';
import './css/ContactForm.css';

const ContactForm = () => {
  return (
      <section className="contact">
        <h1>Contact</h1>
        <div className='contact-address'>
          <h2>address</h2>
          <p>동국 대학교</p>
        </div>

        <div className='contact-open'>
          <h2>opening hours</h2>
          <p>sunday closed</p>
        </div>

        <div>
          <h2>contact us</h2>
          <form>
            <div>
              <label htmlFor="name">name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div>
              <label htmlFor="email">email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div>
              <label htmlFor="message">message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>

            <button type="submit">submit</button>
          </form>
        </div>
      </section>
  );
};

export default ContactForm;
