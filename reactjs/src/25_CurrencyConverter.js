import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class CurrencyConverter extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               amount: "",
               fromCurrency: "INR",
               toCurrency: "USD",
               result: 0
          };
     }

     rates = {
          INR: 1,
          USD: 83,
          GBP: 104,
          EUR: 90,
          JPY: 0.56
     };

     handleChange = (e) => {
          this.setState({ [e.target.name]: e.target.value });
     };

     convertCurrency = () => {
          const { amount, fromCurrency, toCurrency } = this.state;

          if (amount === "" || amount <= 0) {
               this.setState({ result: 0 });
               return;
          }

          const amountInINR = amount * this.rates[fromCurrency];
          const convertedAmount = amountInINR / this.rates[toCurrency];

          this.setState({
               result: convertedAmount.toFixed(2)
          });
     };

     render() {
          const { amount, fromCurrency, toCurrency, result } = this.state;

          return (
               <div className="container mt-5">
                    <div className="card shadow-lg p-4">
                         <h3 className="text-center text-primary mb-4">
                              Currency Converter
                         </h3>

                         <div className="row g-3">
                              <div className="col-md-4">
                                   <label className="form-label">Amount</label>
                                   <input
                                        type="number"
                                        name="amount"
                                        value={amount}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        placeholder="Enter amount"
                                   />
                              </div>

                              <div className="col-md-4">
                                   <label className="form-label">From Currency</label>
                                   <select
                                        name="fromCurrency"
                                        value={fromCurrency}
                                        onChange={this.handleChange}
                                        className="form-select"
                                   >
                                        <option value="INR">Rupees (INR)</option>
                                        <option value="USD">Dollar (USD)</option>
                                        <option value="GBP">Pound (GBP)</option>
                                        <option value="EUR">Euro (EUR)</option>
                                        <option value="JPY">Yen (JPY)</option>
                                   </select>
                              </div>

                              <div className="col-md-4">
                                   <label className="form-label">To Currency</label>
                                   <select
                                        name="toCurrency"
                                        value={toCurrency}
                                        onChange={this.handleChange}
                                        className="form-select"
                                   >
                                        <option value="INR">Rupees (INR)</option>
                                        <option value="USD">Dollar (USD)</option>
                                        <option value="GBP">Pound (GBP)</option>
                                        <option value="EUR">Euro (EUR)</option>
                                        <option value="JPY">Yen (JPY)</option>
                                   </select>
                              </div>
                         </div>

                         <div className="text-center mt-4">
                              <button
                                   className="btn btn-success px-4"
                                   onClick={this.convertCurrency}
                              >
                                   Convert
                              </button>
                         </div>

                         <h4 className="text-center mt-4 text-dark">
                              Converted Amount: <span className="text-primary">{result}</span>
                         </h4>
                    </div>
               </div>
          );
     }
}

export default CurrencyConverter;
