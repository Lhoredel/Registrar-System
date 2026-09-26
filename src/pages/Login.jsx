import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, LockKeyhole, Mail, BookOpen } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Toast from '../components/Toast'

export default function Login() {
  const [email, setEmail] = useState('registrar@idsc.edu.ph')
  const [password, setPassword] = useState('registrar123')
  const [show, setShow] = useState(false)
  const [keep, setKeep] = useState(true)
  const [toast, setToast] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  function submit(e) {
    e.preventDefault()
    const result = login(email, password)
    if (result.ok) navigate('/')
    else setToast(result.message)
  }

  return <div className="login-page">
    <div className="login-glow glow-one" /><div className="login-glow glow-two" />
    <section className="login-stage">
      <div className="login-card">
        <div className="login-seal"><span>IDSC</span><small>LIGAO CITY</small></div>
        <h1>Registrar Login</h1><p className="login-subtitle">Access your administrative portal</p>
        <div className="login-rule" />
        <form onSubmit={submit}>
          <label className="form-label">EMAIL OR USERNAME</label>
          <div className="input-with-icon"><Mail size={18} /><input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email or username" autoComplete="username" /></div>
          <label className="form-label">PASSWORD</label>
          <div className="input-with-icon"><LockKeyhole size={18} /><input type={show ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" autoComplete="current-password" /><button type="button" className="password-toggle" onClick={() => setShow(!show)}>{show ? <EyeOff size={18} /> : <Eye size={18} />}</button></div>
          <div className="login-options"><label className="check-label"><input type="checkbox" checked={keep} onChange={e => setKeep(e.target.checked)} /> Keep me logged in</label><button type="button" className="text-button" onClick={() => setToast('Please contact your IT administrator to reset your password.')}>Forgot Password?</button></div>
          <button className="login-submit" type="submit">Log In</button>
        </form>
        <p className="support-line">Need technical support? <a href="mailto:it@idsc.edu.ph">Contact IT</a></p>
        <div className="login-brand-footer"><BookOpen size={17} /><div><strong>INFOTECH DEVELOPMENT SYSTEMS COLLEGES</strong><br /><b>INFOTECH DEVELOPMENT SYSTEMS COLLEGES</b><small>Ligao City, Albay, Philippines • Authorized Registrar Access Only</small><small>© 2026 IDSC Registrar Portal. All rights reserved.</small></div></div>
      </div>
    </section>
    <Toast message={toast} onClose={() => setToast('')} />
  </div>
}
