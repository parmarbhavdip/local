function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#">
            Dr. bhavdipsinh
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div  className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
              <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-light text-dark text-center py-5" style={{ paddingTop: "100px" }}>
        <div className="container">
          <h1 className="display-4 fw-bold text-primary">Welcome to Dr. Ashish Dental Clinic</h1>
          <p className="lead fs-3">Your Smile, Our Passion</p>
          <img
            src="https://petpros.net/wp-content/uploads/2017/01/blog_0217_01.jpg"
            alt="Dental Clinic"
            className="img-fluid rounded shadow mt-4"
            style={{ maxHeight: "400px" }}
          />
          <br /><br />
          <a href="#contact" className="btn btn-primary btn-lg px-5">Book Appointment Now</a>
        </div>
      </section>

      {/* About Doctor */}
      <section id="about" className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://www.lonetreevet.com/blog/wp-content/uploads/2018/01/LoneTree_iStock-648520656-1024x683.jpg"
                alt="Dr Ashish"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-primary mb-3">Meet Dr. Ashish Chudasama</h2>
              <h5 className="text-success">BDS, MDS - Dental Surgeon (8+ Years Experience)</h5>
              <p className="fs-5 mt-4">
                Specialist in painless dental treatment with latest technology.
              </p>
              <ul className="list-unstyled fs-5 mt-4">
                <li>Modern & Painless Treatment</li>
                <li>Root Canal Expert</li>
                <li>Braces & Aligners</li>
                <li>Teeth Whitening</li>
                <li>Dental Implants</li>
                <li>1000+ Happy Patients</li>
                <li>Emergency Service Available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary mb-5 fw-bold">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow border-0">
                <div className="card-body text-center">
                  <h4 className="card-title text-success">Teeth Cleaning</h4>
                  <p className="card-text">Professional cleaning & polishing for bright smile</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow border-0">
                <div className="card-body text-center">
                  <h4 className="card-title text-success">Root Canal Treatment</h4>
                  <p className="card-text">Painless RCT with advanced rotary system</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow border-0">
                <div className="card-body text-center">
                  <h4 className="card-title text-success">Braces & Aligners</h4>
                  <p className="card-text">Metal, Ceramic & Invisible Aligners available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Appointment */}
      <section id="contact" className="py-5 bg-primary text-white">
        <div className="container">
          <h2 className="text-center mb-5">Book Your Appointment Today</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="bg-white text-dark p-4 rounded-4 shadow">
                <div className="mb-3">
                  <input type="text" className="form-control form-control-lg" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control form-control-lg" placeholder="Phone Number" />
                </div>
                <div className="mb-3">
                  <select className="form-select form-select-lg">
                    <option>Select Service</option>
                    <option>Teeth Cleaning</option>
                    <option>Root Canal</option>
                    <option>Braces</option>
                    <option>Checkup</option>
                  </select>
                </div>
                <button className="btn btn-success btn-lg w-100">
                  Book Appointment
                </button>
              </div>

              <div className="text-center mt-4">
                <p className="fs-4 mb-1">Call / WhatsApp: <strong>+91 9675046936</strong></p>
                <p>Address: dadani vav sihor , Bhavnagar, Gujarat</p>
                <p>Timings: Mon-Sat | 10 AM - 1 PM & 5 PM - 9 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p className="mb-0">© 2025 </p>
      </footer>
    </>
  );
}