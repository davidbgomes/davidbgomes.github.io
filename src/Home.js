import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Helmet} from 'react-helmet'
import Grid from "./components/Grid"
import { config } from 'react-spring/renderprops'
import { Slug, Fade } from './components/Primitives'
import data from './components/Data'
import { faTimes, faUserTie, faAward, faBriefcase , faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { isMobile } from "react-device-detect"


class Cell extends React.Component {
    render() {

        const { toggle, name, description, css, active } = this.props


        return (
            <div
                className="cell"
                style={{ backgroundImage: css, cursor: !active ? 'pointer' : 'auto' }}
                onClick={!active ? toggle : undefined}>
                <Fade show={active} delay={active ? 500 : 0}>
                    <div className="details">
                        <Slug delay={600}>
                            <div className="circle" style={{ background: css }} />
                            <div className="close">
                                <FontAwesomeIcon
                                    type="close"
                                    style={{ cursor: 'pointer' }}
                                    onClick={toggle}
                                    icon={faTimes}
                                />
                            </div>
                            <h1>{name}</h1>
                            {name === "About Me" ?
                                <div className={`mb-auto ${isMobile && " gridContentDiv"}`}>
                                    <p>Born and raised in Lisbon, I've a Bachelor's Degree in Computer Sciences in Universidade Nova de Lisboa.</p>
                                    <p>Ever since my Dad bought his first PC and showed me MS-DOS and early videogames, I was fascinated by that world, which led me to
                                        pursue a carreer as a software engineer.
                                    </p>
                                    <p>When I'm not developing, my biggest hobby is playing guitar. I also go to gym, chill out at home reading, watching movies or playing 
                                    videogames, or go to a bar with friends on the weekends in the B.C. era.
                                    </p>
                                    <p>
                                    My current goal is to join a company that allows me to work and travel, since that has been my long time dream since I started working, and I've
                                    been developing my skills and working hard to make that happen.
                                    </p>
                                </div>
                            :
                                name === "Projects" ?
                                    <React.Fragment>
                                        <div className={`mb-auto ${isMobile && " gridContentDiv"}`}>
                                            <p className="mt-3">
                                                Over the years I taught myself Javascript (Vanilla, React.js and Node.js).
                                                As I went on to learn how to do basic to-do lists and calculators and began to have a deeper understanding of how it works, I 
                                                started developing an E-Commerce website, that over time and with a lot of work, 
                                                became <a target="_blank" className="textLink" href="https://oxyllus.pt">Oxyllus</a>.
                                                 So far it's only available in Portugal. I sell one product at a time and for each sale made, a tree will be planted.
                                            </p>
                                            <p>
                                                The website was done with React.js and CSS for the front-end, and Node.js for the back-end. I used Firebase for the Database
                                                (Firestore), Authentication, Cloud Functions (serverless functions with Node), File Storage and Hosting. I've also used Google Analytics on the site.
                                                For the payment gateway I integrated two API's, for Credit Card purchases I used Stripe, and for portuguese Multibanco and MB-Way, that are
                                                used immensely here for online payments, I used EasyPay's API.
                                            </p>
                                            <p>
                                                Apart from that, I'm into doing small Python projects as well, like youtube to mp3 converter, instagram follow bot, basic game bots, 
                                                basically something that I can use and enjoy.
                                            </p>
                                        </div>
                                    </React.Fragment>
                                : 
                                    name === "Technologies" ?
                                        <div className="mb-auto">
                                            <div className="row">
                                                <div className="col">
                                                    <p>
                                                        <ul>
                                                            <li className="mt-3">HTML</li>
                                                            <li className="mt-3">CSS</li>
                                                            <li className="mt-3">Javascript</li>
                                                            <li className="mt-3">React.js</li>
                                                            <li className="mt-3">Node.js</li>
                                                            <li className="mt-3">Firebase</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                                <div className="col">
                                                    <p>
                                                        <ul>
                                                            <li className="mt-3">Outsystems</li>
                                                            <li className="mt-3">SQL Server</li>

                                                            <li className="mt-3">Python</li>
                                                            <li className="mt-3">Selenium</li>
                                                            <li className="mt-3">Java</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    :
                                        name === "Job Experience" ?
                                        <div className={`mb-auto ${isMobile && " gridContentDiv"}`}>
                                            <p>
                                                <ul>
                                                    <li className="mt-3">Inocrowd - After college, I interned at a start-up and worked as a Web Developer, mainly with HTML, CSS and Wordpress.</li>
                                                    <li className="mt-3">TimeStamp - Following that experience, I worked on Document Management, which mostly deals with Java, SQL Server, HTML, Javascript and IdocScript.</li>
                                                    <li className="mt-3">Truewind - As I wanted to work abroad, I enlisted in an international intership, which took place in Recife, Brazil and there I started working with
                                                        Outsystems, which is a low code platform for developing web-apps, and after that 6 months in Brazil, I continued working for them in Portugal.
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                        : null
                            }
                        </Slug>
                    </div>
                </Fade>

                {!active &&
                    <FontAwesomeIcon
                        icon={name === "About Me" ? faUserTie :
                              name === "Projects" ? faProjectDiagram : 
                              name === "Technologies" ? faReact :
                              name === "Job Experience" ? faBriefcase : null}
                        className="fa-5x"
                    />
                }

                <Fade
                    show={!active}
                    from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
                    enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                    leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
                    delay={active ? 0 : 400}>

                    <div className="default">
                        <div style={{ zIndex: 1 }}>
                            <span className="gridTitle">{name}</span>
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
}


class Home extends React.Component{

    state = { data }

    render(){
       	return(
          	<div className="container-fluid" style={{paddingBottom:"200px"}}>
    	   		<Helmet>
    		    	<title>David Gomes - Portfolio</title>
    	    		<meta name="description" content="David Gomes portfolio with contact info." />
    	    	</Helmet>
            	<h1>Portfolio</h1>
             	<p className="text-center">
             		Hello! My name is David Gomes and I'm a portuguese software developer.
            	</p>
                <p className="text-center">
                    Check out more about me, my professional journey and my personal projects.
                </p>

            	


                <Grid
                    className="grid"
                    // Arbitrary data, should contain keys, possibly heights, etc.
                    data={this.state.data}
                    // Key accessor, instructs grid on how to fet individual keys from the data set
                    keys={d => d.name}
                    // Can be a fixed value or an individual data accessor
                    heights={180}
                    // Number of columns
                    columns={2}
                    // Space between elements
                    margin={20}
                    // Removes the possibility to scroll away from a maximized element
                    lockScroll={true}
                    // Delay when active elements (blown up) are minimized again
                    closeDelay={500}
                    // Regular react-spring configs
                    config={config.slow}>
                    {(data, active, toggle) => (
                      <Cell {...data} active={active} toggle={toggle} />
                    )}
                </Grid>

                <p className="text-center mt-4 mr-auto ml-auto" style={{maxWidth:"700px"}}>
                    Since my goal of building an E-Commerce site is completed, right now 
                    I'm looking for a <u>remote job as a Fullstack developer or React developer</u>.
                </p>

                <p className="text-center mt-4">
                    <b>For any job offers or any questions, get in touch with me in the 'Contact Me' page.</b>
                </p>

          </div>
       	)

    }

}

export default Home