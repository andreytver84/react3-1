import Star from "./Star";
import './Stars.css';

function Stars(props) {
    const star = props.count > 5 ? 0 : props.count;
    const newArray = new Array(star).fill(0);

    return (
        <ul className="card-body-stars u-clearfix">
            {
                newArray.map((h,i) => <Star key={i}  />)
            }
        </ul>
    )
}

Stars.defaultProps = {
    count: 0
};

export default Stars;