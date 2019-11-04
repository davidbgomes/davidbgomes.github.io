import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faEnvelope, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "./Header"
import Footer from "./Footer"

library.add(fab, far, faEnvelope, faCheckSquare, faCoffee)

class App extends React.Component{

	constructor(){
		super()
		this.state={
			isHamburgerOpen: false,
		}
		this.toggleMenu = this.toggleMenu.bind(this)

	}

	toggleMenu(){
		this.setState((prevState) =>{
			return{
				isHamburgerOpen: !prevState.isHamburgerOpen
			}
		})
	}

	
	render(){

		return(
			<div>
				<Header
					isHamburgerOpen={this.state.isHamburgerOpen}
					toggleMenu={this.toggleMenu}
				/>
				<Footer />
			</div>
		)
	}
}


export default App