import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <div className="header-bg">
      <div className="top-headers">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>

        <Link to="/schedules" className="link">
          Schedules
        </Link>
        <Link to="/membership" className="link">
          Membership
        </Link>
        <Link to="/pricing" className="link">
          Pricing
        </Link>
      </div>
      <div>
        <Link to="/offers" className="offers-link">
          Offers
        </Link>
        <button type="button" className="courses-btn">
          Courses
        </button>
      </div>
    </div>
  </>
)

export default Header
