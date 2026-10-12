
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", id: "home" },
  { label: "Events", id: "events" },
  { label: "Packages", id: "packages" },
  { label: "Services", id: "services" },
  { label: "Recent", id: "recent" },
  { label: "Reviews", id: "reviews" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section && window.scrollY >= section.offsetTop - 150) {
          current = link.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const handleNavClick = (id) => {
    setActive(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-4">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="btn btn-ghost shrink-0 px-2 text-base sm:text-lg"
        >
          OneStop <span className="text-accent">Event</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden gap-4 text-sm font-medium lg:flex xl:gap-7"
        >
          {links.map((link) => {
            const isActive = active === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`relative whitespace-nowrap py-1
                  transition-colors duration-500 ease-in-out
                  ${
                    isActive
                      ? "text-primary"
                      : "text-base-content/60 hover:text-base-content"
                  }
                  after:absolute after:inset-x-0 after:-bottom-1
                  after:h-0.5 after:rounded-full
                  after:bg-accent
                  after:origin-left
                  after:transition-transform
                  after:duration-500
                  after:ease-in-out
                  ${
                    isActive
                      ? "after:scale-x-100"
                      : "after:scale-x-0"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Login + Mobile Menu */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">

          {/* Login Button */}
          <div className="aura text-amber-400">
            <button className="btn btn-sm text-amber-400 sm:btn-md">
              Login
            </button>
          </div>

          {/* Hamburger Button */}
          <button
            type="button"
            className="btn btn-ghost btn-square lg:hidden"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-t border-base-300 bg-base-100 px-4 py-3 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => {
              const isActive = active === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`rounded-lg px-3 py-3 text-sm font-medium
                    transition-colors duration-300
                    ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
