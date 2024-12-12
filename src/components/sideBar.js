import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <Nav className="flex-column bg-dark text-light p-3">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? "text-light shadow-lg rounded p-2" : "text-light"}>
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/questions" className={({ isActive }) => isActive ? "text-light shadow-lg rounded p-2" : "text-light"}>
                    Questions
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default SideBar;
