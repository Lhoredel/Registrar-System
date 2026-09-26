import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)
const STORAGE_KEY = 'idsc_registrar_user'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) } catch { return null }
  })

  function login(email, password) {
    if (!email.trim() || !password.trim()) {
      return { ok: false, message: 'Enter your email/username and password.' }
    }
    // Demo-only login. Replace this with your backend authentication API.
    const account = { name: 'Admin Registrar', role: 'Registrar Admin', email }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(account))
    setUser(account)
    return { ok: true }
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
