"use client";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between 
            gap-3 
            md:gap-0"
          >
            <div className="flex flex-row gap-2">
              <Logo />
              <p className="text-red-500 text-xl font-bold">nigga</p>
            </div>
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
