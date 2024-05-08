import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png';
const header = () => {
  return (
    <nav>
      <div className='container nav_container'>
        <Link to='/' className='navLogo'>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className='nav_menu'>
          <li><Link to="/profile">Kanak Yadav</Link></li>
          <li><Link to="/create">Create Posts</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
        <button className='nav_toggle-btn'></button>
      </div>
    </nav>
  )
}

export default header
