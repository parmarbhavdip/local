import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const PlaceholderSVG = ({ text }) => (
     <svg width="80" height="80" viewBox="0 0 100 100" className="rounded shadow-sm">
          <rect width="100" height="100" fill="#f8f9fa" />
          <rect width="100" height="100" fill="none" stroke="#dee2e6" strokeWidth="2" />
          <text
               x="50%" y="50%"
               dominantBaseline="middle"
               textAnchor="middle"
               fill="#adb5bd"
               fontSize="12"
               fontWeight="bold"
          >
               {text || 'No Img'}
          </text>
     </svg>
);

class CartItem extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               quantity: parseInt(props.quantity) || 1,
               imageError: false
          };
     }

     updateQuantity = (mode) => {
          this.setState((prevState) => {
               if (mode === '+') {
                    return { quantity: prevState.quantity + 1 };
               } else if (mode === '-' && prevState.quantity > 1) {
                    return { quantity: prevState.quantity - 1 };
               }
               return null;
          });
     }

     render() {
          const { name, description, price, photo } = this.props;
          const { quantity, imageError } = this.state;

          return (
               <div className="row align-items-center mb-4 border-bottom pb-3">
                    <div className="col-2 text-center">
                         {!imageError ? (
                              <img
                                   src={photo}
                                   alt={name}
                                   className="img-fluid rounded shadow-sm"
                                   style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                   onError={() => this.setState({ imageError: true })}
                              />
                         ) : (
                              <PlaceholderSVG text="Item" />
                         )}
                    </div>

                    <div className="col-3">
                         <h5 className="mb-0 fw-bold">{name}</h5>
                         <p className="text-muted small mb-0">{description}</p>
                    </div>

                    <div className="col-2 text-center text-muted">
                         ₹{parseInt(price).toLocaleString()}
                    </div>

                    <div className="col-2">
                         <div className="input-group input-group-sm">
                              <button
                                   className="btn btn-outline-dark"
                                   onClick={() => this.updateQuantity('-')}
                              > - </button>
                              <input
                                   type="text"
                                   className="form-control text-center bg-white"
                                   value={quantity}
                                   readOnly
                              />
                              <button
                                   className="btn btn-outline-dark"
                                   onClick={() => this.updateQuantity('+')}
                              > + </button>
                         </div>
                    </div>

                    <div className="col-2 text-end fw-bold text-dark">
                         ₹{(price * quantity).toLocaleString()}
                    </div>

                    <div className="col-1 text-end">
                         <button className="btn btn-sm btn-link text-danger p-0">Delete</button>
                    </div>
               </div>
          );
     }
}

export default function App() {
     return (
          <div className="container my-5">
               <div className="row justify-content-center">
                    <div className="col-lg-10">
                         <div className="card shadow-lg border-0 rounded-4">
                              <div className="card-header bg-white border-0 pt-4">
                                   <h2 className="text-center fw-bold">Shopping Cart</h2>
                              </div>

                              <div className="card-body px-4">
                                   <CartItem
                                        name='iPhone 15'
                                        photo='https://invalid-url-test.com/img.jpg'
                                        description='Apple smartphone - 128GB'
                                        price={100000}
                                        quantity={1}
                                   />
                                   <CartItem
                                        name='Macbook Air'
                                        photo='https://picsum.photos/100?random=2'
                                        description='Apple laptop M2 Chip'
                                        price={125000}
                                        quantity={1}
                                   />
                                   <CartItem
                                        name='Airpods Pro'
                                        photo='https://picsum.photos/100?random=3'
                                        description='Noise cancelling earbuds'
                                        price={25000}
                                        quantity={1}
                                   />
                              </div>

                              <div className="card-footer bg-light p-4 border-0 rounded-bottom-4 d-flex justify-content-between align-items-center">
                                   <span className="text-muted">Prices include all taxes</span>
                                   <button className="btn btn-primary btn-lg px-5 shadow-sm">
                                        Checkout Now
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}