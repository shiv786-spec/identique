
import './nav.css'
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
    return (
        <>
            <nav>
                <div className="logo">
                    <h2>IDENTIC. <span>INTERACTIVE</span></h2>
                </div>
                <ul className='ul'>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>PROJECTS</li>
                    <li>PORTFOLIO</li>
                    <li>CONTACT</li>
                    <li>BLOG</li>
                    <li>FEATURE</li>
                </ul>
                <GiHamburgerMenu className='icon'/>
            </nav>

        </>
    )
}
export default Navbar;