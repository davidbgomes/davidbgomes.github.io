import React from "react"
import Home from "./Home"
import About from "./About"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"
import { Navbar, Nav, NavItem, Well, Row, Col, Button } from 'react-bootstrap'


function Header(props){

	return (
		<Router>
	        <div>
	        	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		    		<ul className="navbar-nav mr-auto">
		            	<li><Link to="/" className="nav-link"> Home </Link></li>
		            	<li><Link to="/about" className="nav-link">About</Link></li>
		         	</ul>
	        	</nav>

	        	<hr />

	        </div>
	        	<Switch>
	            	<Route path="/about">
	              		<About />
	            	</Route>
	            	<Route path="/">
	            		<Home />
	            	</Route>
	        	</Switch>
	        
    	</Router>
	)
}

export default Header