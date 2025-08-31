import Card from '../components/Card';

const EsportsNews = () => {
  const newsData = [
    {
      game: "PUBG",
      title: "PUBG Global Championship 2025",
      image: "https://www.vice.com/wp-content/uploads/sites/2/2018/12/1545803974526-40176727491_31da2b03d8_b.jpeg",
      excerpt: "The ultimate battle royale championship returns with bigger prizes.",
      date: "2025-01-15"
    },
    {
      game: "Free Fire",
      title: "Free Fire World Series Updates",
      image: "https://cdn-www.bluestacks.com/bs-images/y4gfgfr.jpg",
      excerpt: "New characters and weapons added for the upcoming world series.",
      date: "2025-01-14"
    },
    {
      game: "CODM",
      title: "Call of Duty Mobile Season 12",
      image: "https://media.assettype.com/afkgaming%2F2024-04%2F3c757e3d-6d16-439c-b2aa-2d41ac672bdc%2Fimage_1200x630___2024_04_01T103024_257.jpg?auto=format%2Ccompress&dpr=1.0&w=1200",
      excerpt: "New maps and game modes arrive in the latest season update.",
      date: "2025-01-13"
    },
    {
      game: "Clash Royale",
      title: "Crown Championship Finals",
      image: "https://learningworksforkids.com/wp-content/uploads/Clash-Royale-Wallpapers-HD.jpeg",
      excerpt: "Top players battle for the ultimate Clash Royale crown.",
      date: "2025-01-12"
    },
    {
      game: "Fortnite",
      title: "Chapter 5 Season 2 Launch",
      image: "https://cdn1.epicgames.com/offer/fn/FNBR_37-00_C6S4_EGS_Launcher_KeyArt_FNLogo_Carousel_PDP_2560x1440_logo_2560x1440-04348f5d3d52391f572e8c1050ddc737",
      excerpt: "Epic Games unveils the biggest Fortnite update yet.",
      date: "2025-01-11"
    },
    {
      game: "League of Legends",
      title: "LoL Worlds 2025 Format Revealed",
      image: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-47eb328eac5ddd63ebd096ded7d0d5ab",
      excerpt: "Riot announces major changes to the World Championship format.",
      date: "2025-01-10"
    },
    {
      game: "Valorant",
      title: "New Agent Reveals Abilities",
      image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/08eeec37e3e6cf4a7f2375444798bce51a533436-1920x1080.jpg",
      excerpt: "The latest Valorant agent brings unique tactical abilities.",
      date: "2025-01-09"
    },
    {
      game: "Dota 2",
      title: "The International 2025 Announced",
      image: "https://yt3.googleusercontent.com/ytc/AIdro_lWrxG_fpbnTzQokp3OGudXc5dgZtHPFYm5LyC6kWRZT5g=s900-c-k-c0x00ffffff-no-rj",
      excerpt: "The biggest Dota 2 tournament returns with record prize pool.",
      date: "2025-01-08"
    },
    {
      game: "CS2",
      title: "Counter-Strike 2 Major Update",
      image: "https://gaming-cdn.com/images/products/13664/orig/counter-strike-2-pc-game-steam-cover.jpg?v=1695885435",
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