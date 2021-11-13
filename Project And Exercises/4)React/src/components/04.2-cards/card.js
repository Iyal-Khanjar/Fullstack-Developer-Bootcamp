import './style.css'
function Card({image,title,description}){
    return (
        <div className="card">
            <img alt="image" src={image} />
            <p>{title}</p>
            <p>{description}</p>
            <a href="/">SHARE</a>
            <a href="/">EXPLORE</a>
        </div>
    )
}
export default Card