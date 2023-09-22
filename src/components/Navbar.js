import { Link } from 'react-router-dom';
import '../modules/Navbar.css';

const NavBar = () => (
  <div className="navbar-container">
    <h1>BookStore CMS</h1>
    <nav>
      <ul className="navbar-links">
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/Category">Category</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavBar;
