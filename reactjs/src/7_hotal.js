import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// 🏨 HotelCard Component
class HotelCard extends React.Component {
     renderStars = () => {
          const { rating } = this.props;
          const fullStars = Math.floor(rating);
          const stars = [];

          for (let i = 0; i < fullStars; i++) {
               stars.push(
                    <svg
                         key={i}
                         xmlns="http://www.w3.org/2000/svg"
                         width="18"
                         height="18"
                         fill="#fae9adff"
                         viewBox="0 0 16 16"
                         style={{ marginRight: "3px" }}
                    >
                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
          6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
          0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 
          4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
               );
          }
          return stars;
     };

     render() {
          const {
               imageUrl,
               title,
               subtitle,
               location,
               price,
               rating,
               showBestPriceBadge
          } = this.props;

          return (
               <div className="card hotel-card border-2 shadow rounded-5 overflow-hidden mb-4" style={{ width: '450px' }}>
                    <div className='position-relative'>

                         <img
                              src={imageUrl}
                              className="card-img-top"
                              alt={title}
                              style={{ height: '300px', width: "100%", objectFit: "cover" }}
                         />

                         <div className="position-absolute bottom-0 end-0 bg-dark bg-opacity-75 text-white px-3 py-2 rounded-start"
                              style={{ fontWeight: 'lighter', fontSize: '15px' }}>
                              {rating.toFixed(2)} <small>/5</small>
                         </div>

                         {showBestPriceBadge && (
                              <span className="position-absolute top-0 start-0 bg-danger text-white px-3 py-1"
                                   style={{ fontSize: '12px', fontWeight: 'lighter' }}>
                                   Best Price
                              </span>
                         )}
                    </div>

                    <div className="card-body p-3">
                         <h5 className="mb-1 fw-bold text-dark">{title}</h5>
                         <p className="text-muted mb-2">{subtitle}</p>

                         <div className="d-flex align-items-center text-secondary mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                   fill="#e86868ff" className="me-1" viewBox="0 0 16 16">
                                   <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 
              6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 
              0-6 3 3 0 0 0 0 6z"/>
                              </svg>
                              {location}
                         </div>

                         <div className="mb-3">
                              {this.renderStars()}
                              <small className="text-muted ms-1">({rating.toFixed(1)})</small>
                         </div>

                         <h4>₹{price.toLocaleString("en-IN")}</h4>
                    </div>
               </div>
          );
     }
}

// 🏨 Main App Component
class App extends React.Component {
     render() {
          const hotelData = [
               {
                    imageUrl: "https://images.unsplash.com/photo-1551776235-dde6d4829808?w=800",
                    title: "ESSOTTO RECREATION HUB",
                    subtitle: "Comfortable stay with premium amenities",
                    location: "KIADB Export Area",
                    price: 391,
                    rating: 3.8,
                    showBestPriceBadge: true
               },
                      {
                    imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
                    title: "Hilltop Resort",
                    subtitle: "Nature retreat with mountain view",
                    location: "Ooty, Tamil Nadu",
                    price: 720,
                    rating: 4.5,
                    showBestPriceBadge: true
               },
               {
                    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
                    title: "Sunset City Inn",
                    subtitle: "City view rooms with balcony",
                    location: "Mumbai Central",
                    price: 540,
                    rating: 4.2,
                    showBestPriceBadge: true
               },
    
               {
                    imageUrl: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210cd?w=800",
                    title: "City Business Stay",
                    subtitle: "Business friendly rooms with workspace",
                    location: "Bangalore",
                    price: 310,
                    rating: 3.9,
                    showBestPriceBadge: false
               },
               {
                    imageUrl: "https://picsum.photos/600/400",
                    title: "Blue Lagoon Resort",
                    subtitle: "Luxury stay beside the lake",
                    location: "Udaipur, Rajasthan",
                    price: 850,
                    rating: 4.7,
                    showBestPriceBadge: true
               }
          ];

          return (
               <div className="container my-5">
                    <h1 className="text-center mb-4">Hotel Listing</h1>

                    <div className="d-flex flex-wrap justify-content-center gap-4">
                         {hotelData.map((hotel, index) => (
                              <HotelCard
                                   key={index}
                                   imageUrl={hotel.imageUrl}
                                   title={hotel.title}
                                   subtitle={hotel.subtitle}
                                   location={hotel.location}
                                   price={hotel.price}
                                   rating={hotel.rating}
                                   showBestPriceBadge={hotel.showBestPriceBadge}
                              />
                         ))}
                    </div>
               </div>
          );
     }
}

export default App;
