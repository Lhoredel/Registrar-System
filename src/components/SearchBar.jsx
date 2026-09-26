import { Search } from 'lucide-react'
export default function SearchBar({ value, onChange, placeholder = 'Search records...' }) {
  return <label className="page-search"><Search size={17} /><input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} /></label>
}
