import { NavLink } from 'react-router-dom'
import { BookOpen, CalendarDays, ChartNoAxesColumn, ClipboardList, Folder, GraduationCap, House, Layers, Settings, Users, X } from 'lucide-react'

const navItems = [
  ['Dashboard', '/', House],
  ['Students', '/students', Users],
  ['Enrollment', '/enrollment', Folder],
  ['Grades', '/grades', BookOpen],
  ['Schedules', '/scheduling', CalendarDays],
  ['Subjects', '/subjects', Layers],
  ['Faculty', '/faculty', GraduationCap],
  ['Reports', '/reports', ChartNoAxesColumn],
  ['Settings', '/settings', Settings]
]

export default function Sidebar({ open, onClose }) {
  return <>
    {open && <button className="mobile-scrim" onClick={onClose} aria-label="Close menu" />}
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="brand">
        <div className="seal"><span>IDSC</span><small>LIGAO CITY</small></div>
        <div><strong>IDSC Registrar</strong><small>LIGAO CITY</small></div>
        <button className="sidebar-close icon-button" onClick={onClose}><X size={18} /></button>
      </div>
      <nav className="nav-list">
        {navItems.map(([label, to, Icon]) => <NavLink key={to} to={to} end={to === '/'} onClick={onClose} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <Icon size={18} strokeWidth={2} /><span>{label}</span>{label === 'Dashboard' && <i />}
        </NavLink>)}
      </nav>
      <div className="sidebar-bottom">Academic Year: 2025-2026<br />Semester: 2nd Semester</div>
    </aside>
  </>
}
