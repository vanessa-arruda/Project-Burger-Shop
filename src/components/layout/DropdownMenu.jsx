import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/DropdownMenu.scss";

function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      {name: "Login", path: "/login"},
      {name:"Orders", path:"/myorders"},
      {name:"Logout", path:"/logout"}
      
    ];
    setNavLinks(navs);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Menu
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {navLinks.map((d, i) => (
              <li key={i}>
                <Link to={d.path}>
                  <button className="dropdown-item" type="button">
                    {d.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;