"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScalifyLogo } from "@/components/ScalifyLogo";

const serviceItems = [
  { label: "Recrutement de Franchisés", href: "/services/recrutement-franchises" },
  { label: "Trafic Local", href: "/services/trafic-local" },
  { label: "Accompagnement Digital", href: "/services/accompagnement-digital" },
  { label: "IA & Performance", href: "/services/ia-performance" },
];

const navLinks = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Cas clients", href: "/cas-clients" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const isPortal = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };
  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  // Hidden on portal — it has its own nav
  if (isPortal) return null;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16"
        style={{
          background: "rgba(10,8,6,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(232,134,42,0.06)",
        }}
        aria-label="Navigation principale"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="Scalify Labs — Accueil">
            <ScalifyLogo className="h-8 w-auto" />
          </Link>

          {/* Desktop nav — center */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className="flex items-center gap-1 text-[14px] font-normal cursor-pointer"
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      color: "rgba(240,236,229,0.55)",
                      transition: "color 0.2s cubic-bezier(.22,1,.36,1)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#E8862A")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(240,236,229,0.55)")
                    }
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transition: "transform 0.2s cubic-bezier(.22,1,.36,1)",
                        transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <div
                    className="absolute top-full left-1/2 pt-3"
                    style={{
                      transform: `translateX(-50%) translateY(${dropdownOpen ? "0" : "-4px"})`,
                      opacity: dropdownOpen ? 1 : 0,
                      pointerEvents: dropdownOpen ? "auto" : "none",
                      transition: "all 0.2s cubic-bezier(.22,1,.36,1)",
                    }}
                  >
                    <div
                      className="py-2 min-w-[280px] rounded-xl"
                      style={{
                        background: "rgba(10,8,6,0.92)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: "1px solid rgba(232,134,42,0.10)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                      }}
                    >
                      {serviceItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-5 py-3 text-[14px]"
                          style={{
                            fontFamily: "var(--font-dm-sans), sans-serif",
                            color: "rgba(240,236,229,0.55)",
                            transition: "all 0.15s cubic-bezier(.22,1,.36,1)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#E8862A";
                            e.currentTarget.style.background = "rgba(232,134,42,0.04)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "rgba(240,236,229,0.55)";
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[14px] font-normal"
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    color: "rgba(240,236,229,0.55)",
                    transition: "color 0.2s cubic-bezier(.22,1,.36,1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#E8862A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(240,236,229,0.55)")
                  }
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop right — CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 text-[14px] font-medium rounded-full"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                color: "#E8862A",
                border: "1px solid rgba(232,134,42,0.3)",
                background: "transparent",
                transition: "all 0.2s cubic-bezier(.22,1,.36,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(232,134,42,0.08)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(232,134,42,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Audit Gratuit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 cursor-pointer"
            style={{ color: "#f0ece5" }}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className="fixed inset-0 z-40 lg:hidden flex flex-col"
        style={{
          background: "#0a0806",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.3s cubic-bezier(.22,1,.36,1)",
        }}
      >
        <div className="flex flex-col h-full px-8 pt-24 pb-8">
          <nav className="flex flex-col gap-6 flex-1" aria-label="Navigation mobile">
            {/* Services section */}
            <div>
              <span
                className="block mb-3 text-[11px] font-semibold uppercase"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  letterSpacing: "0.1em",
                  color: "rgba(240,236,229,0.25)",
                }}
              >
                Services
              </span>
              <div className="flex flex-col gap-3 pl-1">
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[17px]"
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      color: "rgba(240,236,229,0.55)",
                      transition: "color 0.2s",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <hr style={{ borderColor: "rgba(232,134,42,0.06)" }} />

            {/* Other nav links */}
            {navLinks
              .filter((l) => !l.hasDropdown)
              .map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[22px] font-semibold"
                  style={{
                    fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                    color: "#f0ece5",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          {/* Mobile CTA */}
          <div
            className="flex flex-col gap-4 pt-6"
            style={{ borderTop: "1px solid rgba(232,134,42,0.06)" }}
          >
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center px-8 py-3.5 text-[16px] font-semibold rounded-full w-full"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                color: "#E8862A",
                border: "1px solid rgba(232,134,42,0.3)",
                background: "rgba(232,134,42,0.08)",
              }}
            >
              Audit Gratuit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
