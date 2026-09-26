import { useState } from 'react'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { initialFaculty } from '../services/api'
import DataTable from '../components/DataTable'
import Modal from '../components/Modal'
import Toast from '../components/Toast'
import ConfirmDialog from '../components/ConfirmDialog'
const empty = { id: '', name: '', department: '', email: '', status: 'Active' }
export default function Faculty() {
  const [data,setData] = useState(initialFaculty); const [modal,setModal] = useState(false); const [form,setForm] = useState(empty); const [edit,setEdit] = useState(false); const [del,setDel] = useState(null); const [toast,setToast] = useState('')
  function save(e){e.preventDefault(); if(edit)setData(d=>d.map(x=>x.id===form.id?form:x));else setData(d=>[{...form,id:`FAC-${String(Date.now()).slice(-3)}`},...d]);setModal(false);setToast('Faculty record saved.')}
  const columns=[{key:'id',label:'FACULTY ID'},{key:'name',label:'NAME'},{key:'department',label:'DEPARTMENT'},{key:'email',label:'EMAIL'},{key:'status',label:'STATUS',render:v=><span className={`status ${v==='Active'?'enrolled':'pending'}`}>{v}</span>},{key:'actions',label:'ACTIONS',render:(_,r)=><div className="row-actions"><button onClick={()=>{setForm(r);setEdit(true);setModal(true)}}><Pencil size={15}/></button><button onClick={()=>setDel(r)}><Trash2 size={15}/></button></div>}]
  return <div className="page-stack"><div className="page-heading"><div><h1>Faculty</h1><p>Maintain faculty profiles and department assignments.</p></div><button className="btn-primary" onClick={()=>{setForm(empty);setEdit(false);setModal(true)}}><Plus size={17}/> Add Faculty</button></div><section className="panel"><DataTable columns={columns} rows={data}/></section>
  {modal&&<Modal title={edit?'Edit Faculty':'Add Faculty'} onClose={()=>setModal(false)}><form className="modal-form" onSubmit={save}><label>Full name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label>Department<input required value={form.department} onChange={e=>setForm({...form,department:e.target.value})}/></label><label>Email<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label><label>Status<select value={form.status} onChange={e=>setForm({...form,status:e.target.value})}><option>Active</option><option>On Leave</option></select></label><div className="modal-actions"><button type="button" className="btn-secondary" onClick={()=>setModal(false)}>Cancel</button><button className="btn-primary">Save</button></div></form></Modal>}
  {del&&<ConfirmDialog message={`Delete ${del.name} from faculty records?`} onCancel={()=>setDel(null)} onConfirm={()=>{setData(d=>d.filter(x=>x.id!==del.id));setDel(null);setToast('Faculty removed.')}}/>}<Toast message={toast} onClose={()=>setToast('')}/></div>
}
