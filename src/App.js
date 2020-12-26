import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faEnvelope, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./Home"
import ContactMe from "./ContactMe"
import "./styles/App.css"


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
		this.setState(prevState =>{
			return{
				isHamburgerOpen: !prevState.isHamburgerOpen
			}
		})
	}

	
	render(){

		return(
			<div className="appDiv">
				<Router>
					<div>
						<Header
							isHamburgerOpen={this.state.isHamburgerOpen}
							toggleMenu={this.toggleMenu}
						/>
						<Switch>
							<Route exact path="/" component={Home}/>
			          		<Route exact path="/contactMe" component={ContactMe}/>
						</Switch>
						<Footer />
					</div>
				</Router>
			</div>
		)
	}
}


export default App