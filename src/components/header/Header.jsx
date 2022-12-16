import Head from './Head';

import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import {useState} from 'react';
function Header() {
  const [navbar, setNavbar] = useState(false);
  // const [openBar, setOpenBar] = useState('')
    return (
      <>
        <Head />
        <header>
          <div className="container paddingSmall">
            <nav>
              <ul
                className={navbar ? "navbar" : "flex"}
                onClick={() => setNavbar(false)}
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/cult">Culture </Link>
                </li>
                <li>
                  <Link to="/pol">Politics</Link>
                </li>
                <li>
                  <Link to="/memes">Memes</Link>
                </li>
                <li>
                  <Link to="/Sports">Sports</Link>
                </li>
                <li>
                  <Link to="/boxed">Boxed</Link>
                </li>
                <li>
                  <Link to="/reviews">Reviews</Link>
                </li>
              </ul>
              <button className="barIco" onClick={() => setNavbar(!navbar)}>
                {navbar ? 
                  <FontAwesomeIcon icon={faTimes} className="barIco" />
                 : 
                  <FontAwesomeIcon icon={faBars} className="barIco" />
                }
              </button>
            </nav>
          </div>
        </header>
      </>
    );
}

export default Header
