import './SectionEight.css'
import a from './LandingPagePictures/Vector5.png'
import b from './LandingPagePictures/Vector (1).png'
import c from './LandingPagePictures/Vector (2).png'
import d from './LandingPagePictures/Vector (3).png'

const SectionEight = () => {
    return ( 
        <div className="cont8">
            <div className="sm">
                <h1 className="title8">
                    FOODIE
                </h1>
                <div className="logo8">
                    <img src={a} className="s8" />
                    <img src={b} className="s8" />
                    <img src={c} className="s8" />
                    <img src={d} className="s8" />
                </div>
            </div>
            <div className="infos">
                <div className="terms">
                <p className="mt">Quality</p>
                <p className="mt">Help</p>
                <p className="mt">Share</p>
                <p className="mt">Careers</p>
                <p className="mt">Work</p>
                <p className="mt">Testimonials</p>
                </div>
                <div className="contacts8">
                <p className="mt">244-5333-7783</p>
                <p className="mt">hello@food.com</p>
                <p className="mt">press@food.com</p>
                <p className="mt">contact@food.com</p>
                </div>
                <div className="conditions">
                <p className="mt">Terms & Conditions</p>
                <p className="mt">Privacy Policy</p>
                </div>
            </div>
        </div>
    );
}
 
export default SectionEight;