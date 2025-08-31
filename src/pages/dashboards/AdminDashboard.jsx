import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';

const AdminDashboard = () => {
  const sidebarItems = [
    { path: '/dashboard/admin', label: 'Overview', icon: '📊' },
    { path: '/dashboard/admin/users', label: 'User Management', icon: '👥' },
    { path: '/dashboard/admin/content', label: 'Content Approval', icon: '📝' },
    { path: '/dashboard/admin/analytics', label: 'Analytics', icon: '📈' },
  ];

  const users = [
    { id: 1, username: 'pro_gamer_01', email: 'user1@example.com', role: 'User', status: 'Active' },
    { id: 2, username: 'content_creator_x', email: 'creator@example.com', role: 'Creator', status: 'Active' },
    { id: 3, username: 'sponsor_rep', email: 'sponsor@example.com', role: 'Sponsor', status: 'Pending' },
  ];

  const pendingContent = [
    { id: 1, title: 'New Valorant Meta Analysis', author: 'content_creator_x', date: '2025-01-15' },
    { id: 2, title: 'Mobile Legends Tournament Recap', author: 'esports_writer', date: '2025-01-14' },
    { id: 3, title: 'CS2 Update Review', author: 'game_reviewer', date: '2025-01-13' },
  ];

  return (
    <div className="dashboard">
      <Sidebar items={sidebarItems} />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="gradient-text">Admin Dashboard</h1>
          <p>Manage users, content, and platform analytics</p>
        </div>

        <div className="dashboard-stats">
          <div className="grid grid-4">
            <Card className="stat-card">
              <h3>Total Users</h3>
              <div className="stat-number">2,847</div>
              <p className="stat-change positive">+12% this month</p>
            </Card>
            <Card className="stat-card">
              <h3>Active Tournaments</h3>
              <div className="stat-number">15</div>
              <p className="stat-change positive">+3 new</p>
            </Card>
            <Card className="stat-card">
              <h3>Pending Reviews</h3>
              <div className="stat-number">8</div>
              <p className="stat-change neutral">2 urgent</p>
            </Card>
            <Card className="stat-card">
              <h3>Monthly Revenue</h3>
              <div className="stat-number">$45,230</div>
              <p className="stat-change positive">+18% this month</p>
            </Card>
          </div>
        </div>

        <div className="dashboard-sections">
          <section className="dashboard-section">
            <Card>
              <h2>User Management</h2>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                          <span className={`status-badge ${user.status.toLowerCase()}`}>
                            {user.status}
                          </span>
                        </td>
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
              <h2>Content Approvals</h2>
              <div className="approval-list">
                {pendingContent.map(content => (
                  <div key={content.id} className="approval-item">
                    <div className="approval-info">
                      <h4>{content.title}</h4>
                      <p>By: {content.author} • {content.date}</p>
                    </div>
                    <div className="approval-actions">
                      <button className="btn btn-sm btn-primary">Approve</button>
                      <button className="btn btn-sm btn-secondary">Reject</button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;