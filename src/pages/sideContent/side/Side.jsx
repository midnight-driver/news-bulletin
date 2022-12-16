import TopHeading from '../../../components/topHeading/TopHeading';
import './Side.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from '../socialMedia/SocialMedia';
import {gallery} from '../../../dummyData';
import Tpost from '../tpost/Tpost';
import Slider from "react-slick";

function Side() {
   const settings = {
     dots: false,
     infinite: false,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
   };

   const catgeorys=['World', 'Travel','Sport','Fun', 'Health', 'Balance', 'Faishon' ]
    return (
      <>
        <TopHeading title="Stay Connected" />
        <SocialMedia />
        <TopHeading title="Subscribe" />
        <div className="subscribe">
          <h1 className="title">Subscribe to our new Stories</h1>
          <form action="">
            <input className="iBox" type="text" placeholder="email address" />
            <button>
              <FontAwesomeIcon icon={faPaperPlane} />
              Submit{" "}
            </button>
          </form>
        </div>
        <div className="banner">
          <img src="./images/sidebar-banner-new.jpg" alt="" />
        </div>
        <Tpost />
        <div className="catgeory">
          <TopHeading title="Categorys" />
          {/* <div className="contents"> */}
            {catgeorys.map((val) => {
              return (
                <div className="catgeoryPopular">
                  <span>{val}</span>
                </div>
              );
            })}
          {/* </div> */}
        </div>
        <section className="gallery">
          <TopHeading title="Gallery" />

          <div className="content">
                                  <Slider {...settings}>

            {gallery.map((val) => {
              return (
                <div className="img">
                  <img src={val.cover} alt=""/>
                </div>
              );
            })}
            </Slider>
          </div>
        </section>
      </>
    );
}

export default Side
