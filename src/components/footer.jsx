import "./footer.css"
function Footer(params) {
    return(
        <>
        <footer>
            <div className="footer-box">
                <h3>CONTACT US.</h3>
                <p>Email:shiv@gmail.com</p>
                <p>phone:+91 9938544232</p>
                <p>location:1133 mumbai ,lokhandwal, building 13 flat no 11. room no. 12</p>
            </div>
            <div className="footer-box">
                <h3>ABOUT IDENTIQ. INTRACTIVE</h3>
                <p>Being involved in every step of a project is the only way to guarantee <br /> it'll be a great one. Our developers 
                    work closely with our designers <br />
                     to make sure every product we ship is excellent, all the way through.</p>
            </div>
            <div className="footer-box">
                <h3>PHOTOSTREAM</h3>
            </div>
        </footer>
            <div className="footer-redline">
                <p>© 2013 Identiq Interactive Ltd. Powered by WordPress. Identiq Template by TVDA.</p>
            </div>
        </>
    )
}
export default Footer;