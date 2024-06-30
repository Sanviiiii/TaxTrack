import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigator = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        navigator("/home")
      } else {
        navigator("/login")
      }
    })
  })

  const LogOut = async () => {
    try {
      await signOut(auth)
    } catch(error) {
      console.log("log out error", error)
    }
  }

  return (
    <>
      <button onClick={ LogOut }><Link to="/login">Log Out</Link></button>
    </>
  )
}

export default HomePage