import React from "react";
import "./NavBar.css";
import logo from "../logo.png";
const NavBar = () => {
	return (
		<nav className="NavBar">
			<img src={logo} alt="Logo" className="logo" />
			<ul>
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#products">Productos</a>
				</li>
				<li>
					<a href="#products">Sobre nosotros</a>
				</li>
			</ul>
		</nav>
	);
};
export default NavBar;
