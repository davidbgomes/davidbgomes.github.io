import React from "react"
import { Alert } from 'reactstrap'
import {Helmet} from 'react-helmet'
import emailjs from 'emailjs-com'

class ContactMe extends React.Component{

	constructor(){
		super()
		this.state={
			name: "",
			email: "",
			message: "",
			showAlert: false,
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleNameChange = this.handleNameChange.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handleTextChange = this.handleTextChange.bind(this)
		this.toggleAlert = this.toggleAlert.bind(this)
		this.resetForm = this.resetForm.bind(this)
	}

	handleSubmit(event) {
		this.toggleAlert()

		event.preventDefault()

		const templateId = 'template_ibq4pq9'

		var templateParams = {
		    message: this.state.message,
		    from_name: this.state.name,
		    reply_to: this.state.email
		}

		emailjs.send('service_x2do2bd',templateId, templateParams, 'user_jRsWYNJ8D5fEIyDRJxvwf')
    	.then(response => {
       		console.log('SUCCESS!', response.status, response.text)
       		this.resetForm()
    	},
    	err => {
       		console.log('FAILED...', err);
    	})
	}

	resetForm(){
		this.setState({
			name: "",
			email: "",
			message: ""
		})
	}

	handleNameChange(event) {
    	this.setState({
    		name: event.target.value,
    	})
  	}

  	handleEmailChange(event) {
    	this.setState({
    		email: event.target.value,
    	})
  	}

  	handleTextChange(event) {
    	this.setState({
    		message: event.target.value,
    	})
  	}

  	toggleAlert(){
  		this.setState(prevState => {
  			return{
  				showAlert: !prevState.showAlert
  			}
  		})	
  	}

	render(){
		return(

			<div className="container-fluid" style={{paddingBottom:"200px"}}>
				<Helmet>
	    			<title>David Gomes - Contact Me</title>
    				<meta name="description" content="Contact me through this form for job offers or questions." />
    			</Helmet>

				<Alert className="alert-success" color="primary" isOpen={this.state.showAlert} toggle={this.toggleAlert}> Email sent successfully! </Alert>
				<h1>Contact Me</h1>
				<p>Feel free to contact me about possible job opportunities or questions you may have.</p>
				<p className="pb-3">I'll get back to you as soon as possible.</p>

				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col">
							<div className="form-group">
								<label htmlFor="nameInput">Name/Company:</label>
								<input
									style={{maxWidth:"500px"}}
									type="text"
									value={this.state.name}
									className="form-control"
									onChange={this.handleNameChange}
									id="nameInput"
									placeholder="Enter your name or the company name"
									required
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="form-group">
								<label htmlFor="emailInput">Email:</label>
								<input
									style={{maxWidth:"500px"}}
									type="email"
									value={this.state.email}
									className="form-control"
									onChange={this.handleEmailChange}
									id="emailInput"
									placeholder="Enter your email address"
									required
								/>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message:</label>
						<textarea
							className="form-control"
							value={this.state.message}
							onChange={this.handleTextChange}
							placeholder="Message goes here"
							rows="10"
							id="message"
							required
						/>
					</div>
					<button className ="btn btn-primary">
		        		Submit
		      		</button>
				</form>
			</div>
		)
	}
}

export default ContactMe