import '../style/card.css'
import myImage from '../assets/grey-jacket.jpg'

const Card1 = () => {
    const title = "Bob Smith";
    return (<div className="card">
        <img src={myImage} />
        <h2 className="person-name">{title}</h2>
        <p className="card-content">Card content goes here</p>
    </div>)
}

export default Card1;