import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const location = useLocation()
  return <div className="app-shell">
    <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    <div className="main-area">
      <Header onMenu={() => setMenuOpen(true)} search={search} setSearch={setSearch} />
      <main className="page-content"><Outlet context={{ globalSearch: search, clearGlobalSearch: () => setSearch('') }} /></main>
      <footer className="app-footer">© 2026 IDSC Registrar Portal · Ligao City, Albay</footer>
    </div>
  </div>
}
