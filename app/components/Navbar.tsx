'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu } from 'lucide-react'

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ['Home', 'Demo', 'Info']

  return (
    <nav>
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <Menu size={24} />
        </button>
      </div>
      <ul className={`flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 ${isMenuOpen ? 'absolute top-16 right-0 bg-background p-4 rounded-bl-md shadow-md' : 'hidden lg:flex'}`}>
        {navItems.map((item) => (
          <li key={item}>
            <Link 
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

