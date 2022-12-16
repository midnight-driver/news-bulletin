import { lifestyle } from '../../dummyData';
import './Lifestyle.css'
import Slider from "react-slick";
import TopHeading from "../topHeading/TopHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
function Lifestyle() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            row:4,
          },
        },
      ],
    };

    return (
      <>
        <div className="popularPost life">
          <TopHeading className="headTop" title="Life Style" />
          <div className="content">
            <Slider {...settings}>
              {lifestyle.map((val) => {
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

export default Lifestyle
