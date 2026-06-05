import React from 'react';

const matches = [
     {
          id: 1,
          status: "LIVE",
          series: "ICC Men's T20 World Cup",
          team1: { name: "IND", flag: "🇮🇳", score: "192/2", overs: "20.0" },
          team2: { name: "PAK", flag: "🇵🇰", score: "152/0", overs: "15.2" },
          result: "Pakistan need 41 runs in 28 balls",
          type: "T20I"
     },
     {
          id: 2,
          status: "RESULT",
          series: "The Ashes - 1st Test",
          team1: { name: "AUS", flag: "🇦🇺", score: "348 & 220", overs: "" },
          team2: { name: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "280 & 150", overs: "" },
          result: "Australia won by 138 runs",
          type: "TEST"
     },
     {
          id: 3,
          status: "UPCOMING",
          series: "IPL 2024",
          team1: { name: "CSK", flag: "", score: "", overs: "" },
          team2: { name: "RCB", flag: "", score: "", overs: "" },
          result: "Match starts at 7:30 PM local",
          type: "T20"
     },
     {
          id: 4,
          status: "LIVE",
          series: "ODI Series",
          team1: { name: "SA", flag: "🇿🇦", score: "245/8", overs: "45.0" },
          team2: { name: "NZ", flag: "🇳🇿", score: "110/2", overs: "21.0" },
          result: "New Zealand need 136 runs",
          type: "ODI"
     }
];

const CricketScoreboard = () => {
     return (
          <div className="container my-5">
               <h2 className="mb-4 fw-bold border-bottom pb-2">Matching Highlights</h2>
               <div className="row g-4">
                    {matches.map((match) => (
                         <div key={match.id} className="col-12 col-md-6 col-lg-3">
                              <div className="card h-100 shadow-sm border-0 border-top border-4 border-success">
                                   <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                             <small className="text-muted fw-bold">{match.series}</small>
                                             <span className={`badge ${match.status === 'LIVE' ? 'bg-danger' : 'bg-secondary'}`}>
                                                  {match.status}
                                             </span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center my-2">
                                             <div className="d-flex align-items-center">
                                                  <span className="me-2 fs-4">{match.team1.flag}</span>
                                                  <span className="fw-bold">{match.team1.name}</span>
                                             </div>
                                             <div>
                                                  <span className="fw-bold">{match.team1.score}</span>
                                                  <small className="text-muted ms-1">{match.team1.overs && `(${match.team1.overs})`}</small>
                                             </div>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center my-2">
                                             <div className="d-flex align-items-center">
                                                  <span className="me-2 fs-4">{match.team2.flag}</span>
                                                  <span className="fw-bold">{match.team2.name}</span>
                                             </div>
                                             <div>
                                                  <span className="fw-bold">{match.team2.score}</span>
                                                  <small className="text-muted ms-1">{match.team2.overs && `(${match.team2.overs})`}</small>
                                             </div>
                                        </div>

                                        <p className="card-text mt-3 text-primary small fw-semibold">
                                             {match.result}
                                        </p>
                                   </div>
                                   <div className="card-footer bg-white border-0 d-flex justify-content-between">
                                        <button className="btn btn-sm btn-outline-dark">Scorecard</button>
                                        <button className="btn btn-sm btn-link text-decoration-none">Fantasy Tips</button>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default CricketScoreboard;