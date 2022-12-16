import "./Music.css"
import TopHeading from "../topHeading/TopHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { popular } from "../../dummyData";

export default function Music() {
    const settings = {
      clasName: "centerSlider",
      centerMode: true,
      infinite: true,
      centerPadding: "0",
      slidesToShow: 1,
      speed: 500,
      rows: 2,

      slidesPerRow: 1,
     
    };
    return (
      <>
        <div className="music">
          <TopHeading title="Music News" />
          <div className="content">
            <Slider {...settings}>
              {popular
              .filter((val)=> val.catgeory=== 'fun')
              .map((val) => {
                return (
                  <div className="items">
                    <div className="box shadow flexSB">
                      <div className="images ">
                        <div className="img">
                          <img src={val.cover} alt="" />
                        </div>
                        <div className=" category catgeoryPopular">
                          <span>{val.catgeory}</span>
                        </div>
                      </div>

                      <div className="text">
                        <h1 className="title">
                          {val.title.slice(0, 40)}...
                        </h1>
                        <div className="date">
                          <FontAwesomeIcon
                            className="iLast"
                            icon={faCalendarDays}
                          />
                          <label>{val.date}</label>
                        </div>
                        <p className="desc">{val.desc.slice(0, 250)}...</p>
                        <div className="comment">
                          <FontAwesomeIcon className="iLast" icon={faShare} />
                          <label>Share /</label>
                          <FontAwesomeIcon className="iLast" icon={faComment} />
                          <label>{val.comments}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </>
    );
}
