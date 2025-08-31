import Card from '../components/Card';

const EsportsNews = () => {
  const newsData = [
    {
      game: "PUBG",
      title: "PUBG Global Championship 2025",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      excerpt: "The ultimate battle royale championship returns with bigger prizes.",
      date: "2025-01-15"
    },
    {
      game: "Free Fire",
      title: "Free Fire World Series Updates",
      image: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg",
      excerpt: "New characters and weapons added for the upcoming world series.",
      date: "2025-01-14"
    },
    {
      game: "CODM",
      title: "Call of Duty Mobile Season 12",
      image: "https://images.pexels.com/photos/21696/pexels-photo.jpg",
      excerpt: "New maps and game modes arrive in the latest season update.",
      date: "2025-01-13"
    },
    {
      game: "Clash Royale",
      title: "Crown Championship Finals",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg",
      excerpt: "Top players battle for the ultimate Clash Royale crown.",
      date: "2025-01-12"
    },
    {
      game: "Fortnite",
      title: "Chapter 5 Season 2 Launch",
      image: "https://images.pexels.com/photos/1720229/pexels-photo-1720229.jpeg",
      excerpt: "Epic Games unveils the biggest Fortnite update yet.",
      date: "2025-01-11"
    },
    {
      game: "League of Legends",
      title: "LoL Worlds 2025 Format Revealed",
      image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg",
      excerpt: "Riot announces major changes to the World Championship format.",
      date: "2025-01-10"
    },
    {
      game: "Valorant",
      title: "New Agent Reveals Abilities",
      image: "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg",
      excerpt: "The latest Valorant agent brings unique tactical abilities.",
      date: "2025-01-09"
    },
    {
      game: "Dota 2",
      title: "The International 2025 Announced",
      image: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg",
      excerpt: "The biggest Dota 2 tournament returns with record prize pool.",
      date: "2025-01-08"
    },
    {
      game: "CS2",
      title: "Counter-Strike 2 Major Update",
      image: "https://images.pexels.com/photos/159868/computer-mouse-wireless-computer-silver-159868.jpeg",
      excerpt: "New anti-cheat system and gameplay improvements released.",
      date: "2025-01-07"
    }
  ];

  return (
    <div className="esports-news">
      <div className="container">
        <h1 className="section-title gradient-text">Esports News</h1>
        
        <div className="news-grid grid grid-3">
          {newsData.map((news, index) => (
            <Card key={index} className="news-item">
              <img src={news.image} alt={news.title} className="news-item-image" />
              <div className="news-item-content">
                <span className="news-game-tag">{news.game}</span>
                <h3 className="news-item-title">{news.title}</h3>
                <p className="news-item-excerpt">{news.excerpt}</p>
                <div className="news-item-footer">
                  <span className="news-date">{news.date}</span>
                  <button className="btn btn-primary btn-sm">Read More</button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EsportsNews;