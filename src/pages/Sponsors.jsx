import Card from '../components/Card';
import { FaYoutube } from 'react-icons/fa';
import '../index.css'
const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum",
      sponsors: [
        { name: "SLT Mobitel", logo: "https://yt3.googleusercontent.com/coOC-_83XD6gCx4vOWfs_mOIV3xqDNf2ufPzOC_DhPBbNUVPCoZsaB3f421bq7NN6_Kpf0Y3Kw=s900-c-k-c0x00ffffff-no-rj" },
        { name: "NANOTEK Computer Solutions", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjiqQieKfS-RLsZgOmiYt62UJkJaKUbwKBiA&s" }
      ]
    },
    {
      tier: "Gold",
      sponsors: [
        { name: "Perera & Sons", logo: "https://pereraandsons.com/assets/img/logo.svg" },
        { name: "Dilmah", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAHmjWXVPuFwaiI0xXSKWjHBMZXrQnj0vbQ&s" },
        { name: "iDealz", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYr9VvL4rvQgel3dwRTQ2VIfPi9M3Q0njhg&s" }
      ]
    },
    {
      tier: "Media",
      sponsors: [
        { name: "Maniya Streams", logo: "https://yt3.googleusercontent.com/ytc/AIdro_m6AQo6Uduqs_MGlYhZmcMVWrHuyV_-DB2171q6fQrDCSI=s900-c-k-c0x00ffffff-no-rj", url: "https://www.youtube.com/@ManiyaStreams" },
        { name: "Lion Kolla", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1xwNgNPRv6KRmVNG6lcRNpq82zm4BNFuJA&s", url: "https://www.youtube.com/@LionKolla" },
        { name: "COC Sinhalen", logo: "https://yt3.googleusercontent.com/lSwPImFGq_Yh-7FuFGaf3uJ4Koh6tsQK-szX9OYvHb5_5zmxHPTU-es0hkA-L0Vtkbee68Imqw=s900-c-k-c0x00ffffff-no-rj", url: "https://www.youtube.com/@COCSinhalen" },
        { name: "Hashano_G", logo: "https://yt3.googleusercontent.com/fRRHqVSlsZVJHQKRIXZOtMGoWtmyghkthTXekqUhEVrZsklDu_qiqt4f4OyaqvFpYXnaeDcN6g=s900-c-k-c0x00ffffff-no-rj", url: "https://www.youtube.com/@HashanoG" }
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
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVfGv5Ln3_Lhc1ox4d_xMdEiEq6pLVZyeXQ&s" alt="TechGiant Corp" />
              <h3>Sri Lanka Institute of Information Technology - SLIIT</h3>
              <p>Leading University for Private Sector</p>
            </Card>
            <Card className="featured-sponsor">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6afMku8Z-tFRG9s_9C7EvUm80lllyBrr33g&s" alt="Gaming Pro" />
              <h3>Trace Expert City - Colombo</h3>
              <p>The Leading profesional Technological city in heart of Colombo</p>
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
                  <h4>
                    {sponsor.name}{" "}
                    {tier.tier === "Streamers" && sponsor.url && (
                      <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="youtube-icon"/>
                      </a>
                    )}
                  </h4>
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