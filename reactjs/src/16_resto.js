import React from "react";
import "./site.css";

/* Navbar */
function Menu({ sitename }) {
     return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
               <div className="container">
                    <a className="navbar-brand fw-bold fs-3">{sitename}</a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
                         <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="nav">
                         <ul className="navbar-nav ms-auto">
                              {["home", "about", "menu", "testimonials", "gallery", "contact"].map(item => (
                                   <li className="nav-item" key={item}>
                                        <a className="nav-link" href={`#${item}`}>
                                             {item.toUpperCase()}
                                        </a>
                                   </li>
                              ))}
                         </ul>
                    </div>
               </div>
          </nav>
     );
}

/* Hero */
function Slider({ sitename, slogan }) {
     return (
          <section id="home" className="hero text-white text-center">
               <div className="container">
                    <h1 className="display-3 fw-bold">{sitename}</h1>
                    <p className="lead">{slogan}</p>
                    <a href="#menu" className="btn btn-outline-light btn-lg">View Menu</a>
               </div>
          </section>
     );
}

/* About */
function AboutUs() {
     return (
          <section id="about" className="py-5">
               <div className="container text-center">
                    <h2 className="section-title">About Us</h2>
                    <p className="lead mt-3">
                         Authentic Kathiyawadi & Gujarati food with pure desi taste.
                    </p>
               </div>
          </section>
     );
}

/* Menu Item */
function MenuItem({ name, price, description }) {
     return (
          <div className="col-md-6 col-lg-3">
               <div className="card h-100 shadow-sm">
                    <img src="https://picsum.photos/400?random" className="card-img-top" />
                    <div className="card-body">
                         <h5>{name}</h5>
                         <p className="text-muted">{description}</p>
                         <h4 className="text-gold">₹{price}</h4>
                    </div>
               </div>
          </div>
     );
}

/* Menu */
function DinningMenu() {
     const items = [
          { name: "Pav Bhaji", price: 150, description: "Spicy mashed vegetables" },
          { name: "Masala Dosa", price: 120, description: "Crispy dosa with potato filling" },
          { name: "Paneer Butter Masala", price: 170, description: "Creamy paneer curry" },
          { name: "Veg Biryani", price: 160, description: "Aromatic rice dish" }
     ];

     return (
          <section id="menu" className="py-5 bg-light">
               <div className="container">
                    <h2 className="section-title text-center mb-4">Our Menu</h2>
                    <div className="row g-4">
                         {items.map((item, i) => (
                              <MenuItem key={i} {...item} />
                         ))}
                    </div>
               </div>
          </section>
     );
}

/* Testimonials */
function Testimonials() {
     return (
          <section id="testimonials" className="py-5">
               <div className="container text-center">
                    <h2 className="section-title">Customer Reviews</h2>
                    <p>⭐ Authentic taste like home ⭐</p>
               </div>
          </section>
     );
}

/* Gallery */
function Gallery() {
     return (
          <section id="gallery" className="py-5 bg-light">
               <div className="container">
                    <h2 className="section-title text-center mb-4">Gallery</h2>
                    <div className="row g-3">
                         {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                              <div className="col-6 col-md-3" key={i}>
                                   <img src={`https://picsum.photos/300?random=${i}`} className="img-fluid rounded" />
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}

/* Contact */
function ContactUs() {
     return (
          <section id="contact" className="py-5">
               <div className="container text-center">
                    <h2 className="section-title">Contact Us</h2>
                    <p>📞 +91 98765 43210</p>
                    <p>📍 Kathiyawadi Point, India</p>
               </div>
          </section>
     );
}

/* Footer */
function Footer() {
     return (
          <footer className="bg-dark text-white py-3 text-center">
               © 2025 Kathiyawadi Point
          </footer>
     );
}

/* MAIN APP */
export default function App() {
     return (
          <>
               <Menu sitename="Kathiyawadi Point" />
               <Slider sitename="Kathiyawadi Point" slogan="Desi Food With Authentic Taste" />
               <AboutUs />
               <DinningMenu />
               <Testimonials />
               <Gallery />
               <ContactUs />
               <Footer />
          </>
     );
}
