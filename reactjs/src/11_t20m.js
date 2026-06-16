import React, { Component } from "react";
import "./schedule.css";

class WorldCupSchedule extends Component {
     state = {
          matches: [
               { date: "10 Jun 2026", match: "India vs Pakistan", venue: "Delhi", stage: "Group A" },
               { date: "11 Jun 2026", match: "Australia vs England", venue: "Mumbai", stage: "Group A" },
               { date: "12 Jun 2026", match: "South Africa vs New Zealand", venue: "Chennai", stage: "Group B" },
               { date: "13 Jun 2026", match: "India vs South Africa", venue: "Kolkata", stage: "Group A" },
               { date: "14 Jun 2026", match: "Pakistan vs England", venue: "Ahmedabad", stage: "Group A" },
               { date: "15 Jun 2026", match: "Australia vs New Zealand", venue: "Pune", stage: "Group B" },
               { date: "16 Jun 2026", match: "West Indies vs Sri Lanka", venue: "Bengaluru", stage: "Group B" },
               { date: "17 Jun 2026", match: "Bangladesh vs Afghanistan", venue: "Lucknow", stage: "Group C" },
               { date: "18 Jun 2026", match: "India vs Australia", venue: "Hyderabad", stage: "Group A" },
               { date: "19 Jun 2026", match: "England vs South Africa", venue: "Indore", stage: "Group B" },
               { date: "22 Jun 2026", match: "India vs New Zealand", venue: "Mumbai", stage: "Super 8" },
               { date: "23 Jun 2026", match: "Australia vs South Africa", venue: "Delhi", stage: "Super 8" },
               { date: "24 Jun 2026", match: "Pakistan vs Sri Lanka", venue: "Chennai", stage: "Super 8" },
               { date: "25 Jun 2026", match: "England vs West Indies", venue: "Kolkata", stage: "Super 8" },
               { date: "28 Jun 2026", match: "Semi Final 1", venue: "Ahmedabad", stage: "Semi Final" },
               { date: "29 Jun 2026", match: "Semi Final 2", venue: "Mumbai", stage: "Semi Final" },
               { date: "02 Jul 2026", match: "Final Match", venue: "Narendra Modi Stadium, Ahmedabad", stage: "Final" }
          ]
     };

     render() {
          return (
               <div className="schedule-wrapper">
                    <h1>T20 World Cup 2026</h1>

                    <div className="table-container">
                         <table>
                              <thead>
                                   <tr>
                                        <th>Date</th>
                                        <th>Match</th>
                                        <th>Venue</th>
                                        <th>Stage</th>
                                   </tr>
                              </thead>

                              <tbody>
                                   {this.state.matches.map((m, i) => (
                                        <tr key={i}>
                                             <td>{m.date}</td>
                                             <td>{m.match}</td>
                                             <td>{m.venue}</td>
                                             <td>{m.stage}</td>
                                        </tr>
                                   ))}
                              </tbody>
                         </table>
                    </div>
               </div>
          );
     }
}

export default WorldCupSchedule;
