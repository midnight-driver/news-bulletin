import "./hero.css";
import { Link } from 'react-router-dom'

function Card({
  item: { id, cover, catgeory, title, authorName, authorImg, time, desc },
}) {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <div className="text">
          <span className="catgeory">{catgeory}</span>
          <Link to={`/SinglePages/${id}`}>
            <h1 className="titleBg">{title}</h1>
          </Link>
          <div className="author flex">
            <span>by {authorName}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
