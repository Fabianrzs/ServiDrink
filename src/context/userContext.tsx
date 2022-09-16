import React, { createContext, useEffect, useState } from 'react'
import userService from '../services/userService/userService'

export const UserContext = createContext(null)

// eslint-disable-next-line no-undef
export default function UserProvider({ children }: any): JSX.Element {
  const [user, setUser] = useState(null)

  const getUserInfo = async() => {
    const { getUserInfo } = userService
    const currentUser = await getUserInfo()
    setUser(currentUser)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}
