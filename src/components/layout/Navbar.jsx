import { Link } from 'react-router-dom'

const links = [
  { label: 'Events', href: '#events' },
  { label: 'Packages', href: '#packages' },
  { label: 'Services', href: '#services' },
  { label: 'Recent', href: '#recent' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  // daisyUI dropdown opens on focus, so blur it after a click to close it.
  const closeMenu = () => document.activeElement?.blur()

  return (
    <header className="sticky top-0 z-30 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="dropdown md:hidden">
            <button tabIndex={0} className="btn btn-ghost btn-square btn-sm" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              onClick={closeMenu}
              className="menu dropdown-content z-10 mt-3 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow"
            >
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/" className="font-display text-xl font-bold text-primary">
            OneStop <span className="text-accent">Event</span>
          </Link>
        </div>

        <nav aria-label="Main" className="hidden gap-7 text-sm font-medium text-base-content/60 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-base-content">
              {l.label}
            </a>
          ))}
        </nav>

        <button className="btn btn-ghost btn-sm rounded-full">Log in</button>
      </div>
    </header>
  )
}