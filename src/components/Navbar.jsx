
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSolarPanel, FaChevronDown, FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleServicesDropdown = () => setServicesDropdownOpen(!servicesDropdownOpen);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={handleNavClick}>
          <img src="/logo.png" alt="Kanpur Services" className="logo-image" />
          <span className="logo-text">Kanpur Services</span>
        </Link>
        
        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={handleNavClick}>Home</Link>
          <div className="nav-dropdown">
            <a 
              href="#services" 
              className="nav-dropdown-trigger" 
              onClick={(e) => {
                e.preventDefault();
                toggleServicesDropdown();
              }}
            >
              Services <FaChevronDown />
            </a>
            <div className={`nav-dropdown-menu ${servicesDropdownOpen ? 'open' : ''}`}>
              <div className="nav-dropdown-grid">
                <div className="nav-dropdown-column">
                  <h4 className="nav-dropdown-title">
                    <FaSolarPanel /> Solar Services
                  </h4>
                  <ul className="nav-dropdown-list">
                    <li><Link to="/services" onClick={handleNavClick}>Rooftop Solar Installation</Link></li>
                    <li><Link to="/services" onClick={handleNavClick}>On Grid Solar</Link></li>
                    <li><Link to="/services" onClick={handleNavClick}>Off Grid Solar</Link></li>
                    <li><Link to="/services" onClick={handleNavClick}>Hybrid Solar</Link></li>
                    <li><Link to="/services" onClick={handleNavClick}>PM Surya Ghar</Link></li>
                  </ul>
                </div>
                <div className="nav-dropdown-column">
                  <h4 className="nav-dropdown-title">
                    <FaSolarPanel /> Home Appliance Services
                  </h4>
                  <ul className="nav-dropdown-list">
                    <li><Link to="/services" onClick={handleNavClick}>AC Service</Link></li>
                    <li><Link to="/services" onClick={handleNavClick}>Refrigerator Repair</Link></li>
                    <li><Link to="/services" onClick={handleNavClick}>Washing Machine Repair</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Link to="/services" onClick={handleNavClick}>PM Surya Ghar</Link>
          <Link to="/gallery" onClick={handleNavClick}>Gallery</Link>
          <Link to="/" onClick={handleNavClick}>Reviews</Link>
          <Link to="/" onClick={handleNavClick}>FAQ</Link>
          <Link to="/contact" onClick={handleNavClick}>Contact</Link>
        </nav>
        
        <div className="header-actions">
          <a href="tel:+918090444479" className="header-call">
            <FaPhone />
            <span className="phone-num">Call Now</span>
          </a>
          <a 
            href="https://wa.me/918090444479" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="header-whatsapp"
          >
            <FaWhatsapp />
          </a>
          <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Menu">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
