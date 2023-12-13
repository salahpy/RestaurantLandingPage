import './Etiq.css';

const Etiq = (props) => {
    return ( 
        <div className="etiq">
            <img src={props.image} className="pic" />
            <p className="title">
            {props.content}
            </p>
            <p className="details">
            Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.
            </p>
        </div>
     );
}
 
export default Etiq;