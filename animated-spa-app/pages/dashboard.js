export function Dashboard() {
  return `
    <section>
      <h1>User Dashboard</h1>
      <p>Welcome back! Here is a quick overview of your activity:</p>
      <ul>
        <li>📊 Total Projects: 12</li>
        <li>✅ Completed Tasks: 87</li>
        <li>📅 Upcoming Deadlines: 4</li>
      </ul>
      <button onclick="alert('Viewing reports...')">View Reports</button>
      <button onclick="alert('Settings clicked')">Settings</button>
    </section>
  `;
}
