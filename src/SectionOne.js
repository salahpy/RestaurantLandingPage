import background from "./LandingPagePictures/home-banner-background.png" 
import './SectionOne.css';

const SectionOne = () => {
    return ( 
        <div className="sec">
            <img className="background" src={background} />
        </div>
    );
}
 
export default SectionOne;