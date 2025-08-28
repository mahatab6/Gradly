import React from 'react'
import { AuthContext } from './AuthContext'

export default function AuthProvider({children}) {

    


  return (
    <AuthContext.Provider value={}>
        {children}
    </AuthContext.Provider>
  )
}
