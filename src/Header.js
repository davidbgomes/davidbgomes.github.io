import React from "react"
import Home from "./Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"
import { Navbar, Nav, NavItem, Well, Row, Col, Button } from 'react-bootstrap'

function Navbar(props){
	return (
		<Router>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">

				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand">Home</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<ul className="navbar-nav mr-auto">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>

			</div>

			<Switch>
				<Route path="/Home">
					<Home />
				</Route>
			</Switch>


		</Router>

		)
	}

export default Navbar