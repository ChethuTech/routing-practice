import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div className="logo-container">
      <img
        className="wave-img"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <p className="wave-logo"> Wave </p>
    </div>
    <Link to="/" className="wave-logo">
      Home
    </Link>
    <Link to="/about" className="wave-logo">
      About
    </Link>
    <Link to="/contact" className="wave-logo">
      Contact
    </Link>
  </nav>
)

export default Header
