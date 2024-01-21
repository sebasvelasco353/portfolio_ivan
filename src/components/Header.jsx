import React from "react";
import Logo from '../assets/logo.svg';

import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      maxWidth="xl"
      className="bg-dark"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle className="text-white" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src={Logo} alt="Ivan Ceron" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 justify-between" justify="end">
        <NavbarBrand>
          <img src={Logo} alt="Ivan Ceron" />
        </NavbarBrand>

        <NavbarItem>
          <Link className="text-white" href="/">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/work">
            WORK
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" href="#">
            HOME
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="#">
            WORK
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

