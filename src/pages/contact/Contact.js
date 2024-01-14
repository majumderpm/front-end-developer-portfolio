import React from 'react';
import square1 from '../../assets/images/shape/square1.png';
import './contact.css';
import { CiUser, CiMail, CiLock } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoIosSend } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FiMessageCircle } from "react-icons/fi";
import { TbMapPinFilled } from "react-icons/tb";
import { useForm, ValidationError } from '@formspree/react';
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';




const Contact = () => {

    const [state, handleSubmit] = useForm("mnqkaqpg");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <>
            <div className="section section-signup contactNow">
                <div className="container">
                    <div className="squares square-1 "></div>
                    <div className="squares square-2 "></div>
                    <div className="squares square-3 "></div>
                    <div className="squares square-4 "></div>
                    <div className="row row-grid justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <h3 className="title">Contact With Me</h3>
                            <p className="body2">I am available for freelance work. Connect with me via and linkdin in to my account.</p>
                            <ul>
                                <li><Link to='mailto:pm19971118@gmail.com'><IoMailOutline />pm19971118@gmail.com</Link></li>
                                <li><Link to='tel:+91xxxxxxxxxx'><HiOutlinePhone /> +91 xxxxxxxxxxx</Link></li>
                                <li><TbMapPinFilled />Ranaghat, Nadia West Bengal, PIN: 741201</li>
                            </ul>

                        </div>
                        <div className="col-lg-6 mb-lg-auto">
                            <div className="card card-register">
                                <div className="card-header">
                                    {/* <img className="card-img" src={square1} alt="Card image" /> */}
                                    <h4 className="card-title">Let’s Talk</h4>
                                </div>
                                <div className="card-body">


                                    <form className="form"  onSubmit={handleSubmit}>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <CiUser />
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" name='namme' autoComplete='off' required placeholder="Full Name" />
                                            <ValidationError
                                                prefix="Namme"
                                                field="namme"
                                                errors={state.errors}
                                            />
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <CiMail />
                                                </div>
                                            </div>
                                            <input type="email" name='email' autoComplete='off' required placeholder="Email" className="form-control" />
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                            />
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <HiOutlineDevicePhoneMobile />
                                                </div>
                                            </div>
                                            <input type="number" name='number' autoComplete='off' required className="form-control" placeholder="Number" />
                                            <ValidationError
                                                prefix="Number"
                                                field="number"
                                                errors={state.errors}
                                            />
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <FiMessageCircle />
                                                </div>
                                            </div>
                                            <textarea rows={4} className="form-control" name='massage' autoComplete='off' required placeholder='Message'></textarea>
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={state.errors}
                                            />
                                        </div>

                                    </form>
                                </div>
                                <div className="card-footer">
                                    <button typeof='submit' className=' main_btn' disabled={state.submitting}>send massege <IoIosSend />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;