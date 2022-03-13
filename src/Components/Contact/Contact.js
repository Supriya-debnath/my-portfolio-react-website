import React from 'react';
import './Contact.css';


const Contact = () => {
    return (

       
      <section className='contact'>
        <div className="contactContainer py-5">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="head text-center text-white py-3">
                        <h3>Contact Me</h3>
                        </div>
                      </div>
                    </div>

                    <div className="form p-3">
                      <div className="form-row my-5">
                        <div className="col-lg-6">
                          <input type="text" className='effect-1' placeholder='First Name' />
                          <span className='Focus-border'></span>
                          </div>
                        <div className="col-lg-6">
                          <input type="text" className='effect-1' placeholder='Last Name' />
                          <span className='Focus-border'></span>
                          </div>
                        </div>

                        <div className='form-row'>
                            <div className="col-lg-6">
                              <input type="text" className='effect-1' placeholder='Email Address' />
                              <span className='Focus-border'></span>
                            </div>
                            <div className="col-lg-6">
                              <input type="text" className='effect-1' placeholder='Phone Number' />
                              <span className='Focus-border'></span>
                            </div>
                        </div>

                        <div className='form-row pt-5'>
                          <div className='col-lg-12'>
                              <input type="text" className='effect-1' placeholder='Type Your Message' />
                              <span className='Focus-border'></span>
                          </div>
                        </div>
                        <div className="form-row pt-5">
                          <div className="col-lg-6">
                            <p> <input type='checkbox' /> I'm not a Robot </p>
                          </div>
                          <div className="col-lg-4">
                            <button className='btn11'>Send Message</button>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>























        // <section className='contact_section'>
        //   <div className='contact_container'>
        //     <h2>Contact Me</h2>
        //   <div className='row100'>
        //     <div className='col'>
        //       <div className='inputBox'>
        //         <input type="text" name="" required="required"></input>
        //           <span className='text'>First Name</span>
        //           <span className='line'></span>
        //       </div>
        //     </div>
        //     <div className='col'>
        //       <div className='inputBox'>
        //         <input type="text" name="" required="required"/>
        //           <span className='text'>Last Name</span>
        //           <span className='line'></span>
        //       </div>
        //     </div>
        //   </div>
        //   <div className='row100'>
        //     <div className='col'>
        //       <div className='inputBox'>
        //         <input type="text" name="" required="required"/>
        //           <span className='text'>Enter Email</span>
        //           <span className='line'></span>
        //       </div>
        //     </div>
        //     <div className='col'>
        //       <div className='inputBox'>
        //         <input type="text" name="" required="required"/>
        //           <span className='text'>Enter Mobile</span>
        //           <span className='line'></span>
        //       </div>
        //     </div>
        //   </div>


        //   <div className='row100'>
        //     <div className='col'>
        //       <div className='inputBox textarea'>
        //         <textarea required="required"></textarea>
        //         <span className='text'>Type Your Message here</span>
        //           <span className='line'></span>
        //       </div>
        //     </div>
        //   </div>
        //   <div className='row100'>
        //     <div className='col'>
        //       <input type="submit" value="send"></input>
        //     </div>
        //   </div>
        //   </div>
        // </section>
    );
};

export default Contact;