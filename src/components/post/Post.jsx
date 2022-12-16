import './post.css'

import TopHeading from "../topHeading/TopHeading";
import { ppost } from "../../dummyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

export default function Post() {
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
          row: 4,
        },
      },
    ],
  };

  return (
    <>
      <div className="popularPost">
        <TopHeading className='headTop' title="Popular Post" />
        <div className="content">
          <Slider {...settings}>
            {ppost.map((val) => {
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
};

