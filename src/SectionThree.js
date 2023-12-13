import bg from "./LandingPagePictures/about-background.png";
import plate from './LandingPagePictures/about-background-image.png';
import './SectionThree.css';

const SectionThree = () => {
    return ( 
        <div className="sec3">
            <img src={bg} className="bg" />
            <div className="container">
                <div className="plate">
                    <img src={plate} />
                </div>
                <div className="texts">
                    <p>About</p>
                    <h2>Food Is An Important Part Of A Balanced Diet</h2>
                    <h3 className="first">Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</h3>
                    <h3 className="second">Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</h3>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    );
}
 
export default SectionThree;