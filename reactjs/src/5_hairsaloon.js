function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <a className="navbar-brand fs-2 fw-bold text-warning" href="#">
            Pawfect Cut
          </a>
          <span className="text-white ms-2 fs-4">– Cat Hair Salon</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center text-white py-5" style={{ background: "linear-gradient(135deg, #ff9a9e, #fad0c4)" }}>
        <div className="container">
          <h1 className="display-3 fw-bold">Best Cat Hair Salon!</h1>
          <p className="lead fs-2">We make your cat look like a superstar</p>
          
          <img 
            src="https://thumbs.dreamstime.com/b/cat-cowboy-sitting-tiny-saloon-toy-horses-whimsical-dressed-as-relaxes-miniature-328523514.jpg" 
            alt="cute cat" 
            className="img-fluid rounded-circle shadow mt-4" 
            style={{ width: "85%", border: "12px solid white" }}
          />
          <br /><br />
          <a href="#book" className="btn btn-dark btn-lg px-5">Book Now</a>
        </div>
      </div>

      {/* Services */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-danger mb-5 fs-1">Our Grooming Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow text-center border-0">
                <div className="card-body">
                  <h3 className="text-primary">Lion Cut</h3>
                  <p className="fs-5">Your cat becomes a mini lion!</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow text-center border-0">
                <div className="card-body">
                  <h3 className="text-success">Teddy Bear Cut</h3>
                  <p className="fs-5">Super cute & fluffy look</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow text-center border-0">
                <div className="card-body">
                  <h3 className="text-warning">Bath & Brush</h3>
                  <p className="fs-5">Full wash + soft fur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Before & After */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center text-danger mb-5">Before & After</h2>
          <div className="row text-center">
            <div className="col-6 col-md-3 mb-4">
              <img src="https://images.squarespace-cdn.com/content/v1/6137e0754ecd077a890e9d64/1658355184479-OYSPP1N5OED334YSL6H8/IMG_0655.jpeg?format=1000w" className="img-fluid rounded shadow" alt="before" />
              <p className="mt-2 fw-bold">Before</p>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpj2ADOCdNMscZUhLwfKE6RqBvhwUTHdxzBQ&s" className="img-fluid rounded shadow" alt="after" />
              <p className="mt-2 text-success fw-bold">After</p>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <img src="https://i.redd.it/my-beautiful-baby-got-a-groom-today-v0-2kt89aokif6d1.jpg?width=1440&format=pjpg&auto=webp&s=0fbe01f4ea4ff5ff8ccac4fb164b87996bb29f6f" className="img-fluid rounded shadow" alt="happy cat" />
              <p className="mt-2 fw-bold">Happy Cat</p>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAqh1KdVIJDQDs2najNIOr-qt8oPjRwjtyA&s" className="img-fluid rounded shadow" alt="model cat" />
              <p className="mt-2 text-warning fw-bold">Model Cat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="py-5" style={{ background: "#ff9a9e" }}>
        <div className="container">
          <h2 className="text-center text-white mb-5 fs-1">Book Your Cat's Makeover</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="bg-white p-5 rounded-4 shadow">
                <input type="text" className="form-control form-control-lg mb-3" placeholder="Cat's Name (ex: Momo)" />
                <input type="text" className="form-control form-control-lg mb-3" placeholder="Your Name" />
                <input type="tel" className="form-control form-control-lg mb-3" placeholder="Phone Number" />
                <select className="form-select form-select-lg mb-4">
                  <option>Choose Service</option>
                  <option>Lion Cut - ₹800</option>
                  <option>Teddy Bear Cut - ₹700</option>
                  <option>Bath & Brush - ₹500</option>
                </select>
                <button className="btn btn-danger btn-lg w-100">
                  Book Now – We Love Cats!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-5">
        <h3>Pawfect Cut – Cat Hair Salon</h3>
        <p className="fs-4">Call / WhatsApp: +91 9578256541</p>
        <p>Bhavnagar, Gujarat</p>
        <p>Made by bhavdipsinh – React Homework</p>
      </footer>
    </>
  );
}