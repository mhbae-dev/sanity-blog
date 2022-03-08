import Link from 'next/link'
import React from 'react'

const Header = () => {
  return ( 
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <a className="text-4xl text-yellow-500 underline">MHB</a>
        </Link>
      </div>

      <div className="flex items-center space-x-5 text-yellow-600">
        <a
          href="https://portfolio-myoung.vercel.app/"
          className="rounded-full border border-yellow-600 px-4 py-1"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/mhbae-dev"
          className="rounded-full border border-yellow-600 px-4 py-1"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/myoung-bae/"
          className="rounded-full border border-yellow-600 px-4 py-1"
        >
          LinkedIn
        </a>
      </div>
    </header>
  )
}

export default Header
