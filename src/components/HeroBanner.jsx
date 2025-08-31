const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span className="gradient-text">GameHub</span>
        </h1>
        <p className="hero-subtitle">
          Your ultimate destination for esports news, tournaments, and gaming community
        </p>
        <div className="hero-actions">
          <a href="/tournaments" className="btn btn-primary">
            View Tournaments
          </a>
          <a href="/news" className="btn btn-secondary">
            Latest News
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-particles"></div>
      </div>
    </section>
  );
};

export default HeroBanner;