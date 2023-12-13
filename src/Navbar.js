import './Navbar.css';
import Logo from "./LandingPagePictures/Logo.svg"

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <div className="logo">
                <img src={Logo}/>
            </div>
            <div className="tags">
                <a>Home</a>
                <a>About</a>
                <a>Testimonials</a>
                <a>Contact</a>
                <button>Booking Now</button>
            </div>
        </div>
    );
}
 
export default Navbar;