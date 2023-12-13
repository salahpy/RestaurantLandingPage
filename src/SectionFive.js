import pc from "./LandingPagePictures/choose-image.png"
import truck from "./LandingPagePictures/delivery-image.png"
import eat from "./LandingPagePictures/pick-meals-image.png"
import Etiq from './Etiq'; 
import './SectionFive.css';

const SectionFive = () => {
    return ( 
        <div className="etiqs">
            <Etiq image={eat} content="Pick Meals"/>
            <Etiq image={pc} content="Choose How Often"/>
            <Etiq image={truck} content="Fast Deliveries"/>
        </div>
     );
}
 
export default SectionFive;