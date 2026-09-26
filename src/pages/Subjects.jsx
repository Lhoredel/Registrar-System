import { useState } from 'react'
import { Plus } from 'lucide-react'
import { initialSubjects } from '../services/api'
import DataTable from '../components/DataTable'
import Modal from '../components/Modal'
import Toast from '../components/Toast'
const blank={code:'',title:'',program:'BSIT',units:3,year:'1st Year'}
export default function Subjects(){const[data,setData]=useState(initialSubjects);const[modal,setModal]=useState(false);const[form,setForm]=useState(blank);const[toast,setToast]=useState('')
 function save(e){e.preventDefault();setData(d=>[form,...d]);setModal(false);setToast('Subject added.')}
 const columns=[{key:'code',label:'SUBJECT CODE'},{key:'title',label:'SUBJECT TITLE'},{key:'program',label:'PROGRAM'},{key:'units',label:'UNITS'},{key:'year',label:'YEAR LEVEL'}]
 return <div className="page-stack"><div className="page-heading"><div><h1>Subjects</h1><p>Manage curriculum subjects and program assignments.</p></div><button className="btn-primary" onClick={()=>{setForm(blank);setModal(true)}}><Plus size={17}/> Add Subject</button></div><section className="panel"><DataTable columns={columns} rows={data}/></section>{modal&&<Modal title="Add Subject" onClose={()=>setModal(false)}><form className="modal-form" onSubmit={save}><label>Subject code<input required value={form.code} onChange={e=>setForm({...form,code:e.target.value})}/></label><label>Subject title<input required value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/></label><div className="form-grid"><label>Program<select value={form.program} onChange={e=>setForm({...form,program:e.target.value})}>{['BSIT','BSCS','BA','BSED','BEED'].map(x=><option>{x}</option>)}</select></label><label>Units<input type="number" min="1" max="6" value={form.units} onChange={e=>setForm({...form,units:Number(e.target.value)})}/></label></div><label>Year level<select value={form.year} onChange={e=>setForm({...form,year:e.target.value})}>{['1st Year','2nd Year','3rd Year','4th Year'].map(x=><option>{x}</option>)}</select></label><div className="modal-actions"><button type="button" className="btn-secondary" onClick={()=>setModal(false)}>Cancel</button><button className="btn-primary">Save Subject</button></div></form></Modal>}<Toast message={toast} onClose={()=>setToast('')}/></div>
}
