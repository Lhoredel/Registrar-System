import Modal from './Modal'
export default function ConfirmDialog({ title = 'Confirm action', message, onCancel, onConfirm }) {
  return <Modal title={title} onClose={onCancel}><p className="confirm-message">{message}</p><div className="modal-actions"><button className="btn-secondary" onClick={onCancel}>Cancel</button><button className="btn-danger" onClick={onConfirm}>Confirm</button></div></Modal>
}
