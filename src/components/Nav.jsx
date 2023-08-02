import { NavLink } from 'react-router-dom';
import './styles/nav.css';

const Nav = () => (
  <div className="container-fluid bg-nav">
    <div className="row">
      <div className="col-fluid text-center">
        <h3 className="main-title m-0 text-white ">
          <NavLink to="/" className="navlink-title text-decoration-none text-white">
            Crypto
            <span className="d-inline"><img src="/logo.png" alt="planet" className="logo" /></span>
            King`s
          </NavLink>
        </h3>
      </div>
    </div>
  </div>
);

export default Nav;
