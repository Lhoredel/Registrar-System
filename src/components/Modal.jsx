import { X } from 'lucide-react'
export default function Modal({ title, onClose, children, wide = false }) {
  return <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <section className={`modal ${wide ? 'modal-wide' : ''}`}>
      <div className="modal-header"><h2>{title}</h2><button className="icon-button" onClick={onClose}><X size={19} /></button></div>
      {children}
    </section>
  </div>
}
