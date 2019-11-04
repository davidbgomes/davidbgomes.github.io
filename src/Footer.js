import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom"
import ContactMe from "./ContactMe"

function Footer(props){

	const linkedin = "https://www.linkedin.com/in/davidbgomes"

	return(
		<Router>
			<footer className="footer fixed-bottom">
				<div className="container">
					<div className="row">
						<div className="col">
							<h3>Contacts</h3>
							<a href={linkedin} target="_blank" rel="external">
								<FontAwesomeIcon className="fa-2x" icon={['fab', 'linkedin']} />
							</a>
							<a href="/" style={{paddingLeft: "40px"}}>
								<Link to="/contactMe"><FontAwesomeIcon className="fa-2x" icon={['far','envelope']} /></Link>
							</a>			
						</div>
					</div>
				<p style={{paddingTop: "20px"}}>Designed by David Gomes</p>
				</div>
			</footer>

			<Switch>
				<Route exact={true} path="/contactMe">
					<ContactMe />
				</Route>
			</Switch>

		</Router>
	)
}

export default Footer