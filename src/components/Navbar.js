import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light siteNavigation">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <NavLink className="nav-item nav-link" exact to="/">O MNIE</NavLink>
                        <NavLink className="nav-item nav-link" to="/curriculum-vitae">CURRICULUM VITAE</NavLink>
                        <NavLink className="nav-item nav-link" to="/wykonane-projekty">WYKONANE PROJEKTY</NavLink>
                        <NavLink className="nav-item nav-link" to="/hobby">HOBBY</NavLink>
                        <NavLink className="nav-item nav-link" to="/kontakt">KONTAKT</NavLink>
                    </div>
                </div>
            </nav>
        );
}