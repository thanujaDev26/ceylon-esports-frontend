import Card from '../components/Card';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="section-title gradient-text">About GameHub</h1>
        
        <section className="mission-section">
          <Card className="mission-card">
            <h2>Our Mission</h2>
            <p>
              GameHub is dedicated to building the ultimate gaming community where players, 
              content creators, sponsors, and fans come together to celebrate the world of esports. 
              We provide comprehensive coverage of tournaments, breaking news, and opportunities 
              for everyone to participate in the gaming ecosystem.
            </p>
          </Card>
        </section>

        <section className="vision-section">
          <h2 className="subsection-title">Community Vision</h2>
          <div className="grid grid-3">
            <Card className="vision-card">
              <h3>Inclusive Gaming</h3>
              <p>Creating an environment where gamers of all backgrounds and skill levels feel welcome and valued.</p>
            </Card>
            <Card className="vision-card">
              <h3>Competitive Excellence</h3>
              <p>Supporting the highest level of competitive gaming through fair tournaments and professional coverage.</p>
            </Card>
            <Card className="vision-card">
              <h3>Innovation Focus</h3>
              <p>Embracing new technologies and trends that shape the future of gaming and esports.</p>
            </Card>
          </div>
        </section>

        <section className="team-section">
          <h2 className="subsection-title">Our Team</h2>
          <div className="grid grid-3">
            <Card className="team-member">
              <img src="https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg" alt="Team Member" className="team-photo" />
              <h3>Alex Chen</h3>
              <p className="team-role">Founder & CEO</p>
              <p>Former professional esports player with 10+ years in the gaming industry.</p>
            </Card>
            <Card className="team-member">
              <img src="https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg" alt="Team Member" className="team-photo" />
              <h3>Sarah Johnson</h3>
              <p className="team-role">Head of Content</p>
              <p>Gaming journalist and content creator with expertise in esports coverage.</p>
            </Card>
            <Card className="team-member">
              <img src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg" alt="Team Member" className="team-photo" />
              <h3>Mike Rodriguez</h3>
              <p className="team-role">Tournament Director</p>
              <p>Event management specialist with experience in major gaming tournaments.</p>
            </Card>
          </div>
        </section>

        <section className="contact-section">
          <Card className="contact-card">
            <h2>Contact Information</h2>
            <div className="contact-details">
              <div className="contact-item">
                <h4>General Inquiries</h4>
                <p>Email: hello@gamehub.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <h4>Business Partnerships</h4>
                <p>Email: partnerships@gamehub.com</p>
                <p>Phone: +1 (555) 123-4568</p>
              </div>
              <div className="contact-item">
                <h4>Press & Media</h4>
                <p>Email: press@gamehub.com</p>
                <p>Phone: +1 (555) 123-4569</p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;