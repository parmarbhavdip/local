import React from "react";

function App() {
     return (
          <>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                         <a className="navbar-brand fw-bold" href="#">
                              <h1>Dance Studio</h1>
                         </a>
                         <button
                              className="navbar-toggler"
                              data-bs-toggle="collapse"
                              data-bs-target="#menu"
                         >
                              <span className="navbar-toggler-icon"></span>
                         </button>

                         <div className="collapse navbar-collapse" id="menu">
                              <ul className="navbar-nav ms-auto">
                                   <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                                   <li className="nav-item"><a className="nav-link" href="#">Classes</a></li>
                                   <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                                   <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                              </ul>
                         </div>
                    </div>
               </nav>

               <div className="bg-dark text-white text-center py-5">
                    <div className="container">
                         <h1 className="display-4 fw-bold">Learn Dance With Passion</h1>
                         <p className="lead">
                              Hip Hop • Classical • Bollywood • Contemporary
                         </p>
                         <button className="btn btn-warning btn-lg mt-3">
                              Join Now
                         </button>
                    </div>
               </div>

               <div className="container my-5">
                    <h2 className="text-center mb-4">Our Dance Classes</h2>
                    <div className="row">
                         <div className="col-md-4">
                              <div className="card shadow">
                                   <img
                                        src="https://picsum.photos/400/250?1"
                                        className="card-img-top"
                                   />
                                   <div className="card-body text-center">
                                        <h5 className="card-title">Hip Hop</h5>
                                        <p className="card-text">
                                             High-energy street style dance.
                                        </p>
                                   </div>
                              </div>
                         </div>

                         <div className="col-md-4">
                              <div className="card shadow">
                                   <img
                                        src="https://picsum.photos/400/250?2"
                                        className="card-img-top"
                                   />
                                   <div className="card-body text-center">
                                        <h5 className="card-title">Bollywood</h5>
                                        <p className="card-text">
                                             Fun & expressive Indian dance style.
                                        </p>
                                   </div>
                              </div>
                         </div>

                         <div className="col-md-4">
                              <div className="card shadow">
                                   <img
                                        src="https://picsum.photos/400/250?3"
                                        className="card-img-top"
                                   />
                                   <div className="card-body text-center">
                                        <h5 className="card-title">Classical</h5>
                                        <p className="card-text">
                                             Graceful and traditional dance forms.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>


               <div className="bg-light py-5">
                    <div className="container text-center">
                         <h2>About Us</h2>
                         <p className="mt-3">
                              We are a professional dance academy providing expert training
                              for beginners and advanced dancers. Our goal is to build
                              confidence, fitness, and creativity through dance.
                         </p>
                    </div>
               </div>

               <div className="container my-5">
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <div className="row justify-content-center">
                         <div className="col-md-6">
                              <form>
                                   <input
                                        type="text"
                                        className="form-control mb-3"
                                        placeholder="Your Name"
                                   />
                                   <input
                                        type="email"
                                        className="form-control mb-3"
                                        placeholder="Email Address"
                                   />
                                   <textarea
                                        className="form-control mb-3"
                                        placeholder="Message"
                                   ></textarea>
                                   <button className="btn btn-dark w-100">
                                        Send Message
                                   </button>
                              </form>
                         </div>
                    </div>
               </div>

               <footer className="bg-dark text-white text-center py-3">
                    © 2025 Dance Studio | All Rights Reserved
               </footer>
          </>
     );
}

export default App;
