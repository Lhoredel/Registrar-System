import { useState } from 'react'
import { Check, XCircle } from 'lucide-react'
import { initialStudents } from '../services/api'
import DataTable from '../components/DataTable'
import Toast from '../components/Toast'
export default function Enrollment(){
 const [data,setData]=useState(initialStudents.filter(s=>s.status==='Pending'));const [toast,setToast]=useState('')
 const columns=[{key:'id',label:'STUDENT ID',render:v=><span className="green-text">{v}</span>},{key:'name',label:'STUDENT NAME'},{key:'program',label:'PROGRAM'},{key:'date',label:'SUBMITTED'},{key:'actions',label:'REVIEW',render:(_,r)=><div className="row-actions"><button className="approve" title="Approve" onClick={()=>{setData(d=>d.filter(x=>x.id!==r.id));setToast(`${r.name} enrollment approved (demo).`)}}><Check size={16}/></button><button title="Reject" onClick={()=>{setData(d=>d.filter(x=>x.id!==r.id));setToast(`${r.name} enrollment returned for correction (demo).`)}}><XCircle size={16}/></button></div>}]
 return <div className="page-stack"><div className="page-heading"><div><h1>Enrollment</h1><p>Review and process pending semester enrollment applications.</p></div><span className="count-chip">{data.length} pending reviews</span></div><section className="panel"><DataTable columns={columns} rows={data} empty="There are no pending enrollment records."/></section><Toast message={toast} onClose={()=>setToast('')}/></div>
}
