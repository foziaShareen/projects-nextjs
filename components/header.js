import React from 'react'
import Counter from './Counter'
import Link from 'next/link'

const Header = () => {
  return (
     <header className="p-20 border border-amber-300">
        
            <Link href="/about">About</Link>
            {/* <Counter/> */}
        
     </header>
  )
}

export default Header