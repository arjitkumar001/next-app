'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const about = () => {
const router=useRouter()
  return (
<div>
<h1>I am about page</h1>
{/* useRouter >> redirect any page using useRouter */}

<button type="button" onClick={()=>router.push('/dashboard')}>useRouter</button>

{/* Link any component */}
<p>Link any component <Link href='/contact'>Contact</Link></p>
</div>
  )
}

export default about
