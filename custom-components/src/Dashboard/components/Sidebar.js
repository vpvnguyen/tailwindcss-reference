import React from "react";
import { Link } from "react-router-dom";

const NavRoute = ({ name, path, icon, isExpanded }) => {
  return (
    <Link to={path} className={`flex items-center justify-center`}>
      <div className="h-10 w-10 flex items-center justify-center">
        <i className={icon}></i>
      </div>
      <span className={isExpanded ? "flex-1" : "hidden"}>{name}</span>
    </Link>
  );
};

const navRoutes = [
  { name: "Dashboard", path: "/dashboard", icon: "fas fa-tv" },
  { name: "Home", path: "/", icon: "fas fa-newspaper" },
  { name: "Profile", path: "/profile", icon: "fas fa-user-circle" },
  { name: "Login", path: "/login", icon: "fas fa-fingerprint" },
  { name: "Register", path: "/register", icon: "fas fa-clipboard-list" },
  { name: "Settings", path: "/settings", icon: "fas fa-tools" },
];

const navLinks = [
  { name: "Vue", path: "/vue", icon: "fab fa-vuejs" },
  { name: "React", path: "/react", icon: "fab fa-react" },
  { name: "Angular", path: "/angular", icon: "fab fa-angular" },
  { name: "JavaScript", path: "/javascript", icon: "fab fa-js-square" },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    <>
      <nav
        className={`${
          isExpanded ? "w-44" : ""
        } bg-white min-h-full flex flex-col flex-nowrap items-center justify-between mx-auto whitespace-nowrap`}
      >
        <div className="h-10 px-2 w-full flex items-center justify-center">
          {/* Nav Toggle */}
          <button
            className="appearance-none opacity-50 bg-transparent focus:outline-none h-10 w-10 flex items-center justify-center"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link className={isExpanded ? "flex-1" : "hidden"} to="/">
            Tailwind
          </Link>
        </div>

        {/* Divider */}
        <hr className="min-w-full" />

        {/* Nav Container */}
        <div className="p-2 w-full flex flex-col overflow-y-auto overflow-x-hidden flex-1">
          {/* Top Nav Menu */}
          <ul className="flex flex-col">
            {navRoutes.map(({ name, path, icon }) => (
              <li key={name} className={`list-none`}>
                <NavRoute
                  name={name}
                  path={path}
                  icon={icon}
                  isExpanded={isExpanded}
                />
              </li>
            ))}
          </ul>

          {/* Divider */}
          <hr className="min-w-full" />

          {/* Bottom Nav Heading */}
          <h6 className={`p-2 text-center ${isExpanded ? "" : "hidden"}`}>
            Documentation
          </h6>

          {/* Bottom Nav Menu */}
          <ul className="flex flex-col">
            {navLinks.map(({ name, path, icon }) => (
              <li key={name} className={`list-none`}>
                <NavRoute
                  name={name}
                  path={path}
                  icon={icon}
                  isExpanded={isExpanded}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
