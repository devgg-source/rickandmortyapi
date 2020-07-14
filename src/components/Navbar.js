import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Pagination</Link>
          </li>
          <li>
            <Link to="/episodelist">EpisodeList</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
