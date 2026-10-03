import "./contact.css"
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
function Contact() {
    return (
        <>
            <div className="contact-container">
                <div className="contact-box">
                    <h3>Contact us</h3>
                    <p1>We bring a personal and effective <br /> approach to every project we work on.</p1>
                    <div className="contact-map">
                        <div className="map-box"> <iframe
                            src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_CODE"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe></div>
                        <div className="map-content">
                            <div className="contact-name">
                                <h3>Identiq Interactive Ltd.</h3>
                                <h5>Our location</h5>
                                <p>1133 Broadway, Suite 1124, New York, NY 10010</p>
                            </div>
                            <div className="contact-email">
                                <h5>E-mail and telephone</h5>
                                <p>welcome@identiq.com <br />
                                    +44 356.582.9846</p>
                            </div>
                            <div className="contact-icon">
                                <h5>We are social</h5>
                                <div className="con-icon">
                                    <CgSmartHomeWashMachine fontSize={"20px"}/>
                                    <FaFacebookF fontSize={"20px"}/>
                                    <FaLinkedinIn  fontSize={"20px"}/>
                                    <TiSocialGooglePlus fontSize={"20px"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-info">
                    <div className="contact-inp">
                    <input type="name" placeholder="NAME" />
                    <input type="email" placeholder=" ENTER YOUR EMAIL" />
                    </div>
                    <textarea name="message" id="" placeholder="MESSAGE"></textarea>
                    <div className="btn"><button>SEND MESSAGE</button></div>
                </div>
            </div>
        </>
    )
}

export default Contact;