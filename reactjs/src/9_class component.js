import React from 'react';

class Resturant extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 my-3">
            <div className="card shadow">
              <div className="card-header text-bg-primary d-flex justify-content-between">
                <h5>rohan</h5>
                <h5><span className="badge bg-white text-primary">0</span></h5>
              </div>

              <div className="card-body">
                <button className="btn btn-danger w-100">
                  Thali - <span className="badge bg-white text-primary">2</span>
                </button>

                <div className="row mt-2">
                  <div className="col-6">
                    <button className="btn btn-dark w-100">
                      Roti - <span className="badge bg-white text-dark">4</span>
                    </button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-warning w-100">
                      Chaas - <span className="badge bg-white text-dark">2</span>
                    </button>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-6">
                    <button className="btn btn-info w-100">
                      Papad - <span className="badge bg-white text-dark">2</span>
                    </button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-success w-100">
                      Sweet - <span className="badge bg-white text-dark">2</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-footer d-flex justify-content-between">
                <span className="h5">Total</span>
                <span className="h5">Rs 0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resturant;
