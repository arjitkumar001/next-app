import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div>
      <ul>
      <li>
            <Link href="/login"><span>Login page here</span></Link>
        </li>
        <li>
            <Link href="/"><span>Home</span></Link>
        </li>
        <li>
            <Link href="/about"><span >About</span></Link>
        </li>
        <li>
            <Link href="/contact"><span >Contact</span></Link>
        </li>
        <li>
            <Link href="/service"><span >Service</span></Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Nav
