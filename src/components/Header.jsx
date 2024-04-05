import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-white">
      <nav className="container py-4">
        <h1 className="display-3">iPhone 15</h1>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Overview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/features" className="nav-link">Features</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/specification" className="nav-link">Specification</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
