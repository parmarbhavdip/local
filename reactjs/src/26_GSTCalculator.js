import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function GSTCalculator() {
     const [amount, setAmount] = useState("");
     const [gstRate, setGstRate] = useState(5);
     const [taxType, setTaxType] = useState("exclusive");
     const [gstAmount, setGstAmount] = useState(0);
     const [totalAmount, setTotalAmount] = useState(0);

     const calculateGST = () => {
          let gst = 0;
          let total = 0;

          if (taxType === "exclusive") {
               gst = (amount * gstRate) / 100;
               total = Number(amount) + gst;
          } else {
               gst = amount - amount * (100 / (100 + gstRate));
               total = amount;
          }

          setGstAmount(gst.toFixed(2));
          setTotalAmount(total.toFixed(2));
     };

     return (
          <div className="container mt-5">
               <div className="card shadow p-4">
                    <h3 className="text-center mb-4">GST Calculator</h3>

                    <div className="mb-3">
                         <label className="form-label">Amount</label>
                         <input
                              type="number"
                              className="form-control"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                         />
                    </div>

                    <div className="mb-3">
                         <label className="form-label">GST Rate</label>
                         <select
                              className="form-select"
                              value={gstRate}
                              onChange={(e) => setGstRate(Number(e.target.value))}
                         >
                              <option value={5}>5%</option>
                              <option value={18}>18%</option>
                              <option value={40}>40%</option>
                         </select>
                    </div>

                    <div className="mb-3">
                         <label className="form-label">Tax Type</label>
                         <div>
                              <input
                                   type="radio"
                                   name="taxType"
                                   value="exclusive"
                                   checked={taxType === "exclusive"}
                                   onChange={(e) => setTaxType(e.target.value)}
                              />{" "}
                              Exclusive
                              &nbsp;&nbsp;
                              <input
                                   type="radio"
                                   name="taxType"
                                   value="inclusive"
                                   checked={taxType === "inclusive"}
                                   onChange={(e) => setTaxType(e.target.value)}
                              />{" "}
                              Inclusive
                         </div>
                    </div>

                    <button className="btn btn-primary w-100" onClick={calculateGST}>
                         Calculate GST
                    </button>

                    <div className="mt-4">
                         <h5>GST Amount: ₹ {gstAmount}</h5>
                         <h5>Total Amount: ₹ {totalAmount}</h5>
                    </div>
               </div>
          </div>
     );
}

export default GSTCalculator;
