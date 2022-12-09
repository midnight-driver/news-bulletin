import './Homepage.css'
import Popular from '../popular/Popular'
export default function Homepage() {
    return (
      <div className="homeContainer">
        <section className="mainContent">
          <Popular/>
        </section>
        <section className="sideContent"></section>
      </div>
    );
}
