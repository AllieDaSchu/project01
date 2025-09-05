import '../style/card.css'
import myImage from '../assets/yellow-shirt.jpg'

const Card2 = () => {
    const title = "Jessica Ma";
    return (<div className="card">
        <img src={myImage} />
        <h2 className="person-name">{title}</h2>
        <p className="card-content">Card content goes here</p>
    </div>)
}

export default Card2;