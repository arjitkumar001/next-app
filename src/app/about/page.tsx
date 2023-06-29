'use client'
//ye component ek server component hai 
// agar ham koi =Event= call karte hai to "use client"
//   kaa use karna hota hai ise ye server 
//  component ki tarah treat karta hai isliye ise 
//  client component ki tarah work karate hai 
//  to use client ka use karte hai
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const about = () => {
  const router = useRouter()

  return (
    <div>
      <h1>I am about page</h1>
      {/* useRouter >> redirect any page using useRouter */}

      <button type="button" onClick={() => router.push('/dashboard')}>useRouter</button>
      <button onClick={()=>alert("Use Client for call any event")}>Click me</button>

      {/* Link any component */}
      <p>Link any component <Link href='/contact'>Contact</Link></p>
   
    </div>
  )
}

export default about
