import { useState } from 'react'
import './App.css'

// NAVBAR Component
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand fs-3 fw-bold" href="#">
          {props.sitename}
        </a>
      </div>
    </nav>
  );
}

// Header Component
function Header(props) {
  return (
    <div className="bg-warning text-dark py-5 text-center">
      <div className="container">
        <h1 className="display-3 fw-bold">{props.header}</h1>
        <p className="lead fs-3">{props.slogan}</p>
        <img
          src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=600"
          alt="dance"
          className="img-fluid rounded mt-3"
        />
        <br /><br />
        <a href="#join" className="btn btn-danger btn-lg">{props.join}</a>
      </div>
    </div>
  );
}

// WeTeach Component
function WeTeach(props) {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">We Teach</h2>
      <div className="row">
        {props.danceClasses.map((dance, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className={`card shadow-lg h-100 border-${dance.color}`}>
              <div className={`card-header bg-${dance.color} text-white text-center`}>
                <h5>{dance.name}</h5>
              </div>
              <img
                src={dance.img}
                className="card-img"
                alt={dance.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <p className="card-text fs-6">{dance.desc}</p>
                <h6 className="fw-bold text-danger">{dance.price}</h6>
                <button className="btn btn-sm btn-primary">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ✅ FIXED Reviews Component  
function Reviews() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">Student Reviews</h2>
        <div className="row">

          {/* Review 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <span className="text-warning">★★★★★</span>
                </div>
                <p className="card-text">
                  "Amazing experience! The instructors are very supportive and friendly.
                  I improved so much in just 3 months!"
                </p>
                <h6 className="card-title">Priya Sharma</h6>
                <small className="text-muted">Hip Hop Student</small>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <span className="text-warning">★★★★★</span>
                </div>
                <p className="card-text">
                  "Best dance academy in Bhavnagar! The atmosphere is so positive and energetic. Highly recommended!"
                </p>
                <h6 className="card-title">Raj Patel</h6>
                <small className="text-muted">Bollywood Student</small>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <span className="text-warning">★★★★★</span>
                </div>
                <p className="card-text">
                  "I gained so much confidence here. The instructors really care about each student's progress!"
                </p>
                <h6 className="card-title">Anjali Verma</h6>
                <small className="text-muted">Free Style Student</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Why Join Us Component
function WhyJoinUs() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Why Join Us?</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="d-flex">
            <div className="fs-3 text-danger me-3">👨‍🏫</div>
            <div>
              <h5>Professional Instructors</h5>
              <p>Certified and experienced dance professionals with years of expertise.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="d-flex">
            <div className="fs-3 text-danger me-3">🎵</div>
            <div>
              <h5>Modern Music</h5>
              <p>Learn with latest trending music and contemporary choreography.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="d-flex">
            <div className="fs-3 text-danger me-3">👥</div>
            <div>
              <h5>Small Batches</h5>
              <p>Limited students per class ensuring personalized attention to everyone.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="d-flex">
            <div className="fs-3 text-danger me-3">⭐</div>
            <div>
              <h5>Regular Performances</h5>
              <p>Showcase your talent in our monthly events and competitions.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Join Form Component
function JoinForm() {
  return (
    <div id="join" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Join Our Class</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow">
              <input type="text" className="form-control mb-3" placeholder="Your Name" />
              <input type="number" className="form-control mb-3" placeholder="Age" />
              <input type="text" className="form-control mb-3" placeholder="Phone Number" />
              <button className="btn btn-success btn-lg w-100">Send & Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <p>© 2025 Dance Star Academy | Bhavnagar</p>
    </footer>
  );
}

// Main App Component
function App() {
  const danceClasses = [
    { name: 'Hip Hop', desc: 'Learn trendy hip hop moves with high energy beats', price: '₹500/month', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400', color: 'danger' },
    { name: 'Bollywood', desc: 'Master iconic Bollywood moves & graceful expressions', price: '₹500/month', img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400', color: 'info' },
    { name: 'Free Style', desc: 'Express yourself with creative & personal freedom', price: '₹500/month', img: 'https://images.unsplash.com/photo-1508700115892-bba09fc4c795?w=400', color: 'success' },
    { name: 'Contemporary', desc: 'Modern dance form with fluid movements', price: '₹500/month', img: 'https://images.unsplash.com/photo-1540575467063-178f50902556?w=400', color: 'warning' },
    { name: 'Jazz Dance', desc: 'Energetic and rhythmic dance style', price: '₹500/month', img: 'https://images.unsplash.com/photo-1547153760-18cad600875d?w=400', color: 'danger' },
    { name: 'Salsa', desc: 'Latin dance with passion and rhythm', price: '₹500/month', img: 'https://images.unsplash.com/photo-1496924663400-36d3da36b126?w=400', color: 'info' },
    { name: 'Belly Dance', desc: 'Graceful middle eastern dance form', price: '₹500/month', img: 'https://images.unsplash.com/photo-1538391846015-35bbaf2341de?w=400', color: 'success' },
    { name: 'Kathak', desc: 'Classical Indian dance with storytelling', price: '₹500/month', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', color: 'warning' },
    { name: 'Bhangra', desc: 'Traditional Punjabi energetic dance', price: '₹500/month', img: 'https://images.unsplash.com/photo-1533322066927-8fb0ce32a4ea?w=400', color: 'danger' },
    { name: 'Zumba', desc: 'Fun fitness dance to latin music', price: '₹500/month', img: 'https://images.unsplash.com/photo-1524727245790-f26038e4d197?w=400', color: 'info' },
    { name: 'Ballet', desc: 'Classical graceful dance technique', price: '₹500/month', img: 'https://images.unsplash.com/photo-1508700136150-ef75a9dbdb39?w=400', color: 'success' },
    { name: 'Popping', desc: 'Street dance with popping movements', price: '₹500/month', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400', color: 'warning' },
  ];

  return (
    <>
      <Navbar sitename="Dance Star Academy" />
      <Header header="Dance Star Academy" slogan="Best Dance Classes in Bhavnagar" join="Join Now - Only ₹4500/month" />
      <WeTeach danceClasses={danceClasses} />
      <Reviews />
      <WhyJoinUs />
      <JoinForm />
      <Footer />
    </>
  );
}

export default App;
