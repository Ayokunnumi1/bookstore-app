import { Link } from 'react-router-dom';
import '../modules/Navbar.css';

const NavBar = () => (
  <div className="navbar-container">
    <nav className="navbar-content">
      <h1>BookStore CMS</h1>
      <ul className="navbar-links">
        <li>
          <Link className="books-link" to="/">BOOKS</Link>
        </li>
        <li>
          <Link className="category-link categories" to="/Category">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
    <div className="user" />
  </div>
);

export default NavBar;
