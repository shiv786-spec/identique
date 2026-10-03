import "./about.css"
function About() {
    return (
        <>
            <div className="home-container">
                <div className="about-box">
                    <div className="about-heading"><h2>About IDENTIQ. INTERACTIVE</h2></div>
                    <p>The most important thing to us is <br />
                        building products people love.</p>

                    <div className="about-con">
                        <div className="about-img"><img src="/office1.jpg" alt="" /></div>
                        <div className="about-content">
                            <h4>Our services</h4>
                            <div className="about-para">
                                <p>Interaction Design
                                    User Interface
                                    Identity & Branding
                                    Iconography
                                    Motion Graphics
                                    iPhone & iPad Apps
                                    Android Apps
                                    Responsive Web Apps</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-grid-con">
                        <div className="grid-box">
                            <h3>We are creative</h3>
                            <p>Lorem ipsum dolor sit amet, adipiscing elit. Maecenas neque diam, 
                                luctus at laoreet in, auctor ut tellus. Etiam enim lacus, ornare et tempor et, 
                                rhoncus sem. Duis tincidunt erat quam. Etiam placerat sapien elit.</p>
                        </div>
                        <div className="grid-box">
                            <h3>We are awesome</h3>
                            <p>Praesent rhoncus nunc vitae metus condimentum viverra. Fusce sed est orci, vel condimentum felis. Suspendisse ullamcorper vulputate sagittis. Maecenas neque diam, luctus at laoreet in, auctor ut tellus.</p>
                        </div>
                        <div className="grid-box">
                            <h3>We are innovation</h3>
                            <p>Duis tincidunt erat quam. Etiam placerat sapien elit. Sed augue lorem, dignissim eget bibendum vitae, scelerisque eget justo. Praesent rhoncus nunc vitae metus condimentum viverra.</p>
                        </div>
                        <div className="grid-box">
                            <h3>We are the best</h3>
                            <p>Lorem ipsum dolor sit amet, adipiscing elit. Maecenas neque diam, luctus at laoreet in, auctor ut tellus. Etiam enim lacus, ornare et tempor et, rhoncus sem. Fusce sed est orci, vel condimentum felis.</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default About;