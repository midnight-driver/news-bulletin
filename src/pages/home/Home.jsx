import Hero from "../hero/Hero";
import Homepage from '../mainContent/Homepage'
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";

// import Discover from '../../components/discover/Discover'
const Home = () => {
    return (
      <div>
        <Header />
        <Hero />

        <Homepage />
        <Footer />
      </div>
    );
}

export default Home
