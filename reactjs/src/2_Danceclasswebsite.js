function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fs-3 fw-bold" href="#">Dance Star Academy</a>
        </div>
      </nav>

      <div className="bg-warning text-dark py-5 text-center">
        <div className="container">
          <h1 className="display-3 fw-bold">Dance Star Academy</h1>
          <p className="lead fs-3">Learn Dance & Enjoy Life!</p>
          <img src="" alt="dance" className="img-fluid rounded mt-3" />
          <br /><br />
          <a href="#join" className="btn btn-danger btn-lg">Join Now - Only ₹4500/month</a>
        </div>
      </div>

      <div className="container my-5 text-center">
        <h2 className="mb-5">We Teach</h2>
        <div className="row">
          <div className="col-md-4">
            <h4>Hip Hop</h4>
            <p>Fast & Cool Moves</p>
          </div>
          <div className="col-md-4">
            <h4>Bollywood</h4>
            <p>Like Hindi Songs</p>
          </div>
          <div className="col-md-4">
            <h4>Free Style</h4>
            <p>Dance Your Way</p>
          </div>
        </div>
      </div>

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

      <footer className="bg-dark text-white text-center py-4">
       
        <p>Bhavnagar//2025-2026</p>
      </footer>
    </>
  );
}