import { useOutletContext } from 'react-router-dom'
import { CalendarDays, CheckCircle, Clock3, Users, ArrowUpRight, ChevronRight } from 'lucide-react'
import { initialStudents } from '../services/api'
import StatCard from '../components/StatCard'
import DataTable from '../components/DataTable'

const programStats = [{ name: 'BSIT', count: 584, width: 40 }, { name: 'BSCS', count: 342, width: 24 }, { name: 'BA', count: 289, width: 20 }, { name: 'BSED', count: 210, width: 15 }, { name: 'BEED', count: 142, width: 10 }]
const deadlines = [
  { day: '15', month: 'NOV', title: 'Midterm Grade Encoding Deadline', desc: 'Faculty submission of official midterm marks via portal.', time: '05:00 PM' },
  { day: '28', month: 'NOV', title: 'Late Semester Registration Close', desc: 'Last day for students with approved extensions to settle accounts.', time: '11:59 PM' },
  { day: '05', month: 'DEC', title: 'Institutional Faculty Meeting', desc: 'Albay registrar coordination for upcoming evaluation and accreditation.', time: '09:00 AM' }
]

export default function Dashboard() {
  const { globalSearch } = useOutletContext()
  const filtered = initialStudents.filter(s => `${s.id} ${s.name} ${s.program} ${s.status}`.toLowerCase().includes(globalSearch.toLowerCase())).slice(0, 5)
  const columns = [
    { key: 'id', label: 'STUDENT ID', render: v => <span className="green-text">{v}</span> },
    { key: 'name', label: 'NAME' }, { key: 'program', label: 'PROGRAM' },
    { key: 'status', label: 'STATUS', render: v => <span className={`status ${v.toLowerCase()}`}>{v}</span> },
    { key: 'date', label: 'DATE' }
  ]
  return <div className="dashboard-page">
    <div className="page-heading"><div><h1>Welcome back, Registrar!</h1><p>Manage student records and semester enrollments from your administrative desk.</p></div><div className="date-chip"><CalendarDays size={16} /> October 24, 2026</div></div>
    <div className="stats-grid">
      <StatCard title="TOTAL STUDENTS" value="3,247" note="+124 new from last sem" icon={Users} />
      <StatCard title="ENROLLED THIS SEMESTER" value="1,856" note="85% of target population" icon={CheckCircle} />
      <StatCard title="PENDING ENROLLMENTS" value="142" note="Requires verification review" icon={Clock3} trend="down" />
      <StatCard title="FACULTY MEMBERS" value="87" note="Active teaching status" icon={Users} />
    </div>
    <div className="dashboard-middle">
      <section className="panel recent-panel"><div className="panel-heading"><h2>Recent Enrollments</h2><a href="/enrollment">View All <ChevronRight size={15} /></a></div><DataTable columns={columns} rows={filtered} /></section>
      <section className="panel program-panel"><div className="panel-heading"><h2>Enrollment by Program</h2></div><div className="program-list">{programStats.map(p => <div className="program-row" key={p.name}><b>{p.name}</b><div className="bar-track"><i style={{ width: `${p.width * 2.5}%` }} /></div><strong>{p.count}</strong></div>)}</div><div className="program-total"><span>Chart total accounted</span><b>1,567 Students</b></div></section>
    </div>
    <section className="panel deadlines-panel"><div className="panel-heading"><h2><CalendarDays size={18} /> Upcoming Academic Schedule &amp; Deadlines</h2><span>First Semester AY 2026-2027</span></div><div className="deadline-list">{deadlines.map(d => <div className="deadline-row" key={d.title}><div className="deadline-date"><b>{d.day}</b><small>{d.month}</small></div><div className="deadline-info"><strong>{d.title}</strong><p>{d.desc}</p></div><div className="deadline-time"><Clock3 size={14} /> {d.time}</div></div>)}</div></section>
  </div>
}
