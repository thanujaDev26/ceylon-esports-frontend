import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';

const SponsorDashboard = () => {
  const sidebarItems = [
    { path: '/dashboard/sponsor', label: 'Overview', icon: '📊' },
    { path: '/dashboard/sponsor/posts', label: 'Manage Posts', icon: '📝' },
    { path: '/dashboard/sponsor/ads', label: 'Marketing Ads', icon: '📢' },
    { path: '/dashboard/sponsor/analytics', label: 'Engagement', icon: '📈' },
  ];

  const blogPosts = [
    { id: 1, title: 'Gaming Hardware Trends 2025', status: 'Published', views: '2,847', date: '2025-01-10' },
    { id: 2, title: 'Esports Sponsorship Guide', status: 'Draft', views: '0', date: '2025-01-12' },
    { id: 3, title: 'Tournament Marketing Best Practices', status: 'Published', views: '1,234', date: '2025-01-08' },
  ];

  return (
    <div className="dashboard">
      <Sidebar items={sidebarItems} />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="gradient-text">Sponsor Dashboard</h1>
          <p>Manage your content, ads, and track engagement</p>
        </div>

        <div className="dashboard-stats">
          <div className="grid grid-4">
            <Card className="stat-card">
              <h3>Total Reach</h3>
              <div className="stat-number">847K</div>
              <p className="stat-change positive">+15% this month</p>
            </Card>
            <Card className="stat-card">
              <h3>Engagement Rate</h3>
              <div className="stat-number">4.2%</div>
              <p className="stat-change positive">+0.8% this month</p>
            </Card>
            <Card className="stat-card">
              <h3>Active Campaigns</h3>
              <div className="stat-number">5</div>
              <p className="stat-change neutral">2 pending</p>
            </Card>
            <Card className="stat-card">
              <h3>Blog Posts</h3>
              <div className="stat-number">12</div>
              <p className="stat-change positive">+3 this month</p>
            </Card>
          </div>
        </div>

        <div className="dashboard-sections">
          <section className="dashboard-section">
            <Card>
              <div className="section-header">
                <h2>Create Blog Post</h2>
                <button className="btn btn-primary">New Post</button>
              </div>
              <form className="post-form">
                <div className="form-group">
                  <label htmlFor="postTitle">Post Title</label>
                  <input
                    type="text"
                    id="postTitle"
                    className="form-input"
                    placeholder="Enter post title..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="postContent">Content</label>
                  <textarea
                    id="postContent"
                    className="form-textarea"
                    rows="6"
                    placeholder="Write your post content..."
                  ></textarea>
                </div>
                <div className="form-actions">
                  <button type="button" className="btn btn-secondary">Save Draft</button>
                  <button type="submit" className="btn btn-primary">Publish</button>
                </div>
              </form>
            </Card>
          </section>

          <section className="dashboard-section">
            <Card>
              <h2>Manage Blog Posts</h2>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Views</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogPosts.map(post => (
                      <tr key={post.id}>
                        <td>{post.title}</td>
                        <td>
                          <span className={`status-badge ${post.status.toLowerCase()}`}>
                            {post.status}
                          </span>
                        </td>
                        <td>{post.views}</td>
                        <td>{post.date}</td>
                        <td>
                          <button className="btn btn-sm btn-secondary">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          <section className="dashboard-section">
            <Card>
              <h2>Marketing Ads</h2>
              <div className="ad-upload">
                <div className="upload-area">
                  <p>Drop your ad files here or click to upload</p>
                  <button className="btn btn-primary">Upload Ad</button>
                </div>
                <div className="ad-specs">
                  <h4>Ad Specifications:</h4>
                  <ul>
                    <li>Banner: 728x90px</li>
                    <li>Square: 300x300px</li>
                    <li>Vertical: 160x600px</li>
                    <li>Formats: JPG, PNG, GIF</li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SponsorDashboard;