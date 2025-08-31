import { useState } from 'react';
import Card from '../components/Card';
import Tabs from '../components/Tabs';

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
      participants: "16 teams"
    },
    {
      name: "Mobile Legends World Championship",
      game: "MLBB",
      platform: "Mobile",
      prizePool: "$800,000",
      date: "2025-02-20",
      status: "upcoming",
      participants: "24 teams"
    },
    {
      name: "Free Fire World Series",
      game: "Free Fire",
      platform: "Mobile",
      prizePool: "$1,000,000",
      date: "2025-04-10",
      status: "upcoming",
      participants: "32 teams"
    },
    {
      name: "The International 2024",
      game: "Dota 2",
      platform: "PC",
      prizePool: "$3,200,000",
      date: "2024-10-15",
      status: "completed",
      participants: "20 teams"
    },
    {
      name: "PUBG Global Championship 2024",
      game: "PUBG",
      platform: "PC",
      prizePool: "$1,500,000",
      date: "2024-11-20",
      status: "completed",
      participants: "32 teams"
    }
  ];

  const filterTournaments = (status) => {
    return tournaments.filter(t => status === 'all' || t.status === status);
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
              <div className="tournament-header">
                <h3>{tournament.name}</h3>
                <span className="tournament-status upcoming">Upcoming</span>
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
              <div className="tournament-header">
                <h3>{tournament.name}</h3>
                <span className="tournament-status completed">Completed</span>
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