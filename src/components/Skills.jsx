const Skills = () => {
  const categories = [
    { label: 'Frontend', color: '#a78bfa', skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind CSS', 'Redux'] },
    { label: 'Backend', color: '#38bdf8', skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Auth', 'Socket.io'] },
    { label: 'AI / ML', color: '#f472b6', skills: ['OpenRouter AI', 'Google Gemini', 'HuggingFace', 'spaCy / NLP', 'TF-IDF', 'Scikit-learn'] },
    { label: 'Database', color: '#34d399', skills: ['MongoDB', 'Mongoose', 'MySQL', 'Redis (basics)', 'Database Design'] },
    { label: 'DevOps & Tools', color: '#fbbf24', skills: ['Docker', 'Git / GitHub', 'Vercel', 'Render', 'Postman', 'VS Code'] },
    { label: 'CS Fundamentals', color: '#818cf8', skills: ['Data Structures', 'Algorithms (Java)', 'System Design', 'OS', 'DBMS', 'Computer Networks'] },
  ];

  return (
    <section id="skills" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="orb" style={{ width: 500, height: 500, background: '#a78bfa', bottom: -100, left: -100 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label">Tech Stack</span>
        <h2 className="section-title">Skills & <span className="grad-text">Technologies</span></h2>
        <p className="section-sub">A full-stack toolkit with AI integration at the core of everything I build.</p>

        <div className="grid-3">
          {categories.map((cat, i) => (
            <div key={i} className="glass" style={{ padding: '28px 24px' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.85rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, color: cat.color }}>{cat.label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map((skill, j) => (
                  <span key={j} style={{
                    padding: '6px 14px', borderRadius: 50, fontSize: '0.82rem', fontWeight: 500,
                    background: `${cat.color}12`, color: cat.color, border: `1px solid ${cat.color}25`, cursor: 'default', transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => { e.target.style.background = `${cat.color}25`; e.target.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.target.style.background = `${cat.color}12`; e.target.style.transform = 'translateY(0)'; }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass" style={{ marginTop: 24, padding: '24px 32px', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--text2)', fontSize: '0.85rem', letterSpacing: 1 }}>LANGUAGES</span>
          {['Java', 'JavaScript', 'TypeScript', 'Python', 'HTML/CSS'].map((lang, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #38bdf8)' }} />
              <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.95rem' }}>{lang}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;