import '../style/card.css'

const Card = ({name, title, description, img}) => {
    return (<div className="column">
        <div className="card">
            <img src={img} />
            <h2 className="person-name">{name}</h2>
            <h3 className="title">{title}</h3>
            <p className="card-content">{description}</p>
        </div>
    </div>)
}

export default Card;