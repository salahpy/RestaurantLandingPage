import Plate from './LandingPagePictures/home-banner-image.png';
import './SectionTwo.css';

const SectionTwo = () => {
    return ( 
        <div className="sec2">
            <div className="text">
                <h1>
                Your Favourite Food Delivered Hot & Fresh
                </h1>
                <h5>
                Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.
                </h5>
                <button>
                    Order Now
                </button>
            </div>
            <div className="pic">
                <img src={Plate} />
            </div>
        </div>
    );
}
 
export default SectionTwo;