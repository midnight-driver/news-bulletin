import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import './SocialMedia.css'
function SocialMedia() {
    return (
      <>
        <section className="social">
          <div className="socBox">
            <FontAwesomeIcon className="iLast" icon={faFacebook} />
            <span>12,740 Likes</span>
          </div>
          <div className="socBox">
            <FontAwesomeIcon className="iLast" icon={faPinterest} />
            <span>5,600 Fans</span>
          </div>
          <div className="socBox">
            <FontAwesomeIcon className="iLast" icon={faTwitter} />
            <span>5,600 Follows</span>
          </div>
          <div className="socBox">
            <FontAwesomeIcon className="iLast" icon={faInstagram} />
            <span>25,600 Followers</span>
          </div>
          <div className="socBox">
            <FontAwesomeIcon className="iLast" icon={faYoutube} />
            <span>2,700 Subscribers</span>
          </div>
        </section>
      </>
    );

}

export default SocialMedia
