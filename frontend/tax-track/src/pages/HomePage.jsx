import React from 'react'
import { auth } from '../config/firebase'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import AppBar from '../components/AppBar'
import BottomNav from '../components/BottomNav'

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

  

  return (
    <>
      <AppBar/>
      <BottomNav/>
    </>
  )
}

export default HomePage