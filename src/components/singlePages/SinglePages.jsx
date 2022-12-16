import "./SinglePages.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Side from '../../pages/sideContent/side/Side'
import {
  faFacebook,
  faPinterest,
  faTwitter,
  faInstagram,
  faYoutube,
  
} from "@fortawesome/free-brands-svg-icons";
import Header from '../../components/header/Header'
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import './SinglePages.css'
import SinglePagesSlider from "./SinglePagesSlider/SinglePagesSlider";
import { hero } from "../../dummyData";
function SinglePages() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    const item = hero.find((item) => item.id === parseInt(id));
    window.scrollTo(0, 0);
    if (item) {
      setItem(item);
    }
  }, [id]);
  return (
    <div>
      <Header/>
      {item ? (
        <main>
          <SinglePagesSlider />
            <div className="homeContainer">
              <div className="mainContent details">
                <h1 className="title">{item.title}</h1>
                <div className="author">
                  <span>by</span>
                  <img src={item.authorImg} alt="" />
                  <p>{item.authorName}</p>
                  <label>{item.time}</label>
                </div>
                <div className="social">
                  <div className="socBox">
                    <FontAwesomeIcon className="iLast" icon={faFacebook} />
                  </div>
                  <div className="socBox">
                    <FontAwesomeIcon className="iLast" icon={faPinterest} />
                  </div>
                  <div className="socBox">
                    <FontAwesomeIcon className="iLast" icon={faTwitter} />
                  </div>
                  <div className="socBox">
                    <FontAwesomeIcon className="iLast" icon={faInstagram} />
                  </div>
                  <div className="socBox">
                    <FontAwesomeIcon className="iLast" icon={faYoutube} />
                  </div>
                </div>
                <div className="desktop">
                  {item.desc.map((val) => {
                    return (
                      <>
                        <p>{val.para1}</p>
                        <p>{val.para2}</p>
                      </>
                    );
                  })}
                </div>
                <img src={item.cover} alt=""  className='cover'/>
                <div className="descbot">
                  {item.details.map((data) => {
                    return (
                      <>
                        <h1>{data.title}</h1>
                        <p>{data.para1}</p>
                      </>
                    );
                  })}
                </div>
                <div className="quote">
                  <FontAwesomeIcon className="iLast" icon={faQuoteLeft} />
                  {item.details.map((data) => {
                    return (
                      <>
                        <h1>{data.quote}</h1>
                      </>
                    );
                  })}
                </div>
                <div className="desctop">
                  {item.details.map((data) => {
                    return (
                      <>
                        <p>{data.para2}</p>
                        <p>{data.para3}</p>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="sideContent">
                <Side />
              </div>
            </div>
        </main>
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
}

export default SinglePages;
