import './Card.css';
import Stars from './Stars';

function Card(props) {
    const {img,name,hits} = props.data;

    return (
        <div className="card">
            <div className="card-img"><img src={img} alt={name}/></div>
            <div className="card-desc">
                <div className="card-desc-share"></div>
                <div className="card-desc-name"><h3>{name}</h3></div>
                <div className="card-desc-hits"><Stars count={hits} /></div>
                <div className="card-desc-btns"><button className="btn-buy">Купить</button></div>
            </div>
        </div>
    )
}

export default Card;