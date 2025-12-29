import React, { Component } from "react";

class Scoreboard extends Component {
     constructor(props) {
          super(props);
          this.state = {
               matchInfo: {
                    series: "The Ashes 2025-26",
                    teams: "ENG vs AUS",
                    date: "Thu, Dec 4, 2025",
                    venue: "The Gabba, Brisbane"
               },
               batsmen: [
                    { name: "Steven Smith", runs: 23, balls: 45, fours: 2, sixes: 0, sr: 51.11 },
                    { name: "Jake Weatherald", runs: 17, balls: 23, fours: 2, sixes: 0, sr: 73.91 },
                    { name: "Usman Khawaja", runs: 42, balls: 60, fours: 4, sixes: 0, sr: 70.0 }
               ]
          };
     }

     render() {
          const { matchInfo, batsmen } = this.state;

          return (
               <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
                    <h1 style={{ textAlign: "center" }}>Cricket Scoreboard — Batsmen</h1>

                    <div style={{ textAlign: "center", marginBottom: "20px" }}>
                         <h2>{matchInfo.teams} • 2nd Test, {matchInfo.series}</h2>
                         <p><strong>Date:</strong> {matchInfo.date}</p>
                         <p><strong>Venue:</strong> {matchInfo.venue}</p>
                    </div>

                    <table style={{ width: "90%", margin: "auto", borderCollapse: "collapse" }}>
                         <thead>
                              <tr style={{ background: "#4CAF50", color: "white" }}>
                                   <th>Batsman</th>
                                   <th>R</th>
                                   <th>B</th>
                                   <th>4s</th>
                                   <th>6s</th>
                                   <th>SR</th>
                              </tr>
                         </thead>
                         <tbody>
                              {batsmen.map((player, idx) => (
                                   <tr key={idx} style={{ borderBottom: "1px solid #ddd" }}>
                                        <td>{player.name}</td>
                                        <td>{player.runs}</td>
                                        <td>{player.balls}</td>
                                        <td>{player.fours}</td>
                                        <td>{player.sixes}</td>
                                        <td>{player.sr}</td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
          );
     }
}

export default Scoreboard;
