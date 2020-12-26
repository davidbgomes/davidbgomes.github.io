import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"

function Footer(props){

	const linkedin = "https://www.linkedin.com/in/davidbgomes"
	const github = "https://github.com/davidbgomes"

	return(
		<div className="footer">
			<div className="container pt-2">
				<div className="row">
					<div className="col">
						<h4>Contacts</h4>
						<a href={linkedin} target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon className="fa-2x" icon={['fab', 'linkedin']} />
						</a>
						<a href={github} target="_blank" rel="noopener noreferrer" style={{paddingLeft: "40px"}}>
							<FontAwesomeIcon className="fa-2x" icon={['fab', 'github-square']} />
						</a>	
						<Link to="/contactMe" style={{paddingLeft: "40px"}}>
							<FontAwesomeIcon className="fa-2x" icon={['far','envelope']} />
						</Link>	
					</div>
				</div>
				<p style={{paddingTop: "20px", fontSize:"1.7vh"}}>Designed by David Gomes with React.js </p>
			</div>
		</div>
	)
}

export default Footer