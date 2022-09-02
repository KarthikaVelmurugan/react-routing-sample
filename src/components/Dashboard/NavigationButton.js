import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavigationButton({ icon, name, url }) {
  return (
      
    <nav>
      
        <div className="icon">{icon}</div>
        <Link to={url} className="btn-context">{name}</Link>
    </nav>


  );
}

export default NavigationButton;
