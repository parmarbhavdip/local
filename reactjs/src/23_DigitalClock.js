import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class DigitalClock extends Component {
     constructor(props) {
          super(props);
          this.state = {
               time: new Date()
          };
     }
     componentDidMount() {
          this.timerID = setInterval(() => this.tick(), 1000);
     }
     componentWillUnmount() {
          clearInterval(this.timerID);
     }
     tick() {
          this.setState({
               time: new Date()
          });
     }

     render() {
          const { time } = this.state;
          let hours = time.getHours();
          let minutes = time.getMinutes();
          let seconds = time.getSeconds();
          let ampm = "";

          if (hours >= 12) {
               ampm = "PM";
          } else {
               ampm = "AM";
          }

          if (hours === 0) {
               hours = 12;
          } else if (hours > 12) {
               hours = hours - 12;
          }

          const displayHours = hours < 10 ? `0${hours}` : hours;
          const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
          const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

          return (
               <div className="container d-flex justify-content-center align-items-center vh-100">
                    <div className="card shadow-lg border-0 rounded-5 overflow-hidden" style={{ width: "400px" }}>
                         <div className="card-body bg-dark text-white text-center py-5">
                              <h6 className="text-uppercase tracking-widest text-warning mb-3">Digital Clock</h6>
                              <div className="display-1 fw-bold font-monospace">
                                   {displayHours}:{displayMinutes}:{displaySeconds}
                              </div>
                              <div className="badge bg-warning text-dark fs-4 mt-3 px-4 py-2">
                                   {ampm}
                              </div>
                              <p className="mt-4 text-secondary">
                                   {time.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                              </p>
                         </div>
                    </div>
               </div>
          );
     }
}

export default DigitalClock;