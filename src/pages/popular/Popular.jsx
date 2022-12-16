import TopHeading from '../../components/topHeading/TopHeading';
import {popular} from '../../dummyData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faComment
  
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './popular.css'
import "slick-carousel/slick/slick-theme.css";
export default function Popular() {
  const settings = {
    clasName: "centerSlider",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    dots: false,

    slidesPerRow: 1,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows:4
        },
      },
    ],
  };
 
    return (
      <div>
        <div className="popular">
          <TopHeading title="Popular" />
          <div className="content">
            <Slider {...settings}>
              {popular.map((val) => {
                return (
                  <div className="items">
                    <div className="box shadow">
                      <div className="images row">
                        <div className="img">
                          <img src={val.cover} alt="" />
                        </div>
                        <div className="catgeoryPopular">
                          <span>{val.catgeory}</span>
                        </div>
                      </div>

                      <div className="textRow">
                        <h1 className="titlePopular">
                          {val.title.slice(0, 40)}...
                        </h1>
                        <div className="datePopular">
                          <FontAwesomeIcon
                            className="iLast"
                            icon={faCalendarDays}
                          />
                          <label>{val.date}</label>
                        </div>
                        <div className="commentPopular">
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
      </div>
    );
}

