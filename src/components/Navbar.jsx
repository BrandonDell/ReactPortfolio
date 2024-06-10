import { Link, Outlet } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  const linkStyle = { border: '10px black', padding: '1px' };

  // const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <section className="Nav">
        <div className="flex flex-shrink-0 items-center">
          <h1>Welcome</h1>
        </div>
        <div className="m-12 flex items-center justify-center gap-10 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
        </div>

        <div style={linkStyle}>
          <Link to="/">Home</Link>
        </div>
        <div style={linkStyle}>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div style={linkStyle}>
          <Link to="/contact">Contact</Link>
        </div>
        <div style={linkStyle}>
          <Link to="/resume">Resume</Link>
        </div>
      </section>
      <Outlet />
    </nav>
  );
}

// export default Navbar;

