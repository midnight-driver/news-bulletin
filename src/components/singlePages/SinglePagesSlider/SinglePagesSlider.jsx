import "./SinglePagesSlider.css";
import "slick-carousel/slick/slick-theme.css";
import { popular } from "../../../dummyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faComment } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
function SinglePagesSlider() {
    const settings = {
      infinite: true,
      slidesToShow: 7,
      speed: 500,
      dots: false,
      slidesToScroll: 2,

      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div className="singlePopular">
          <div className="content">
            <Slider {...settings}>
              {popular.map((val) => {
                return (
                  <div className="items">
                    <div className="box ">
                      <div className="images ">
                        <div className="img">
                          <img src={val.cover} alt="" />
                        </div>
                        <div className="catgeoryPopular">
                          <span>{val.catgeory}</span>
                        </div>
                      </div>

                      <div className="text">
                        <h1 className="titlePopular">
                          {val.title}
                        </h1>
                       
                        
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

export default SinglePagesSlider
