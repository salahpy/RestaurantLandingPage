import './SectionSix.css';
import p from "./LandingPagePictures/Ellipse.png"
import s from "./LandingPagePictures/Vector.png"

const SectionSix = () => {
    return ( 
        <div className="container6">
            <div className="qst">
                <h6 className="title">Testimonial</h6>
                <h1 className="bigtitle">What They Are Saying</h1>
                <p className="bs">Lorem ipsum dolor sit amet consectetur. Non tincidunt <br />
                magna non et elit. Dolor  turpis molestie dui <br />
                magnis facilisis at fringilla quam.</p>
            </div>

            <div className="comment">
                <img src={p} className="pdp" />
                <p className="bs">Lorem ipsum dolor sit amet consectetur. Non tincidunt <br />
                magna non et elit. Dolor  turpis molestie dui <br />
                magnis facilisis at fringilla quam.</p>
                <div className="stars">
                    <img src={s} className="str" />
                    <img src={s} className="str" />
                    <img src={s} className="str" />
                    <img src={s} className="str" />
                    <img src={s} className="str" />
                </div>
                <h3 className="name">John Doe</h3>
            </div>
        </div>
    );
}
 
export default SectionSix;