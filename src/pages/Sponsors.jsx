import Card from '../components/Card';

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum",
      sponsors: [
        { name: "TechGiant Corp", logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg" },
        { name: "Gaming Pro", logo: "https://images.pexels.com/photos/159868/computer-mouse-wireless-computer-silver-159868.jpeg" }
      ]
    },
    {
      tier: "Gold",
      sponsors: [
        { name: "StreamCorp", logo: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg" },
        { name: "GamerHub", logo: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg" },
        { name: "EsportsTech", logo: "https://images.pexels.com/photos/21696/pexels-photo.jpg" }
      ]
    },
    {
      tier: "Silver",
      sponsors: [
        { name: "GameStore", logo: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg" },
        { name: "TechStart", logo: "https://images.pexels.com/photos/1720229/pexels-photo-1720229.jpeg" },
        { name: "ProGaming", logo: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg" },
        { name: "StreamTech", logo: "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg" }
      ]
    }
  ];

  return (
    <div className="sponsors-page">
      <div className="container">
        <h1 className="section-title gradient-text">Our Sponsors</h1>
        
        <section className="featured-sponsors">
          <h2 className="subsection-title">Featured Partners</h2>
          <div className="featured-sponsor-grid">
            <Card className="featured-sponsor">
              <img src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg" alt="TechGiant Corp" />
              <h3>TechGiant Corp</h3>
              <p>Leading technology innovation in gaming hardware and software solutions.</p>
            </Card>
            <Card className="featured-sponsor">
              <img src="https://images.pexels.com/photos/159868/computer-mouse-wireless-computer-silver-159868.jpeg" alt="Gaming Pro" />
              <h3>Gaming Pro</h3>
              <p>Professional gaming equipment and accessories for esports athletes.</p>
            </Card>
          </div>
        </section>

        {sponsorTiers.map((tier, tierIndex) => (
          <section key={tierIndex} className="sponsor-tier">
            <h2 className="tier-title">
              <span className={`tier-badge ${tier.tier.toLowerCase()}`}>{tier.tier}</span>
              Sponsors
            </h2>
            <div className="sponsor-grid">
              {tier.sponsors.map((sponsor, index) => (
                <Card key={index} className="sponsor-card">
                  <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                  <h4>{sponsor.name}</h4>
                </Card>
              ))}
            </div>
          </section>
        ))}

        <section className="sponsorship-info">
          <Card className="sponsorship-cta">
            <h2>Become a Sponsor</h2>
            <p>Join our community of partners and support the future of esports.</p>
            <button className="btn btn-primary">Learn More</button>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Sponsors;