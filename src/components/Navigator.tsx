"use client";

import { usePathname } from "next/navigation";
import { Button, DarkThemeToggle, Navbar, useThemeMode } from "flowbite-react";

export default function Navigator() {
  const pathname = usePathname();
  const [mode, , toggleMode] = useThemeMode();
  const navlinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Trips",
      href: "/trip",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Dashboard",
      href: "/dashboard"
    }
  ];

  return (
    <Navbar fluid className="dark:bg-black">
      <Navbar.Brand href="/">
        {/* <Image
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
          width={32}
          height={32}
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold text-sky-600 dark:text-sky-400">
          Triplanner
        </span>
      </Navbar.Brand>
      <div className="flex space-x-4 md:order-2">
        <Button href="/login">Get Started</Button>
        <DarkThemeToggle
          onClick={() => {
            toggleMode();
            let newMode = mode === "dark" ? "light" : "dark";
            localStorage.setItem("theme", newMode);
          }}
        />
      </div>
      <Navbar.Collapse>
        {navlinks.map((link, index) => {
          return (
            <Navbar.Link
              href={link.href}
              active={pathname === link.href}
              key={index}
            >
              {link.name}
            </Navbar.Link>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}
