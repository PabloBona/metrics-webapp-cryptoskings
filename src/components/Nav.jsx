import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-sm">
    <div className="container">
      <div className="d-flex align-items-center">
        <h3 className="align-self-end fs-1 m-0 text-white">
          Crypto
          <span className="d-inline"><img src="/logo.png" alt="planet" className="logo" /></span>
          King`s
        </h3>
      </div>
      <div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="flex-row fs-4 gap-3 mr-auto navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className={(navData) => (navData.isActive ? 'active-style text-white' : 'none')}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/currency" className={(navData) => (navData.isActive ? 'active-style text-white' : 'none')}>Currency</NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Menu burger */}
      <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon" />
      </button>
    </div>
  </nav>
);

export default Nav;
