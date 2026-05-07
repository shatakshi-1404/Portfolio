const Certifications = () => {
  const certs = [
    {
      title: 'Generative AI', issuer: 'IBM', icon: '🤖', color: '#38bdf8',
      gradient: 'linear-gradient(135deg, #38bdf8, #818cf8)',
      desc: 'Fundamentals of Generative AI, LLMs, prompt engineering and practical AI applications.',
      image: '/ibm-cert.jpg', badge: 'IBM'
    },
    {
      title: 'Data Science Foundations', issuer: 'Oracle', icon: '📊', color: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6, #a78bfa)',
      desc: 'Data science concepts, analytics, machine learning fundamentals and Oracle Cloud tools.',
      image: '/oracle-cert.jpg', badge: 'Oracle'
    },
  ];

  return (
    <section id="certifications" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="orb" style={{ width: 400, height: 400, background: '#f472b6', top: '30%', left: -100 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label">Certifications</span>
        <h2 className="section-title">Certified <span className="grad-text">Expertise</span></h2>
        <p className="section-sub">Industry-recognized certifications in AI and Data Science.</p>

        <div className="grid-2">
          {certs.map((cert, i) => (
            <div key={i} className="glass" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{
                height: 200, background: `${cert.color}10`, position: 'relative',
                overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <img src={cert.image} alt={cert.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center"><div style="font-size:4rem">${cert.icon}</div><div style="font-family:Syne,sans-serif;font-weight:800;font-size:1.2rem;color:${cert.color};margin-top:8px">${cert.badge} Certificate</div></div>`;
                  }}
                />
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  background: `${cert.color}20`, border: `1px solid ${cert.color}40`,
                  borderRadius: 8, padding: '6px 12px',
                  fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.8rem', color: cert.color
                }}>{cert.badge}</div>
              </div>
              <div style={{ padding: '24px 28px' }}>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', marginBottom: 4, color: 'var(--text)' }}>{cert.title}</h3>
                <div style={{ color: cert.color, fontWeight: 600, fontSize: '0.88rem', marginBottom: 12 }}>Issued by {cert.issuer}</div>
                <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.65 }}>{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;