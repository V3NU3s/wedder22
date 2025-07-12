import React from 'react'
import { useAuth } from '../auth'  // wherever you get your JWT/API token

export default function Dashboard() {
  const token = useAuth().token
  const streamlitUrl = process.env.REACT_APP_STREAMLIT_URL
  return (
    <iframe
      src={`${streamlitUrl}?token=${token}`}
      style={{ width: '100%', height: '100vh', border: 'none' }}
    />
  )
}
