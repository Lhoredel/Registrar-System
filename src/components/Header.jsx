import { Bell, Menu, Search } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Header({ onMenu, search, setSearch }) {
  const { user } = useAuth()
  return <header className="topbar">
    <button className="mobile-menu icon-button" onClick={onMenu} aria-label="Open menu"><Menu size={21} /></button>
    <div className="global-search"><Search size={17} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search students, transactions, courses..." /></div>
    <div className="topbar-right">
      <button className="icon-button notification" aria-label="Notifications"><Bell size={19} /><span /></button>
      <div className="profile">
        <div className="avatar">AR</div>
        <div><strong>{user?.name || 'Admin Registrar'}</strong><small>{user?.role || 'Registrar Admin'}</small></div>
      </div>
    </div>
  </header>
}
