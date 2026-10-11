
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

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (
          section &&
          window.scrollY >= section.offsetTop - 150
        ) {
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

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-lg">
          OneStop <span className="text-accent">Event</span>
        </Link>

        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden gap-7 text-sm font-medium md:flex"
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
                className={`relative py-1
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

        {/* Login */}
        <button className="btn btn-primary btn-sm">
          Login
        </button>

      </div>
    </header>
  );
}

