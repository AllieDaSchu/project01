import '../style/card.css'
import myImage from '../assets/green-shirt.jpg'

const Card3 = () => {
    const title = "Harrold Williams";
    return (<div className="card">
        <img src={myImage} />
        <h2 className="person-name">{title}</h2>
        <p className="card-content">Card content goes here</p>
    </div>)
}

export default Card3;