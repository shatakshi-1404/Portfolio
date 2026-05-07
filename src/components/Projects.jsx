const Projects = () => {
  const projects = [
    {
      title: 'MealMind', emoji: '🍱', tagline: 'AI-Powered Smart Meal Planner',
      desc: 'Full-stack MERN app that tracks your pantry, generates AI-powered recipe suggestions from ingredients you own, auto-creates grocery lists and tracks daily calories.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'OpenRouter AI', 'JWT', 'Express'],
      highlights: ['AI recipe generation from pantry', 'Calorie tracking dashboard', 'Auto grocery list', 'Deployed & live'],
      github: 'https://github.com/shatakshi-1404/mealmind',
      live: 'https://mealmind-zei5.vercel.app',
      color: '#f472b6', gradient: 'linear-gradient(135deg, #f472b6, #a78bfa)', deployed: true,
    },
    {
      title: 'StudySync', emoji: '📚', tagline: 'AI Study Planner & Quiz Generator',
      desc: 'Full-stack MERN app that generates personalized day-by-day study plans based on exam dates using AI. Includes an AI quiz generator that creates MCQs from any subject or your notes.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'OpenRouter AI', 'JWT', 'Express'],
      highlights: ['AI day-by-day study plans', 'MCQ quiz generator', 'Progress tracking', 'Deployed & live'],
      github: 'https://github.com/shatakshi-1404/studysync',
      live: 'https://studysync-teal.vercel.app/',
      color: '#818cf8', gradient: 'linear-gradient(135deg, #818cf8, #38bdf8)', deployed: true,
    },
    {
      title: 'AI Resume Analyzer', emoji: '📄', tagline: 'Production-Grade NLP Microservice',
      desc: 'A 3-tier microservice system that analyzes resumes against job descriptions using NLP. ~88% keyword-match accuracy with TF-IDF + spaCy and ~30% relevance improvement via HuggingFace Transformers.',
      tags: ['React 18', 'TypeScript', 'FastAPI', 'spaCy', 'HuggingFace', 'Docker', 'MongoDB'],
      highlights: ['~88% keyword-match accuracy', '~30% relevance improvement', '<1.2s PDF processing', 'Fully Dockerized'],
      github: 'https://github.com/shatakshi-1404/ai-resume-analyzer',
      live: null, color: '#34d399', gradient: 'linear-gradient(135deg, #34d399, #38bdf8)', deployed: false,
    },
    {
      title: 'Restaurant Queue System', emoji: '🍽️', tagline: 'Real-Time Queue Management Platform',
      desc: 'Eliminates physical wait lines with real-time queue management. Top Finalist at SolvIt Hackathon 2025. Supports 10+ concurrent sessions with role-based dashboards.',
      tags: ['Node.js', 'React', 'TypeScript', 'Socket.io', 'MongoDB', 'JWT'],
      highlights: ['<200ms real-time updates', 'Top Finalist @ SolvIt 2025', '45% wait time reduction', '10+ concurrent sessions'],
      github: 'https://github.com/shatakshi-1404/resturant-queue-management-system',
      live: null, color: '#fbbf24', gradient: 'linear-gradient(135deg, #fbbf24, #f472b6)', deployed: false,
    },
    {
      title: 'Movie Recommender', emoji: '🎬', tagline: 'Content-Based ML Recommendation Engine',
      desc: 'Content-based movie recommendation engine with an interactive Streamlit interface. Built on 5,000+ TMDb movies using TF-IDF vectorization and cosine similarity.',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'TF-IDF', 'Cosine Similarity', 'Streamlit', 'TMDb API'],
      highlights: ['5,000+ movie dataset', '<500ms query response', 'Live poster fetching', 'Streamlit web app'],
      github: 'https://github.com/shatakshi-1404/movie-recommendation-system',
      live: null, color: '#a78bfa', gradient: 'linear-gradient(135deg, #a78bfa, #f472b6)', deployed: false,
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="orb" style={{ width: 500, height: 500, background: '#38bdf8', top: '10%', right: -200 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label">Projects</span>
        <h2 className="section-title">Things I've <span className="grad-text">Built</span></h2>
        <p className="section-sub">Full-stack apps with AI at the core — from hackathon finalists to deployed production apps.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {projects.map((p, i) => (
            <div key={i} className="glass" style={{ padding: '36px', overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: p.gradient }} />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', background: `${p.color}15`, border: `1px solid ${p.color}25` }}>{p.emoji}</div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: 'var(--text)' }}>{p.title}</h3>
                        {p.deployed
                          ? <span style={{ background: 'rgba(52,211,153,0.15)', color: '#34d399', border: '1px solid rgba(52,211,153,0.25)', padding: '3px 10px', borderRadius: 50, fontSize: '0.72rem', fontWeight: 700 }}>● LIVE</span>
                          : <span style={{ background: 'rgba(251,191,36,0.15)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.25)', padding: '3px 10px', borderRadius: 50, fontSize: '0.72rem', fontWeight: 700 }}>◆ OPEN SOURCE</span>
                        }
                      </div>
                      <div style={{ color: p.color, fontWeight: 600, fontSize: '0.88rem' }}>{p.tagline}</div>
                    </div>
                  </div>

                  <p style={{ color: 'rgba(148,163,184,0.9)', fontSize: '0.97rem', lineHeight: 1.8, marginBottom: 20, maxWidth: 600 }}>{p.desc}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                    {p.tags.map((tag, j) => (
                      <span key={j} style={{ padding: '5px 12px', borderRadius: 50, fontSize: '0.78rem', fontWeight: 600, background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}20` }}>{tag}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: 12 }}>
                    <a href={p.github} target="_blank" rel="noreferrer" style={{
                      display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text2)',
                      textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600, padding: '9px 18px',
                      borderRadius: 50, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${p.color}50`; e.currentTarget.style.color = p.color; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--text2)'; }}>
                      ⌨️ GitHub
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" style={{
                        display: 'flex', alignItems: 'center', gap: 6, color: 'white',
                        textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600, padding: '9px 18px',
                        borderRadius: 50, background: p.gradient, transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                        🚀 Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div style={{ minWidth: 220, background: `${p.color}08`, border: `1px solid ${p.color}18`, borderRadius: 16, padding: '20px' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.78rem', letterSpacing: 2, textTransform: 'uppercase', color: p.color, marginBottom: 14 }}>Highlights</div>
                  {p.highlights.map((h, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10 }}>
                      <span style={{ color: p.color, fontSize: '0.9rem', marginTop: 1 }}>✓</span>
                      <span style={{ color: 'rgba(241,245,249,0.8)', fontSize: '0.85rem', lineHeight: 1.5 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects .glass > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;