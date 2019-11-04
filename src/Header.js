import React from "react"
import Home from "./Home"
import About from "./About"
import ContactMe from "./ContactMe"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Nav, NavItem, Well, Row, Col, Button } from 'react-bootstrap'


function Header (props){

	return (
		<Router>
			<div>

	        <nav className="navbar navbar-expand-lg navbar-light bg-light">

	        	<button className="navbar-toggler" type="button" data-toggle="collapse" onClick={() => props.toggleMenu()} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    				<span className="navbar-toggler-icon"></span>
  				</button>
	        

			    <div className={props.isHamburgerOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse collapse"} id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-link m-2 menu-item nav-active"><Link to="/" className="nav-link"> Home </Link></li>
						<li className="nav-link m-2 menu-item nav-active"><Link to="/about" className="nav-link">About</Link></li>
						<li className="nav-link m-2 menu-item nav-active"><Link to="/contactMe" className="nav-link">Contact Me</Link></li>

					</ul>
			    </div>
		    </nav>

	        	<Switch>
	            	<Route path="/about">
	              		<About />
	            	</Route>
	            	<Route path="/contactMe">
	              		<ContactMe />
	            	</Route>
	            	<Route path="/">
	            		<Home />
	            	</Route>

	        	</Switch>

	        </div>

	        
    	</Router>
	) 

}

export default Header