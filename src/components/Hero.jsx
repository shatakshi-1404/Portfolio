const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80 }}>
      <div className="orb" style={{ width: 600, height: 600, background: '#a78bfa', top: -200, right: -200 }} />
      <div className="orb" style={{ width: 400, height: 400, background: '#38bdf8', bottom: -100, left: -100 }} />
      <div className="orb" style={{ width: 300, height: 300, background: '#f472b6', top: '40%', left: '30%' }} />

      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'linear-gradient(rgba(167,139,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 60, alignItems: 'center' }}>

          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)',
              borderRadius: 50, padding: '8px 18px', marginBottom: 32,
              animation: 'fadeInUp 0.6s ease forwards'
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399', display: 'inline-block' }} />
              <span style={{ color: 'rgba(241,245,249,0.8)', fontSize: '0.85rem', fontWeight: 500 }}>Available for opportunities</span>
            </div>

            <h1 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: 12,
              animation: 'fadeInUp 0.7s 0.1s ease both'
            }}>
              Shatakshi<br />
              <span className="grad-text">Prasad</span>
            </h1>

            <h2 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 600,
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              color: 'rgba(241,245,249,0.6)', marginBottom: 24,
              animation: 'fadeInUp 0.7s 0.2s ease both'
            }}>
              AI-Integrated MERN Stack Developer
            </h2>

            <p style={{
              color: 'rgba(148,163,184,0.9)', fontSize: '1.05rem', lineHeight: 1.75,
              maxWidth: 520, marginBottom: 40, animation: 'fadeInUp 0.7s 0.3s ease both'
            }}>
              Final-year B.Tech CS student at VIT Bhopal (CGPA 8.42) building production-grade
              full-stack apps powered by AI. 300+ DSA problems solved. Passionate about making
              technology that actually helps people.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48, animation: 'fadeInUp 0.7s 0.4s ease both' }}>
              <a href="#projects" className="btn-grad"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View Projects ↓
              </a>
              <a href="https://github.com/shatakshi-1404" target="_blank" rel="noreferrer" className="btn-outline">
                GitHub Profile
              </a>
            </div>

            <div style={{ display: 'flex', gap: 40, animation: 'fadeInUp 0.7s 0.5s ease both' }}>
              {[
                { num: '5+', label: 'Projects Built' },
                { num: '300+', label: 'DSA Problems' },
                { num: '8.42', label: 'CGPA' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', background: 'linear-gradient(135deg, #a78bfa, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.num}</div>
                  <div style={{ color: 'rgba(148,163,184,0.7)', fontSize: '0.82rem', fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile photo */}
          <div style={{ display: 'flex', justifyContent: 'center', animation: 'fadeIn 1s 0.3s ease both' }}>
            <div style={{ position: 'relative', animation: 'float 6s ease-in-out infinite' }}>
              <div style={{
                position: 'absolute', inset: -4, borderRadius: '50%',
                background: 'linear-gradient(135deg, #a78bfa, #38bdf8, #f472b6)',
                animation: 'spin-slow 8s linear infinite', zIndex: 0
              }} />
              <div style={{
                width: 280, height: 280, borderRadius: '50%',
                overflow: 'hidden', position: 'relative', zIndex: 1,
                border: '4px solid #050510',
              }}>
                <img src="/profile.jpg" alt="Shatakshi Prasad"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #a78bfa, #38bdf8)';
                    e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:Syne,sans-serif;font-weight:800;font-size:4rem;color:white">SP</div>';
                  }}
                />
              </div>
              <div style={{
                position: 'absolute', bottom: 10, right: -30,
                background: 'rgba(8,8,32,0.9)', border: '1px solid rgba(167,139,250,0.3)',
                borderRadius: 12, padding: '8px 14px', backdropFilter: 'blur(20px)',
                fontSize: '0.8rem', fontWeight: 700, color: '#a78bfa', whiteSpace: 'nowrap', zIndex: 2
              }}>🤖 AI Developer</div>
              <div style={{
                position: 'absolute', top: 20, left: -40,
                background: 'rgba(8,8,32,0.9)', border: '1px solid rgba(56,189,248,0.3)',
                borderRadius: 12, padding: '8px 14px', backdropFilter: 'blur(20px)',
                fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8', whiteSpace: 'nowrap', zIndex: 2
              }}>⚡ MERN Stack</div>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: 16, marginTop: 60, flexWrap: 'wrap', animation: 'fadeInUp 0.7s 0.6s ease both' }}>
          {[
            { href: 'https://github.com/shatakshi-1404', label: 'GitHub', icon: '⌨️' },
            { href: 'https://www.linkedin.com/in/shatakshi-prasad-9104772b8/', label: 'LinkedIn', icon: '💼' },
            { href: 'https://leetcode.com/u/shatakshi-1404/', label: 'LeetCode', icon: '🏆' },
            { href: 'mailto:shatakshiravaneshwarprasad@gmail.com', label: 'Email', icon: '📧' },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 6,
              color: 'rgba(148,163,184,0.7)', textDecoration: 'none',
              fontSize: '0.85rem', fontWeight: 500, padding: '8px 16px',
              borderRadius: 50, border: '1px solid rgba(255,255,255,0.06)',
              transition: 'all 0.2s', background: 'rgba(255,255,255,0.02)'
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#a78bfa'; e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)'; e.currentTarget.style.background = 'rgba(167,139,250,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(148,163,184,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}>
              <span>{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;