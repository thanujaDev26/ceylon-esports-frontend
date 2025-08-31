import Card from '../components/Card';
import Tabs from '../components/Tabs';

const TechEvents = () => {
  const upcomingEvents = [
    {
      title: "Gaming Innovation Hackathon",
      type: "Hackathon",
      date: "2025-02-15",
      location: "Online",
      description: "48-hour hackathon focused on gaming technology innovations."
    },
    {
      title: "GDC 2025 Gaming Keynote",
      type: "Keynote",
      date: "2025-03-20",
      location: "San Francisco, CA",
      description: "Industry leaders discuss the future of gaming technology."
    },
    {
      title: "Mobile Gaming Developers Meetup",
      type: "Meetup",
      date: "2025-02-28",
      location: "Austin, TX",
      description: "Network with mobile game developers and learn about latest trends."
    }
  ];

  const pastEvents = [
    {
      title: "AI in Gaming Summit 2024",
      type: "Conference",
      date: "2024-11-10",
      location: "Los Angeles, CA",
      description: "Exploring artificial intelligence applications in modern gaming."
    },
    {
      title: "Indie Game Showcase 2024",
      type: "Showcase",
      date: "2024-10-15",
      location: "Seattle, WA",
      description: "Independent game developers presented their latest creations."
    }
  ];

  const tabsData = [
    {
      label: "Upcoming Events",
      content: (
        <div className="grid grid-2">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="event-card">
              <div className="event-header">
                <h3>{event.title}</h3>
                <span className="event-type">{event.type}</span>
              </div>
              <div className="event-details">
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p className="event-description">{event.description}</p>
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
          {pastEvents.map((event, index) => (
            <Card key={index} className="event-card">
              <div className="event-header">
                <h3>{event.title}</h3>
                <span className="event-type">{event.type}</span>
              </div>
              <div className="event-details">
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p className="event-description">{event.description}</p>
              </div>
              <button className="btn btn-secondary">View Summary</button>
            </Card>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="tech-events-page">
      <div className="container">
        <h1 className="section-title gradient-text">Tech Events</h1>
        <Tabs tabs={tabsData} />
      </div>
    </div>
  );
};

export default TechEvents;