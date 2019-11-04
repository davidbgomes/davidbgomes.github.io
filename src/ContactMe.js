import React from "react"
import { useAlert } from 'react-alert'
import { Alert } from 'reactstrap'

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
	}


	handleSubmit (event) {
		event.preventDefault()
		const templateId = 'contact_me';
		this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
	}

	sendFeedback (templateId, variables) {
		window.emailjs.send('gmail', templateId,variables).then(res => {
    		console.log('Email successfully sent!')
  		})
  	// Handle errors here however you like, or use a React error boundary
  		.catch(err => console.error('The following error has ocurred:', err))
	}

	resetForm(){
		this.setState({
			name: "",
			email: "",
			message: "",
			showAlert: false,
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
  		if(this.state.name !== "" && this.state.email !== "" && this.state.message !== ""){		
	  		this.setState(prevState => {
	  			return{
	  				showAlert: !prevState.showAlert
	  			}
	  		})
  		}
  	}

	render(){

			console.log(this.state.showAlert)
		return(


			<div className="container-fluid">

				<Alert className="alert-success" color="primary" isOpen={this.state.showAlert} toggle={this.toggleAlert}> Email sent successfully! </Alert>
				<h2>Contact Me</h2>
				<p>Feel free to contact me about possible job opportunities or questions you may have.</p>
				<p style={{paddingBottom:"50px"}}>I'll get back to you as soon as possible.</p>

				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col">
							<div className="form-group">
								<label htmlFor="nameInput">Name/Company:</label>
								<input type="text" className="form-control" onChange={this.handleNameChange} id="nameInput" placeholder="Enter your name or the company name" required={true}/>
							</div>
						</div>
						<div className="col">
							<div className="form-group">
								<label htmlFor="emailInput">Email:</label>
								<input type="email" className="form-control" onChange={this.handleEmailChange} id="emailInput" placeholder="Enter your email address" required={true}/>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message:</label>
						<textarea className="form-control" value={this.message} onChange={this.handleTextChange} placeholder="Message goes here" cols="50" rows="15" id="message" required={true}/>
					</div>
					<button className ="btn btn-primary" onClick={this.toggleAlert}>
	        			Submit
	      			</button>
					
				</form>
			</div>
		)
	}
	

}

export default ContactMe