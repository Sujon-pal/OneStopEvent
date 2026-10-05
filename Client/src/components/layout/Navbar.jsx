import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useActiveSection } from "../../hook/useActiveSection";

const links = [
  { label: "Home", hash: "#home" },
  { label: "Events", hash: "#events" },
  { label: "Packages", hash: "#packages" },
  { label: "Services", hash: "#services" },
  { label: "Recent", hash: "#recent" },
  { label: "Reviews", hash: "#reviews" },
];

const sectionIds = links.map((link) => link.hash.slice(1));

const linkBase =
  "relative py-1 transition-colors duration-300 ease-out after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-accent after:transition-transform after:duration-300 after:ease-out";

const linkOn = "text-primary after:scale-x-100";

const linkOff = "text-base-content/60 hover:text-base-content after:scale-x-0";

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const active = useActiveSection(sectionIds, pathname === "/");

  useEffect(() => {
    if (pathname !== "/" || !hash) return;

    const section = document.getElementById(hash.slice(1));

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [pathname, hash]);

  const closeMenu = () => document.activeElement?.blur();

  return (
    <header className="sticky top-0 z-30 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="dropdown md:hidden">
            <button
              type="button"
              tabIndex={0}
              className="btn btn-ghost btn-square btn-sm"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              onClick={closeMenu}
              className="menu dropdown-content z-10 mt-3 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow"
            >
              {links.map((link) => {
                const isActive = active === link.hash.slice(1);

                return (
                  <li key={link.hash}>
                    <Link
                      to={{ pathname: "/", hash: link.hash }}
                      className={isActive ? "menu-active" : ""}
                      aria-current={isActive ? "location" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <Link to="/" >
            <div className="aura text-black">
              <button className="btn">
                OneStop <span className="text-accent">Event</span>
              </button>
            </div>
          </Link>
        </div>

        <nav
          aria-label="Main navigation"
          className="hidden gap-7 text-sm font-medium md:flex"
        >
          {links.map((link) => {
            const isActive = active === link.hash.slice(1);

            return (
              <Link
                key={link.hash}
                to={{ pathname: "/", hash: link.hash }}
                className={`${linkBase} ${isActive ? linkOn : linkOff}`}
                aria-current={isActive ? "location" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="aura aura-xl text-amber-600">
          <button className="btn">Login</button>
        </div>
      </div>
    </header>
  );
}
