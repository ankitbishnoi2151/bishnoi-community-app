const sections = [
  ["📜", "History", "Explore Guru Jambheshwar Ji, Bishnoi heritage and important historical events."],
  ["🕊️", "Khejarli", "Learn about Amrita Devi Bishnoi and the 363 martyrs of Khejarli."],
  ["🌿", "29 Principles", "Discover the principles that guide Bishnoi life, nature and community."],
  ["🦌", "Environment", "Explore wildlife conservation and the Bishnoi tradition of protecting nature."],
  ["📍", "Important Places", "Discover Khejarli, Mukam and other places connected with Bishnoi heritage."],
  ["📅", "Community Events", "A future-ready space for community gatherings, celebrations and announcements."]
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand"><span>🌿</span> Bishnoi Community</div>
        <button className="language">हिन्दी / EN</button>
      </nav>

      <section className="hero">
        <div className="heroGlow" />
        <p className="eyebrow">HERITAGE • NATURE • COMMUNITY</p>
        <h1>Our heritage.<br /><em>Our responsibility.</em></h1>
        <p className="heroText">
          A digital home for Bishnoi history, culture, environmental values and community connections.
        </p>
        <div className="actions">
          <a href="#explore" className="primary">Explore Bishnoi Heritage</a>
          <a href="#about" className="secondary">About the community</a>
        </div>
      </section>

      <section id="explore" className="content">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">EXPLORE</p>
            <h2>A living heritage</h2>
          </div>
          <p>Knowledge, stories and places brought together in one community platform.</p>
        </div>

        <div className="grid">
          {sections.map(([icon, title, text]) => (
            <article className="card" key={title}>
              <div className="icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="arrow">Explore →</span>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="quote">
        <p className="eyebrow">THE BISHNOI WAY</p>
        <blockquote>“Compassion for all living beings and protection of nature.”</blockquote>
        <p className="note">
          This app will grow into a community-driven knowledge and connection platform,
          with carefully sourced historical content and space for future community contributions.
        </p>
      </section>

      <footer>
        <div><strong>🌿 Bishnoi Community</strong><span>Heritage • Nature • Community</span></div>
        <span>Version 1.0</span>
      </footer>
    </main>
  );
}
