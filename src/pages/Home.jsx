import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';

const Home = () => {
  const featuredNews = [
    {
      title: "Valorant Champions 2025 Announced",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      excerpt: "The biggest Valorant tournament of the year is coming with a $2M prize pool."
    },
    {
      title: "Mobile Legends World Championship",
      image: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg",
      excerpt: "16 teams compete for the ultimate MLBB crown in this year's championship."
    },
    {
      title: "CS2 Major Update Released",
      image: "https://images.pexels.com/photos/21696/pexels-photo.jpg",
      excerpt: "New maps, weapons, and gameplay mechanics arrive in the latest update."
    }
  ];

  const quickLinks = [
    { title: "Upcoming Tournaments", link: "/tournaments", count: "12" },
    { title: "Tech Events", link: "/tech-events", count: "8" },
    { title: "Latest News", link: "/news", count: "24" },
    { title: "Active Sponsors", link: "/sponsors", count: "15" }
  ];

  return (
    <div className="home-page">
      <HeroBanner />
      
      <section className="featured-news">
        <div className="container">
          <h2 className="section-title gradient-text">Featured News</h2>
          <div className="news-carousel">
            {featuredNews.map((news, index) => (
              <Card key={index} className="news-card">
                <img src={news.image} alt={news.title} className="news-image" />
                <div className="news-content">
                  <h3>{news.title}</h3>
                  <p>{news.excerpt}</p>
                  <a href="/news" className="news-link">Read More</a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="quick-links">
        <div className="container">
          <h2 className="section-title">Quick Access</h2>
          <div className="grid grid-4">
            {quickLinks.map((link, index) => (
              <Card key={index} className="quick-link-card">
                <div className="quick-link-count">{link.count}</div>
                <h3>{link.title}</h3>
                <a href={link.link} className="btn btn-primary">
                  View All
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;