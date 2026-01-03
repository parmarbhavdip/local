import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class CountryCard extends React.Component {
     render() {
          const { name, capital, currency, area, map } = this.props;

          return (
               <div className="col-md-6 col-lg-3 mb-4">
                    <div className="card shadow h-100">
                         <img
                              src={map}
                              className="card-img-top p-3"
                              alt={name}
                              style={{ height: "160px", objectFit: "contain" }}
                         />

                         <div className="card-body">
                              <h4 className="card-title text-center mb-3">{name}</h4>

                              <ul className="list-group list-group-flush">
                                   <li className="list-group-item d-flex justify-content-between">
                                        <strong>Capital</strong>
                                        <span>{capital}</span>
                                   </li>
                                   <li className="list-group-item d-flex justify-content-between">
                                        <strong>Area</strong>
                                        <span>{area.toLocaleString()} km²</span>
                                   </li>
                                   <li className="list-group-item d-flex justify-content-between">
                                        <strong>Currency</strong>
                                        <span>{currency}</span>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          );
     }
}

function App() {
     const countries = [
          {
               country: "India",
               capital: "New Delhi",
               area: 3287263,
               currency: "Indian Rupee",
               map: "https://upload.wikimedia.org/wikipedia/commons/4/4a/India_%28orthographic_projection%29.svg"
          },
          {
               country: "United States",
               capital: "Washington, D.C.",
               area: 9833517,
               currency: "US Dollar",
               map: "https://upload.wikimedia.org/wikipedia/commons/a/a4/USA_orthographic.svg"
          },
          {
               country: "Canada",
               capital: "Ottawa",
               area: 9984670,
               currency: "Canadian Dollar",
               map: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Canada_%28orthographic_projection%29.svg"
          },
          {
               country: "Japan",
               capital: "Tokyo",
               area: 377975,
               currency: "Yen",
               map: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Japan_%28orthographic_projection%29.svg"
          }
     ];


     return (
          <div className="container my-5">
               <h2 className="text-center mb-4 fw-bold"> World Countries</h2>


               <div className="row">
                    {countries.map((item, index) => (
                         <CountryCard
                              key={index}
                              name={item.country}
                              capital={item.capital}
                              area={item.area}
                              currency={item.currency}
                              map={item.map}
                         />
                    ))}
               </div>
          </div>
     );
}

export default App;
