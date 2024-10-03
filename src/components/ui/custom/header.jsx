import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
// import { GiFlowers } from "react-icons/gi";
// import { IoIosFlower } from "react-icons/io";
// import { SiStarship } from "react-icons/si";
// import { WiStars } from "react-icons/wi";

import { FaBlackTie } from "react-icons/fa";




function Header() {
  const {user, isSignedIn} = useUser();
  return (
    <div className="p-3 px-5 flex justify-between shadow-md">
      {/* <img src="/logo.svg" width={100} height={100} /> */}
      {/* <FaBlackTie className="text-5xl" /> */}
      {/* <IoIosFlower className="text-6xl" />
      <GiFlowers className="text-6xl" /> */}
      <p className="font-bold text-3xl">AI CV MAKER</p>

      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to ={"/dashboard"}>
          <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
