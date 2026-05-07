const About = () => {
  const facts = [
    { icon: '🎓', title: 'Education', desc: 'B.Tech CS @ VIT Bhopal', sub: 'CGPA: 8.42/10 · Graduating 2027' },
    { icon: '⚡', title: 'Specialization', desc: 'AI-Integrated MERN Stack', sub: 'Full-stack apps powered by AI' },
    { icon: '🏆', title: 'DSA', desc: '300+ Problems Solved', sub: 'LeetCode · Java · Strong fundamentals' },
    { icon: '📚', title: 'Core CS', desc: 'CN · OS · DBMS · System Design', sub: 'Strong theoretical foundation' },
  ];

  return (
    <section id="about" className="section">
      <div className="orb" style={{ width: 400, height: 400, background: '#818cf8', top: '20%', right: -100 }} />
      <div className="container">
        <span className="section-label">About Me</span>
        <h2 className="section-title">Turning ideas into <span className="grad-text">intelligent apps</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          <div>
            <p style={{ color: 'rgba(148,163,184,0.9)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 20 }}>
              I'm a final-year Computer Science student at VIT Bhopal, graduating in 2027 with a CGPA of 8.42.
              I build full-stack web applications that leverage AI to solve real-world problems — not just CRUD apps,
              but systems with genuine intelligence baked in.
            </p>
            <p style={{ color: 'rgba(148,163,184,0.9)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 20 }}>
              My journey started with competitive programming — 300+ problems solved in Java — which gave me
              strong algorithmic thinking. That foundation, combined with deep knowledge of CN, OS, DBMS and
              System Design, helps me build scalable, well-architected applications.
            </p>
            <p style={{ color: 'rgba(148,163,184,0.9)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 32 }}>
              I'm also starting a YouTube channel to teach Data Science and AI/ML concepts — because the best
              way to master something is to teach it. 🎬
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/shatakshi-prasad-9104772b8/" target="_blank" rel="noreferrer" className="btn-grad">
                Connect on LinkedIn
              </a>
              <a href="https://leetcode.com/u/shatakshi-1404/" target="_blank" rel="noreferrer" className="btn-outline">
                LeetCode Profile
              </a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {facts.map((f, i) => (
              <div key={i} className="glass" style={{ padding: '24px 20px' }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#a78bfa', marginBottom: 4 }}>{f.title}</div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 4 }}>{f.desc}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;