import { NavLink } from 'react-router-dom'
import logo from '/logo.png'

const Nav = () => {
  return (
    <div> 
    <nav className="border-bottom border-success navbar navbar-expand-md">
        <div className="container">
          <div className='d-flex align-items-center'>
            <h5 className='text-white align-self-end'>Crypto</h5>
            <img src={logo} alt="planet" className="logo" />
            <h5 className='text-white align-self-end'>King</h5>
          </div>
          <div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto gap-3">
                <li className="nav-item">
                  <NavLink to="/" className={(navData) => (navData.isActive ? 'active-style text-white' : 'none') }>Home</NavLink>
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

    </div>
  )
}

export default Nav