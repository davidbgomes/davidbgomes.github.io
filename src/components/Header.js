import React from "react"
import { Link } from "react-router-dom"

function Header (props){

	return (
		<nav className="navbar navbar-expand-lg navbar-light">

        	<button className="navbar-toggler" type="button" style={{borderColor:"transparent"}} data-toggle="collapse" onClick={() => props.toggleMenu()} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
        
		    <div className={props.isHamburgerOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse collapse"} id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-link m-2 menu-item nav-active" onClick={() => props.toggleMenu()}><Link to="/" className="nav-link"> Home </Link></li>
					<li className="nav-link m-2 menu-item nav-active" onClick={() => props.toggleMenu()}><Link to="/contactMe" className="nav-link">Contact Me</Link></li>
				</ul>
		    </div>
	    </nav>
	) 
}

export default Header