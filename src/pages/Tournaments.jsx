import { useState } from 'react';
import Card from '../components/Card';
import Tabs from '../components/Tabs';
import '../styles/components.css';

const Tournaments = () => {
  const [filter, setFilter] = useState('all');

  const tournaments = [
    {
      name: "Valorant Champions 2025",
      game: "Valorant",
      platform: "PC",
      prizePool: "$2,000,000",
      date: "2025-03-15",
      status: "upcoming",
      participants: "16 teams",
      image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/15ee94b8fc07fbbec1cef4f5fbbfea3aea9246df-1920x1080.jpg?auto=format&fit=crop&q=80&h=537&w=956&crop=center"
    },
    {
      name: "Mobile Legends World Championship",
      game: "MLBB",
      platform: "Mobile",
      prizePool: "$800,000",
      date: "2025-02-20",
      status: "upcoming",
      participants: "24 teams",
      image: "https://cdn.oneesports.gg/cdn-data/2023/12/MLBB_M5WorldChampionship_APBren_winningmoment-1024x576.jpg"
    },
    {
      name: "Free Fire World Series",
      game: "Free Fire",
      platform: "Mobile",
      prizePool: "$1,000,000",
      date: "2025-04-10",
      status: "upcoming",
      participants: "32 teams",
      image: "https://i.dawn.com/primary/2021/06/60bb2910c3a41.jpg"
    },
    {
      name: "The International 2024",
      game: "Dota 2",
      platform: "PC",
      prizePool: "$3,200,000",
      date: "2024-10-15",
      status: "completed",
      participants: "20 teams",
      image: "https://i.ytimg.com/vi/bCpDeyQnWeA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDJsVOYbCFG-i_v4SUN7ml40IoVwg"
    },
    {
      name: "PUBG Global Championship 2024",
      game: "PUBG",
      platform: "PC",
      prizePool: "$1,500,000",
      date: "2024-11-20",
      status: "completed",
      participants: "32 teams",
      image: "https://wstatic-prod-boc.krafton.com/common/news/20241222/SHfMj7ds.png"
    }
  ];

  // Filter by status AND platform
  const filterTournaments = (status) => {
    return tournaments.filter(t => 
      (status === 'all' || t.status === status) &&
      (filter === 'all' || t.platform === filter)
    );
  };

  const upcomingTournaments = filterTournaments('upcoming');
  const pastTournaments = filterTournaments('completed');

  const tabsData = [
    {
      label: "Upcoming",
      content: (
        <div className="grid grid-2">
          {upcomingTournaments.map((tournament, index) => (
            <Card key={index} className="tournament-card">
              <img src={tournament.image} alt={tournament.name} className="tournament-image" />
              
              <div className="tournament-header">
                <h3>{tournament.name}</h3>
                <span className={`tournament-status upcoming`}>Upcoming</span>
              </div>

              <div className="tournament-details">
                <p><strong>Game:</strong> {tournament.game}</p>
                <p><strong>Platform:</strong> {tournament.platform}</p>
                <p><strong>Prize Pool:</strong> {tournament.prizePool}</p>
                <p><strong>Date:</strong> {tournament.date}</p>
                <p><strong>Participants:</strong> {tournament.participants}</p>
              </div>

              <button className="btn btn-primary">Register</button>
            </Card>
          ))}
        </div>
      )
    },
    {
      label: "Past Events",
      content: (
        <div className="grid grid-2">
          {pastTournaments.map((tournament, index) => (
            <Card key={index} className="tournament-card">
              <img src={tournament.image} alt={tournament.name} className="tournament-image" />
              
              <div className="tournament-header">
                <h3>{tournament.name}</h3>
                <span className={`tournament-status completed`}>Completed</span>
              </div>

              <div className="tournament-details">
                <p><strong>Game:</strong> {tournament.game}</p>
                <p><strong>Platform:</strong> {tournament.platform}</p>
                <p><strong>Prize Pool:</strong> {tournament.prizePool}</p>
                <p><strong>Date:</strong> {tournament.date}</p>
                <p><strong>Participants:</strong> {tournament.participants}</p>
              </div>

              <button className="btn btn-secondary">View Results</button>
            </Card>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="tournaments-page">
      <div className="container">
        <h1 className="section-title gradient-text">Tournaments</h1>
        
        <div className="platform-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Platforms
          </button>
          <button 
            className={`filter-btn ${filter === 'Mobile' ? 'active' : ''}`}
            onClick={() => setFilter('Mobile')}
          >
            Mobile
          </button>
          <button 
            className={`filter-btn ${filter === 'PC' ? 'active' : ''}`}
            onClick={() => setFilter('PC')}
          >
            PC
          </button>
          <button 
            className={`filter-btn ${filter === 'Console' ? 'active' : ''}`}
            onClick={() => setFilter('Console')}
          >
            Console
          </button>
        </div>

        <Tabs tabs={tabsData} />
      </div>
    </div>
  );
};

export default Tournaments;
