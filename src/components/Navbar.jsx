import { Link, Outlet } from 'react-router-dom';
import '../styles/style.css'
import Header from './Header'
export default function Navbar() {
    const linkStyle = { border: '1px black', padding: '5px' };
  
    return (
      <nav className="main-header-menu">
          <Header />
        <section className='Nav'>
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
  