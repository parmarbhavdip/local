import React, { Component } from 'react';

class EmiCalculator extends Component {
     constructor(props) {
          super(props);
          this.state = {
               principal: '',
               interest: '',
               tenure: '',
               emi: 0,
               totalInterest: 0,
               totalPayment: 0
          };
     }

     handleInputChange = (event) => {
          const { name, value } = event.target;
          this.setState({ [name]: value });
     };

     calculateEMI = (e) => {
          e.preventDefault();
          const { principal, interest, tenure } = this.state;

          const P = parseFloat(principal);
          const r = parseFloat(interest) / 12 / 100;
          const n = parseFloat(tenure);

          if (P > 0 && r > 0 && n > 0) {
               const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
               const totalPayable = emiValue * n;
               const totalInt = totalPayable - P;

               this.setState({
                    emi: emiValue.toFixed(2),
                    totalInterest: totalInt.toFixed(2),
                    totalPayment: totalPayable.toFixed(2)
               });
          }
     };

     render() {
          return (
               <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h2>EMI Calculator</h2>
                    <form onSubmit={this.calculateEMI}>
                         <div style={{ marginBottom: '10px' }}>
                              <label>Loan Amount (Principal): </label>
                              <input
                                   type="number"
                                   name="principal"
                                   value={this.state.principal}
                                   onChange={this.handleInputChange}
                                   required
                              />
                         </div>
                         <div style={{ marginBottom: '10px' }}>
                              <label>Annual Interest Rate (%): </label>
                              <input
                                   type="number"
                                   name="interest"
                                   step="0.01"
                                   value={this.state.interest}
                                   onChange={this.handleInputChange}
                                   required
                              />
                         </div>
                         <div style={{ marginBottom: '10px' }}>
                              <label>Tenure (Months): </label>
                              <input
                                   type="number"
                                   name="tenure"
                                   value={this.state.tenure}
                                   onChange={this.handleInputChange}
                                   required
                              />
                         </div>
                         <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#646cff', color: 'white' }}>
                              Calculate
                         </button>
                    </form>

                    {this.state.emi > 0 && (
                         <div style={{ marginTop: '20px', backgroundColor: '#a09e9eff', padding: '10px' }}>
                              <p><strong>Monthly EMI:</strong> ₹{this.state.emi}</p>

                         </div>
                    )}
               </div>
          );
     }
}

export default EmiCalculator;