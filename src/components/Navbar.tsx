import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, business } from "../data/content";
import TopBar from "./TopBar";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const transparent = isHome && !scrolled && !open;

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {!transparent && <TopBar />}
      <header
        className={`transition-colors duration-500 ${
          transparent ? "bg-transparent" : "bg-white shadow-md shadow-navy/5"
        }`}
      >
        <div className="container-wide flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/golden-tours-logo.png"
              alt="Golden Tours"
              className="h-12 w-auto md:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "text-gold-bronze"
                      : transparent
                      ? "text-white/90 hover:text-white"
                      : "text-navy/70 hover:text-navy"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={business.phoneHref}
              className={`flex items-center gap-2 text-sm font-semibold ${transparent ? "text-white" : "text-navy"}`}
            >
              <span className={`flex h-9 w-9 items-center justify-center rounded-full ${transparent ? "bg-white/15" : "bg-gold/15"}`}>
                <Phone size={16} className={transparent ? "text-white" : "text-gold-bronze"} />
              </span>
              {business.phone}
            </a>
            <Link to="/contact" className="btn-gold">Request a Quote</Link>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className={transparent ? "text-white lg:hidden" : "text-navy lg:hidden"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-navy/10 bg-white lg:hidden">
            <nav className="container-wide flex flex-col gap-1 py-4">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 text-base font-medium ${
                      isActive ? "bg-gold/10 text-gold-bronze" : "text-navy/80"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a href={business.phoneHref} className="px-3 py-2 text-sm font-semibold text-navy">
                {business.phone}
              </a>
              <Link to="/contact" className="btn-gold mt-2 w-full">
                Request a Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
