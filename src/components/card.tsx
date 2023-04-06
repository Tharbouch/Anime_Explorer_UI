import { Link } from 'react-router-dom'
import { Cards } from '../interfaces/cards';

interface cardType {
    card: Cards;
}

const Card = ({ card }: cardType) => {
    return (
        <Link to={`/anime/${card.id}`} >
            <div className='card' key={card.id}>
                <div className='card-img'>
                    <img src={card.url} alt="" />
                </div>
                <div className="card-overlay">
                    <div className='card-title'>
                        <h3>{card.title}</h3>
                    </div>
                    <div className="card-description">
                        <p>{card.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;