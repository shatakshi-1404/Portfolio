import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Certifications', 'YouTube', 'Contact'];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '14px 0' : '22px 0',
      background: scrolled ? 'rgba(5,5,16,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div onClick={() => scrollTo('hero')} style={{ cursor: 'pointer' }}>
          <span style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem',
            background: 'linear-gradient(135deg, #a78bfa, #38bdf8)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>SP</span>
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} style={{
              background: 'none', border: 'none', color: 'rgba(241,245,249,0.7)',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.9rem',
              cursor: 'pointer', padding: '8px 14px', borderRadius: 8, transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.target.style.color = '#a78bfa'; e.target.style.background = 'rgba(167,139,250,0.08)'; }}
            onMouseLeave={e => { e.target.style.color = 'rgba(241,245,249,0.7)'; e.target.style.background = 'none'; }}>
              {link}
            </button>
          ))}
          <a href="mailto:shatakshiravaneshwarprasad@gmail.com" className="btn-grad"
            style={{ padding: '10px 22px', fontSize: '0.85rem', marginLeft: 8 }}>
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;