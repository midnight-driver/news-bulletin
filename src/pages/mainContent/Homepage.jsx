import './Homepage.css'
import Popular from '../popular/Popular'
import Post from '../../components/post/Post'
import Lifestyle from '../../components/life/Lifestyle'
import Music from "../../components/Music/Music";
import Side from '../sideContent/side/Side';
import Discover from '../../components/discover/Discover'
import SocialMedia from "../sideContent/socialMedia/SocialMedia";
import Footer from '../../components/footer/Footer'
export default function Homepage() {
    return (
      <>
        <div className="homeContainer">
          <section className="mainContent">
            <Popular /> 
           <Post />
            <Lifestyle />
            <Music />
            <Discover/>
          </section>
          <div className="sideContent">
            <Side />
          </div>
          {/* <Footer /> */}
        </div>
      </>
    );
}
