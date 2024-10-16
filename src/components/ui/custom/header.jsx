import React, { useState, useEffect } from "react";
import { Button } from "../button";
import { Link, useLocation } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();
  const location = useLocation();

  // Update the activeButton based on the pathname
  const [activeButton, setActiveButton] = useState(
    location.pathname === "/dashboard" ? "dashboard" :
    location.pathname === "/" ? "home" : "none"
  );

  useEffect(() => {
    // Update active button when the location changes
    if (location.pathname === "/dashboard") {
      setActiveButton("dashboard");
    } else if (location.pathname === "/") {
      setActiveButton("home");
    } else {
      setActiveButton("none");
    }
  }, [location.pathname]);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="p-3 px-5 flex justify-between shadow-md bg-gray-100">
      <p className="font-bold text-3xl">AI CV MAKER</p>

      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to="/" onClick={() => handleButtonClick("home")}>
            <Button variant={activeButton === "home" ? "" : "outline"}>
              Home
            </Button>
          </Link>
          <Link to="/dashboard" onClick={() => handleButtonClick("dashboard")}>
            <Button variant={activeButton === "dashboard" ? "" : "outline"}>
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
