import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Plus, Download, Pencil, Trash2 } from 'lucide-react'
import { initialStudents } from '../services/api'
import DataTable from '../components/DataTable'
import Modal from '../components/Modal'
import ConfirmDialog from '../components/ConfirmDialog'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import Toast from '../components/Toast'

const blank = { id: '', name: '', program: 'BSIT', year: '1st Year', status: 'Pending', date: 'Oct 24, 2026' }
export default function Students() {
  const { globalSearch } = useOutletContext()
  const [students, setStudents] = useState(initialStudents)
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState(blank)
  const [editing, setEditing] = useState(false)
  const [deleting, setDeleting] = useState(null)
  const [toast, setToast] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 6
  const filtered = useMemo(() => students.filter(s => `${s.id} ${s.name} ${s.program} ${s.status}`.toLowerCase().includes(`${search} ${globalSearch}`.toLowerCase().trim())), [students, search, globalSearch])
  const rows = filtered.slice((page - 1) * perPage, page * perPage)
  function save(e) {
    e.preventDefault()
    if (!form.id || !form.name) return setToast('Student ID and full name are required.')
    if (editing) setStudents(old => old.map(s => s.id === form.id ? form : s))
    else setStudents(old => [form, ...old])
    setModal(false); setToast(editing ? 'Student record updated.' : 'Student record added.')
  }
  const columns = [
    { key: 'id', label: 'STUDENT ID', render: v => <span className="green-text">{v}</span> },
    { key: 'name', label: 'FULL NAME' }, { key: 'program', label: 'PROGRAM' }, { key: 'year', label: 'YEAR LEVEL' },
    { key: 'status', label: 'STATUS', render: v => <span className={`status ${v.toLowerCase()}`}>{v}</span> },
    { key: 'actions', label: 'ACTIONS', render: (_, row) => <div className="row-actions"><button onClick={() => { setForm(row); setEditing(true); setModal(true) }} title="Edit"><Pencil size={15}/></button><button onClick={() => setDeleting(row)} title="Delete"><Trash2 size={15}/></button></div> }
  ]
  return <div className="page-stack"><div className="page-heading"><div><h1>Students</h1><p>Manage student profiles, identifiers, and academic status.</p></div><button className="btn-primary" onClick={() => { setForm({ ...blank, id: `IDSC-26-${String(Date.now()).slice(-4)}` }); setEditing(false); setModal(true) }}><Plus size={17}/> Add Student</button></div>
    <section className="panel"><div className="toolbar"><SearchBar value={search} onChange={v => {setSearch(v);setPage(1)}} placeholder="Search student ID, name, program..." /><button className="btn-secondary" onClick={() => setToast('Export feature connects to your backend/report service.')}><Download size={16}/> Export</button></div>
      <DataTable columns={columns} rows={rows} /><Pagination page={page} pages={Math.max(1, Math.ceil(filtered.length / perPage))} setPage={setPage}/>
    </section>
    {modal && <Modal title={editing ? 'Edit Student' : 'Add Student'} onClose={() => setModal(false)}><form className="modal-form" onSubmit={save}>
      <label>Student ID<input value={form.id} onChange={e => setForm({...form,id:e.target.value})} required disabled={editing}/></label>
      <label>Full name<input value={form.name} onChange={e => setForm({...form,name:e.target.value})} required /></label>
      <div className="form-grid"><label>Program<select value={form.program} onChange={e => setForm({...form,program:e.target.value})}>{['BSIT','BSCS','BA','BSED','BEED'].map(x=><option>{x}</option>)}</select></label><label>Year level<select value={form.year} onChange={e => setForm({...form,year:e.target.value})}>{['1st Year','2nd Year','3rd Year','4th Year'].map(x=><option>{x}</option>)}</select></label></div>
      <label>Status<select value={form.status} onChange={e => setForm({...form,status:e.target.value})}><option>Enrolled</option><option>Pending</option><option>Inactive</option></select></label>
      <div className="modal-actions"><button type="button" className="btn-secondary" onClick={() => setModal(false)}>Cancel</button><button className="btn-primary">Save Student</button></div>
    </form></Modal>}
    {deleting && <ConfirmDialog message={`Delete student record for ${deleting.name}?`} onCancel={() => setDeleting(null)} onConfirm={() => {setStudents(s => s.filter(x => x.id !== deleting.id));setDeleting(null);setToast('Student record deleted.')}}/>}
    <Toast message={toast} onClose={() => setToast('')}/>
  </div>
}
