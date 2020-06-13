import React from 'react';
import logo from './logo.svg';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  // constructor()
  // {
  //   super()
  //   this.state = {

  //   }
  // }
  const portfolioLinks = [
    {
    title: 'Thread',
    caption: 'Exprience the power of social media in your business and beyond'

    },
    {
      title: 'Social Media Marketing',
      caption: 'Exprience the power of social media in your business and beyond'
  
    },
    {
      title: 'Ecommerce specialist',
      caption: 'Exprience the power of social media in your business and beyond'
  
    },
    {
      title: 'Mobile Developer',
      caption: 'Bullding cross platform mobile app that runs on android and ios'
  
    },
    {
      title: 'Web Developer',
      caption: 'Experience the awesomness of web application'
  
    },
    {
      title: 'Backend Developer',
      caption: 'Using spring boot to build strong micro services'
  
    },
]
  return (
    <div className="App">
    
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-secondary" id="mainNav">
        <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">JERRY.IT<img src="assets/img/logo.png" alt="" /></a><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fa fa-bars ml-1"></i></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Project</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Client</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    
    <header className="masthead">
        <div className="container">
            <div className="masthead-subheading">Hi, I'm Jerry. am a full stack developer.Welcome To My Studio!</div>
            <div className="masthead-subheading text-uppercase">It's Nice To Meet You</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Learn more about what i do</a>
              </div>
              
          </header>
          
          
          
          

    <section className="page-section bg-warning" id="services">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase text-light" >Project</h2>
                <h3 className="section-subheading text-muted">Checkout my awesome project.</h3>
            </div>
            <div className="row text-center">
                <div className="col-md-4">
                    <span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i></span>
                    <h4 className="rounded-circle text-light">Web</h4>
                    <p className="text-muted">Building website for small and medium business owners. Promoting your product and services with the best available platform </p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-laptop fa-stack-1x fa-inverse"></i></span>
                    <h4 className="my-3 text-light">Mobile App</h4>
                    <p className="text-muted">Developing Android and Ios Application making it easy to reachout to your customers.</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-lock fa-stack-1x fa-inverse"></i></span>
                    <h4 className="my-3 text-light">Backend Services</h4>
                    <p className="text-muted">Building Apis that other services can integrate into for various business purpose</p>
                </div>
            </div>
        </div>
    </section>
    
      <Portfolio portfolioLinks = {portfolioLinks}></Portfolio>
    
    <section className="page-section" id="about">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <ul className="timeline">
                <li>
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>2009-2011</h4>
                            <h4 className="subheading">My Humble Beginnings</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="" /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>March 2011</h4>
                            <h4 className="subheading">My Skills</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li>
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="" /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>December 2012</h4>
                            <h4 className="subheading">Transition to Full Service</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="" /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>July 2014</h4>
                            <h4 className="subheading">Phase Two Expansion</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image">
                        <h4>Be Part<br />Of Our<br />Story!</h4>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    
    <section className="page-section bg-light" id="team">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Our Amazing Client</h2>
                <h3 className="section-subheading text-muted">Bringing that dream to reality is our number one priority.</h3>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="" />
                        <h4>RemmiChops</h4>
                        <p className="text-muted"><a href="https://web.facebook.com/Remmizchops/?_rdc=1&_rdr"> Visit Site </a></p>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="" />
                        <h4>Nimbbly Innovation</h4>
                        <p className="text-muted"><a href="nimbbly.com">Visit site</a></p>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="" />
                        <h4>Diana Petersen</h4>
                        <p className="text-muted"><a href="#">Visit Site</a></p>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
            </div>
        </div>
    </section>

          
    
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/envato.jpg" alt="" /></a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></a>
                </div>
            </div>
        </div>
    </div>
    
    <section className="page-section" id="contact">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input className="form-control" name="name" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="form-group">
                  <input className="form-control" id="email" name="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="form-group mb-md-0">
                            <input className="form-control" name="phone" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                            <p className="help-block text-danger"></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group form-group-textarea mb-md-0">
                            <textarea className="form-control" name="message" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div id="success"></div>
                    <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                </div>
            </form>
        </div>
    </section>
    
    <footer className="footer py-4 bg-dark">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 text-lg-left text-light">Copyright © Jeremiah Okorie Imo 2020</div>
                <div className="col-lg-4 my-3 my-lg-0">
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin-in"></i></a>
                </div>
                <div className="col-lg-4 text-lg-right"><a className="mr-3" href="#!">Privacy Policy</a><a href="#!">Terms of Use</a></div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
