const Contact = () => {
  const links = [
    { icon: '💼', label: 'LinkedIn', sub: 'Connect professionally', href: 'https://www.linkedin.com/in/shatakshi-prasad-9104772b8/', color: '#38bdf8' },
    { icon: '⌨️', label: 'GitHub', sub: 'Explore my code', href: 'https://github.com/shatakshi-1404', color: '#a78bfa' },
    { icon: '🏆', label: 'LeetCode', sub: '300+ problems solved', href: 'https://leetcode.com/u/shatakshi-1404/', color: '#fbbf24' },
    { icon: '▶', label: 'YouTube', sub: 'AI & Data Science', href: 'https://www.youtube.com/@ShatakshiPrasad', color: '#f472b6' },
  ];

  return (
    <section id="contact" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="orb" style={{ width: 600, height: 600, background: '#818cf8', top: -200, left: '30%' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <span className="section-label">Contact</span>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Let's build something <span className="grad-text">amazing together</span>
        </h2>
        <p style={{ color: 'var(--text2)', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 48px', lineHeight: 1.75 }}>
          I'm actively looking for full-stack / AI developer roles. If you're hiring or want to collaborate — my inbox is open!
        </p>

        <a href="mailto:shatakshiravaneshwarprasad@gmail.com" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none',
          background: 'linear-gradient(135deg, #a78bfa, #818cf8, #38bdf8)',
          backgroundSize: '200% 200%', animation: 'gradient-shift 4s ease infinite',
          color: 'white', padding: '18px 40px', borderRadius: 50,
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.05rem',
          boxShadow: '0 10px 40px rgba(167,139,250,0.3)', marginBottom: 60, transition: 'all 0.3s ease'
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(167,139,250,0.5)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(167,139,250,0.3)'; }}>
          📧 shatakshiravaneshwarprasad@gmail.com
        </a>

        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer" className="glass" style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              textDecoration: 'none', padding: '24px 28px', minWidth: 140, borderRadius: 20, transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${l.color}50`; e.currentTarget.style.background = `${l.color}08`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.background = 'var(--glass)'; }}>
              <span style={{ fontSize: '2rem' }}>{l.icon}</span>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: l.color, fontSize: '0.95rem' }}>{l.label}</span>
              <span style={{ color: 'var(--text2)', fontSize: '0.78rem' }}>{l.sub}</span>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '60px 0 30px', color: 'var(--text3)', fontSize: '0.85rem' }}>
          <div style={{ marginBottom: 8 }}>
            Built with <span style={{ color: '#f472b6' }}>♥</span> by{' '}
            <span style={{ background: 'linear-gradient(135deg, #a78bfa, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700 }}>
              Shatakshi Prasad
            </span>
          </div>
          <div>React.js · Glassmorphism · 2025</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;