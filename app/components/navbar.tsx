"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Product", link: "#product" },
    { name: "Blog", link: "#blog" },
    { name: "Contact", link: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full ">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            <NavbarButton variant="secondary">
              {" "}
              <div className="flex items-center space-x-2 text-sm">
                <a
                  href="https://wa.me/923153579751"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#25D366"
                      d="M12 2C6.486 2 2 6.486 2 12a9.93 9.93 0 0 0 1.64 5.48L2 22l4.7-1.61A9.93 9.93 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2z"
                    />
                    <path
                      fill="#FFF"
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.67.149-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.52-.074-.149-.67-1.611-.918-2.205-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.57-.009s-.52.074-.793.372c-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.214 3.074c.149.198 2.099 3.205 5.088 4.495.712.307 1.268.491 1.701.628.714.227 1.363.195 1.877.118.572-.085 1.758-.718 2.007-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                    />
                  </svg>
                </a>

                <a
                  href="https://wa.me/923153579751"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-xs text-zinc-700">Connect With Us</p>
                  <p className="text-md font-semibold text-gray-900">
                    (+92) 315 3579751
                  </p>
                </a>
              </div>
            </NavbarButton>
            <NavbarButton href="tel:+923153579751" variant="primary">
              Join a Call
              <BiSolidPhoneCall size={22} className="inline-block ml-2" />
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <NavItems
              items={navItems.map((item) => ({
                ...item,
                onClick: (e: React.MouseEvent) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false); // menu band kare
                  scrollToSection(item.link.replace("#", ""));
                },
              }))}
            />
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                <div className="flex items-center space-x-2 text-sm">
                  <a
                    href="https://wa.me/923153579751"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#25D366"
                        d="M12 2C6.486 2 2 6.486 2 12a9.93 9.93 0 0 0 1.64 5.48L2 22l4.7-1.61A9.93 9.93 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2z"
                      />
                      <path
                        fill="#FFF"
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.67.149-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.52-.074-.149-.67-1.611-.918-2.205-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.57-.009s-.52.074-.793.372c-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.214 3.074c.149.198 2.099 3.205 5.088 4.495.712.307 1.268.491 1.701.628.714.227 1.363.195 1.877.118.572-.085 1.758-.718 2.007-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://wa.me/923153579751"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-xs text-zinc-700">Connect With U</p>
                    <p className="text-md font-semibold text-gray-900">
                      (+92) 315 3579751
                    </p>
                  </a>
                </div>
              </NavbarButton>
              <NavbarButton
                href="tel:+923153579751"
                variant="primary"
                className="w-full"
              >
                Join a Call
                <BiSolidPhoneCall size={22} className="inline-block ml-2" />
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
