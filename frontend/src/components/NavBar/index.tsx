import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import "./styles.css";

function NavBar(){
    return (
        <header>
          <nav className="container">
            <div className="dsmovie-nav-content">
              <h1>DSMovie</h1>
              <a href="https://github.com/lroberta569"/>
              <div className="dsmovie-contact-container">
                <GithubIcon />
                <p className="dsmovie-contact-link">/lroberta569</p>
              </div>
            </div>
          </nav>
        </header>
      );
}

export default NavBar;