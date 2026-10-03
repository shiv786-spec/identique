import "./team.css"
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { CgSmartHomeWashMachine } from "react-icons/cg";



function Team() {
    return (
        <>
            <div className="team-container">

                <div className="team-box">
                    <h3>Who we are?</h3>
                    <p>The most important thing to us is <br /> building products people love.</p>

                    <div className="team-grid-con">
                        <div className="team-grid-box">
                            <div className="img-box"><img src="/profile1.jpg" alt="" /></div>
                            <div className="team-content-box">
                                <div className="team-name">
                                    <h4>Michael Goltsman</h4>
                                    <p>Chief Executive Officer</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet, adipiscing elit. Maecenas neque diam, luctus at laoreet
                                    in, auctor ut tellus. Etiam enim lacus, ornare et tempor et, rhoncus sem.</p>
                                <div className="team-icons">
                                    <FaFacebookF />
                                    <TiSocialLinkedin />
                                    <CgSmartHomeWashMachine />

                                </div>
                            </div>
                        </div>
                        <div className="team-grid-box">
                            <div className="img-box"><img src="/profile2.jpg" alt="" /></div>
                            <div className="team-content-box">
                                <div className="team-name">
                                    <h4>Aaron James Fox</h4>
                                    <p>Chief Executive Officer</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet, adipiscing elit. Maecenas neque diam, luctus at laoreet
                                    in, auctor ut tellus. Etiam enim lacus, ornare et tempor et, rhoncus sem.</p>
                                <div className="team-icons">
                                    <FaFacebookF />
                                    <TiSocialLinkedin />
                                    <CgSmartHomeWashMachine />

                                </div>
                            </div>
                        </div>
                        <div className="team-grid-box">
                            <div className="img-box"><img src="/profile3.jpg" alt="" /></div>
                            <div className="team-content-box">
                                <div className="team-name">
                                    <h4>Paul Getter</h4>
                                    <p>Chief Executive Officer</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet, adipiscing elit. Maecenas neque diam, luctus at laoreet
                                    in, auctor ut tellus. Etiam enim lacus, ornare et tempor et, rhoncus sem.</p>
                                <div className="team-icons">
                                    <FaFacebookF />
                                    <TiSocialLinkedin />
                                    <CgSmartHomeWashMachine />

                                </div>
                            </div>
                        </div>
                        <div className="team-grid-box">
                            <div className="img-box"><img src="/profile4.jpg" alt="" /></div>
                            <div className="team-content-box">
                                <div className="team-name">
                                    <h4>Sergey Kvasov</h4>
                                    <p>Chief Executive Officer</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet, adipiscing elit. Maecenas neque diam, luctus at laoreet
                                    in, auctor ut tellus. Etiam enim lacus, ornare et tempor et, rhoncus sem.</p>
                                <div className="team-icons">
                                    <FaFacebookF />
                                    <TiSocialLinkedin />
                                    <CgSmartHomeWashMachine />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;