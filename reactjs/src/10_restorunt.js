import React from 'react';

class DinningTable extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               thali: 0,
               roti: 0,
               chas: 0,
               sweet: 0,
               papad: 0,
               price: 0
          };

          this.name = props.name;
          this.tableno = props.tableno;

          this.thaliPrice = 100;
          this.rotiPrice = 10;
          this.papadPrice = 7;
          this.chasPrice = 11;
          this.sweetPrice = 15.25;
     }

     updatePrice = () => {
          this.setState({
               price:
                    this.state.thali * this.thaliPrice +
                    this.state.roti * this.rotiPrice +
                    this.state.chas * this.chasPrice +
                    this.state.papad * this.papadPrice +
                    this.state.sweet * this.sweetPrice
          });
     };

     updateThali = () => this.setState({ thali: this.state.thali + 1 }, this.updatePrice);
     updateRoti = () => this.setState({ roti: this.state.roti + 1 }, this.updatePrice);
     updateChas = () => this.setState({ chas: this.state.chas + 1 }, this.updatePrice);
     updateSweet = () => this.setState({ sweet: this.state.sweet + 1 }, this.updatePrice);
     updatePapad = () => this.setState({ papad: this.state.papad + 1 }, this.updatePrice);

     render() {
          return (
               <div className="col-lg-3 my-3">
                    <div className="card shadow">
                         <div className="card-header text-bg-primary d-flex justify-content-between">
                              <h5>{this.name}</h5>
                              <span className="badge bg-white text-primary">{this.tableno}</span>
                         </div>
                         <div className="card-body">
                              <button className="btn btn-danger w-100" onClick={this.updateThali}>
                                   Thali ({this.state.thali})
                              </button>

                              <div className="row mt-2">
                                   <div className="col-6">
                                        <button className="btn btn-dark w-100" onClick={this.updateRoti}>
                                             Roti ({this.state.roti})
                                        </button>
                                   </div>
                                   <div className="col-6">
                                        <button className="btn btn-warning w-100" onClick={this.updateChas}>
                                             Chas ({this.state.chas})
                                        </button>
                                   </div>
                              </div>

                              <div className="row mt-2">
                                   <div className="col-6">
                                        <button className="btn btn-info w-100" onClick={this.updatePapad}>
                                             Papad ({this.state.papad})
                                        </button>
                                   </div>
                                   <div className="col-6">
                                        <button className="btn btn-success w-100" onClick={this.updateSweet}>
                                             Sweet ({this.state.sweet})
                                        </button>
                                   </div>
                              </div>
                         </div>

                         <div className="card-footer d-flex justify-content-between">
                              <strong>Total</strong>
                              <strong>₹ {this.state.price.toFixed(2)}</strong>
                         </div>
                    </div>
               </div>
          );
     }
}

export default function App() {
     return (
          <div className="container">
               <div className="row">
                    <DinningTable name="Ram Patel" tableno="9" />
                    <DinningTable name="Krishna Pandya" tableno="25" />
               </div>
          </div>
     );
}
