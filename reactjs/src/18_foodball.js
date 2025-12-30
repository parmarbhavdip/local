import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

function foodballclubcard({ club, trophies, captain, homeGround, logo }) {
     return (
          <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
               <div className="card border-0 shadow-lg h-100 text-center rounded-4">
                    <div className="bg-dark rounded-top-4 p-3">
                         <img src={logo} alt={club} style={{ height: "100px" }} className="img-fluid" />
                    </div>

                    <div className="card-body">
                         <h5 className="fw-bold mb-3">{club}</h5>

                         <div className="d-flex justify-content-between mb-2">
                              <span className="fw-semibold">Captain</span>
                              <span>{captain}</span>
                         </div>

                         <div className="d-flex justify-content-between mb-2">
                              <span className="fw-semibold">Trophies</span>
                              <span className="badge bg-success">{trophies}</span>
                         </div>

                         <div className="mt-3 text-muted small">{homeGround}</div>
                    </div>
               </div>
          </div>
     );
}


function foodball() {
     const foodballclubcard = [
          { "club": "Real Madrid", "trophies": 14, "captain": "Nacho Fernández", "homeGround": "Santiago Bernabéu Stadium", "logo": "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" },
          { "club": "FC Barcelona", "trophies": 5, "captain": "Ronald Araújo", "homeGround": "Spotify Camp Nou", "logo": "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" },
          { "club": "Manchester United", "trophies": 3, "captain": "Bruno Fernandes", "homeGround": "Old Trafford", "logo": "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg" },
          { "club": "Liverpool", "trophies": 6, "captain": "Virgil van Dijk", "homeGround": "Anfield", "logo": "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg" },
          { "club": "Bayern Munich", "trophies": 6, "captain": "Manuel Neuer", "homeGround": "Allianz Arena", "logo": "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg" },
          { "club": "AC Milan", "trophies": 7, "captain": "Davide Calabria", "homeGround": "San Siro", "logo": "https://upload.wikimedia.org/wikipedia/en/d/d0/AC_Milan.svg" },
          { "club": "Chelsea", "trophies": 2, "captain": "Reece James", "homeGround": "Stamford Bridge", "logo": "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg" },
          { "club": "Manchester City", "trophies": 1, "captain": "Kyle Walker", "homeGround": "Etihad Stadium", "logo": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" },
          { "club": "Juventus", "trophies": 2, "captain": "Danilo", "homeGround": "Allianz Stadium", "logo": "https://upload.wikimedia.org/wikipedia/en/d/da/Juventus_FC_2017_logo.svg" },
          { "club": "Paris Saint-Germain", "trophies": 0, "captain": "Marquinhos", "homeGround": "Parc des Princes", "logo": "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg" }
     ];

     return (
          <div className="container my-5">
               <h2 className="text-center fw-bold mb-5">Top Football Clubs</h2>
               <div className="row">
                    {footballClubs.map((item, index) => (
                         <FootballClubCard
                              key={index}
                              club={item.club}
                              trophies={item.trophies}
                              captain={item.captain}
                              homeGround={item.homeGround}
                              logo={item.logo}
                         />
                    ))}
               </div>
          </div>
     );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<foodball />);