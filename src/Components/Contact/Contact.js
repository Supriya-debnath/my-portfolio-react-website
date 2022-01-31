import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <section className='contact_section'>
          <div className='contact_container'>
            <h2>Contact Me</h2>
          <div className='row100'>
            <div className='col'>
              <div className='inputBox'>
                <input type="text" name="" required="required"></input>
                  <span className='text'>First Name</span>
                  <span className='line'></span>
              </div>
            </div>
            <div className='col'>
              <div className='inputBox'>
                <input type="text" name="" required="required"/>
                  <span className='text'>Last Name</span>
                  <span className='line'></span>
              </div>
            </div>
          </div>
          <div className='row100'>
            <div className='col'>
              <div className='inputBox'>
                <input type="text" name="" required="required"/>
                  <span className='text'>Enter Email</span>
                  <span className='line'></span>
              </div>
            </div>
            <div className='col'>
              <div className='inputBox'>
                <input type="text" name="" required="required"/>
                  <span className='text'>Enter Mobile</span>
                  <span className='line'></span>
              </div>
            </div>
          </div>


          <div className='row100'>
            <div className='col'>
              <div className='inputBox textarea'>
                <textarea required="required"></textarea>
                <span className='text'>Type Your Message here</span>
                  <span className='line'></span>
              </div>
            </div>
          </div>
          <div className='row100'>
            <div className='col'>
              <input type="submit" value="send"></input>
            </div>
          </div>
          </div>
        </section>
    );
};

export default Contact;