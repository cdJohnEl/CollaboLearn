"use client"

import React, { useEffect } from 'react'
import SearchBar from './SearchBar'
import { UserButton, useUser } from '@clerk/nextjs'
import {useRouter} from 'next/navigation'

function Header() {
    const {user}=useUser()
    const router=useRouter()
    useEffect(()=>{
        console.log(user)
    }, [user])
  return (
    <div className='ml-64 p-5 border-b flex items-center justify-between'>
        <SearchBar/>


        {!user?
        <button onClick={() =>router.push('/sign-in')}>Log in</button>
        :
        <UserButton/>}
    </div>
  )
}

export default Header