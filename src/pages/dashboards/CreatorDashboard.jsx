import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';

const CreatorDashboard = () => {
  const sidebarItems = [
    { path: '/dashboard/creator', label: 'Overview', icon: '📊' },
    { path: '/dashboard/creator/submit', label: 'Submit Article', icon: '✍️' },
    { path: '/dashboard/creator/drafts', label: 'Drafts', icon: '📄' },
    { path: '/dashboard/creator/history', label: 'Submissions', icon: '📋' },
  ];

  const drafts = [
    { id: 1, title: 'Valorant Agent Tier List 2025', lastEdited: '2025-01-14', wordCount: '1,247' },
    { id: 2, title: 'Mobile Gaming Trends', lastEdited: '2025-01-13', wordCount: '856' },
  ];

  const submissions = [
    { id: 1, title: 'PUBG Tournament Analysis', status: 'Published', date: '2025-01-10', views: '3,241' },
    { id: 2, title: 'Free Fire Strategy Guide', status: 'Under Review', date: '2025-01-12', views: '0' },
    { id: 3, title: 'League of Legends Patch Notes', status: 'Rejected', date: '2025-01-08', views: '0' },
  ];

  return (
    <div className="dashboard">
      <Sidebar items={sidebarItems} />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="gradient-text">Creator Dashboard</h1>
          <p>Submit articles, manage drafts, and track your content</p>
        </div>

        <div className="dashboard-stats">
          <div className="grid grid-4">
            <Card className="stat-card">
              <h3>Published Articles</h3>
              <div className="stat-number">24</div>
              <p className="stat-change positive">+3 this month</p>
            </Card>
            <Card className="stat-card">
              <h3>Total Views</h3>
              <div className="stat-number">45.2K</div>
              <p className="stat-change positive">+18% this month</p>
            </Card>
            <Card className="stat-card">
              <h3>Drafts</h3>
              <div className="stat-number">7</div>
              <p className="stat-change neutral">2 ready to submit</p>
            </Card>
            <Card className="stat-card">
              <h3>Approval Rate</h3>
              <div className="stat-number">89%</div>
              <p className="stat-change positive">+5% this month</p>
            </Card>
          </div>
        </div>

        <div className="dashboard-sections">
          <section className="dashboard-section">
            <Card>
              <h2>Submit New Article</h2>
              <form className="article-form">
                <div className="form-group">
                  <label htmlFor="articleTitle">Article Title</label>
                  <input
                    type="text"
                    id="articleTitle"
                    className="form-input"
                    placeholder="Enter article title..."
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="gameCategory">Game Category</label>
                  <select id="gameCategory" className="form-input">
                    <option value="">Select a game...</option>
                    <option value="valorant">Valorant</option>
                    <option value="lol">League of Legends</option>
                    <option value="pubg">PUBG</option>
                    <option value="freefire">Free Fire</option>
                    <option value="codm">Call of Duty Mobile</option>
                    <option value="fortnite">Fortnite</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="articleContent">Article Content</label>
                  <textarea
                    id="articleContent"
                    className="form-textarea"
                    rows="10"
                    placeholder="Write your article content..."
                  ></textarea>
                </div>
                
                <div className="form-actions">
                  <button type="button" className="btn btn-secondary">Save Draft</button>
                  <button type="submit" className="btn btn-primary">Submit for Review</button>
                </div>
              </form>
            </Card>
          </section>

          <section className="dashboard-section">
            <Card>
              <h2>Draft Articles</h2>
              <div className="draft-list">
                {drafts.map(draft => (
                  <div key={draft.id} className="draft-item">
                    <div className="draft-info">
                      <h4>{draft.title}</h4>
                      <p>Last edited: {draft.lastEdited} • {draft.wordCount} words</p>
                    </div>
                    <div className="draft-actions">
                      <button className="btn btn-sm btn-secondary">Edit</button>
                      <button className="btn btn-sm btn-primary">Submit</button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          <section className="dashboard-section">
            <Card>
              <h2>Submission History</h2>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Submit Date</th>
                      <th>Views</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map(submission => (
                      <tr key={submission.id}>
                        <td>{submission.title}</td>
                        <td>
                          <span className={`status-badge ${submission.status.toLowerCase().replace(' ', '-')}`}>
                            {submission.status}
                          </span>
                        </td>
                        <td>{submission.date}</td>
                        <td>{submission.views}</td>
                        <td>
                          <button className="btn btn-sm btn-secondary">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;