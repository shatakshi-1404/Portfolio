const YouTube = () => {
  const topics = [
    { icon: '🤖', title: 'Machine Learning', desc: 'From linear regression to neural networks — explained clearly' },
    { icon: '📊', title: 'Data Science', desc: 'Pandas, NumPy, visualization and real datasets' },
    { icon: '🧠', title: 'Deep Learning', desc: 'CNNs, RNNs, Transformers and modern architectures' },
    { icon: '💡', title: 'AI Projects', desc: 'Build real AI apps from scratch, step by step' },
    { icon: '📈', title: 'Statistics & Math', desc: 'The math behind ML without the intimidation' },
    { icon: '🚀', title: 'Career in AI', desc: 'Roadmaps, resources and industry insights' },
  ];

  return (
    <section id="youtube" className="section">
      <div className="orb" style={{ width: 500, height: 500, background: '#f472b6', bottom: -100, right: -100 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label">YouTube</span>
        <h2 className="section-title">Teaching <span className="grad-text-2">AI & Data Science</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <p style={{ color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 24 }}>
              I'm launching a YouTube channel under my name <strong style={{ color: 'var(--text)' }}>Shatakshi Prasad</strong> to
              teach Data Science, Machine Learning and AI — in the clearest, most practical way possible.
            </p>
            <p style={{ color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 32 }}>
              No fluff. No theory dumps. Real projects, real code, real understanding. 🎯
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              background: 'rgba(244,114,182,0.08)', border: '1px solid rgba(244,114,182,0.2)',
              borderRadius: 16, padding: '16px 24px', marginBottom: 32
            }}>
              <span style={{ fontSize: '2rem' }}>🎬</span>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, color: 'var(--text)', fontSize: '1rem' }}>Shatakshi Prasad</div>
                <div style={{ color: '#f472b6', fontSize: '0.85rem', fontWeight: 600 }}>Coming Soon — Subscribe to get notified!</div>
              </div>
            </div>
            <div>
              <a href="https://www.youtube.com/@ShatakshiPrasad" target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: 'white',
                background: 'linear-gradient(135deg, #FF0000, #cc0000)', padding: '13px 24px',
                borderRadius: 50, fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,0,0,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                ▶ Subscribe Now
              </a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {topics.map((t, i) => (
              <div key={i} className="glass" style={{ padding: '18px 16px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{t.icon}</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)', marginBottom: 4 }}>{t.title}</div>
                <div style={{ color: 'var(--text2)', fontSize: '0.78rem', lineHeight: 1.5 }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #youtube .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default YouTube;