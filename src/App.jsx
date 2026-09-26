import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import Faculty from './pages/Faculty'
import Enrollment from './pages/Enrollment'
import Subjects from './pages/Subjects'
import Grades from './pages/Grades'
import Scheduling from './pages/Scheduling'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import MainLayout from './layouts/MainLayout'

function ProtectedLayout() {
  const { user } = useAuth()
  return user ? <MainLayout /> : <Navigate to="/login" replace />
}

export default function App() {
  const { user } = useAuth()
  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to={user ? '/' : '/login'} replace />} />
    </Routes>
  )
}
