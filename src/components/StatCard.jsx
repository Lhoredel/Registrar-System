export default function StatCard({ title, value, note, icon: Icon, trend = 'up' }) {
  return <article className="stat-card">
    <div className="stat-top"><span>{title}</span><div className="stat-icon"><Icon size={19} /></div></div>
    <strong className="stat-value">{value}</strong>
    <div className={`stat-note ${trend === 'down' ? 'muted' : ''}`}><b>{trend === 'down' ? '↓' : '↑'}</b> {note}</div>
  </article>
}
