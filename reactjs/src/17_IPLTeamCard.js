import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const IPLTeamCard = ({ team, trophies, captain, homeGround, logo }) => {
     return (
          <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
               <div className="card shadow h-100 text-center">
                    <img
                         src={logo}
                         className="card-img-top p-3"
                         alt={team}
                         style={{ height: "160px", objectFit: "contain" }}
                    />
                    <div className="card-body">
                         <h5 className="card-title fw-bold">{team}</h5>
                         <ul className="list-group list-group-flush text-start">
                              <li className="list-group-item">
                                   <strong>Captain:</strong> {captain}
                              </li>
                              <li className="list-group-item">
                                   <strong>Trophies:</strong> {trophies}
                              </li>
                              <li className="list-group-item">
                                   <strong>Home Ground:</strong> {homeGround}
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     );
};

export default function App() {
     const iplTeams = [{ team: "Chennai Super Kings", trophies: 5, captain: "Ruturaj Gaikwad", homeGround: "MA Chidambaram Stadium", logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg" }, { team: "Mumbai Indians", trophies: 5, captain: "Hardik Pandya", homeGround: "Wankhede Stadium", logo: "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg" }, { team: "Kolkata Knight Riders", trophies: 3, captain: "Shreyas Iyer", homeGround: "Eden Gardens", logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg" }, { team: "Gujarat Titans", trophies: 1, captain: "Shubman Gill", homeGround: "Narendra Modi Stadium", logo: "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg" }, { team: "Royal Challengers Bengaluru", trophies: 1, captain: "Faf du Plessis", homeGround: "M Chinnaswamy Stadium", logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Royal_Challengers_Bangalore_Logo.svg" }, { team: "Rajasthan Royals", trophies: 1, captain: "Sanju Samson", homeGround: "Sawai Mansingh Stadium", logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg" }, { team: "Sunrisers Hyderabad", trophies: 1, captain: "Pat Cummins", homeGround: "Rajiv Gandhi Stadium", logo: "https://upload.wikimedia.org/wikipedia/en/8/81/Sunrisers_Hyderabad.svg" }, { team: "Delhi Capitals", trophies: 0, captain: "Rishabh Pant", homeGround: "Arun Jaitley Stadium", logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg" }, { team: "Punjab Kings", trophies: 0, captain: "Shikhar Dhawan", homeGround: "IS Bindra Stadium", logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg" }, { team: "Lucknow Super Giants", trophies: 0, captain: "KL Rahul", homeGround: "Ekana Stadium", logo: "https://upload.wikimedia.org/wikipedia/en/5/5d/Lucknow_Super_Giants_logo.svg" }];


     return (
          <div className="container my-5">
               <h2 className="text-center fw-bold mb-4">IPL Teams 2024/25</h2>
               <div className="row">
                    {iplTeams.map((team, index) => (
                         <IPLTeamCard key={index} {...team} />
                    ))}
               </div>
          </div>
     );
}