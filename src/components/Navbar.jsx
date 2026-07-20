
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSolarPanel, FaChevronDown, FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'services', 'pm-surya-ghar', 'gallery', 'reviews', 'faq', 'contact'];
      const offset = 140;
      let currentSection = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleServicesDropdown = () => setServicesDropdownOpen(!servicesDropdownOpen);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleSectionNavigation = (sectionId) => {
    handleNavClick();

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    scrollToSection(sectionId);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={handleNavClick}>
          <img src="/logo.png" alt="Kanpur Services" className="logo-image" />
          <span className="logo-text">Kanpur Services</span>
        </Link>
        
        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a
            href="#home"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleSectionNavigation('home');
            }}
          >
            Home
          </a>
          <div className="nav-dropdown">
            <a 
              href="#services" 
              className={`nav-dropdown-trigger ${activeSection === 'services' ? 'active' : ''}`} 
              onClick={(e) => {
                e.preventDefault();
                toggleServicesDropdown();
                handleSectionNavigation('services');
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
          <a
            href="#pm-surya-ghar"
            className={`nav-link ${activeSection === 'pm-surya-ghar' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleSectionNavigation('pm-surya-ghar');
            }}
          >
            PM Surya Ghar
          </a>
          <a
            href="#gallery"
            className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleSectionNavigation('gallery');
            }}
          >
            Gallery
          </a>
          <a
            href="#reviews"
            className={`nav-link ${activeSection === 'reviews' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleSectionNavigation('reviews');
            }}
          >
            Reviews
          </a>
          <a
            href="#faq"
            className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleSectionNavigation('faq');
            }}
          >
            FAQ
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleSectionNavigation('contact');
            }}
          >
            Contact
          </a>
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
