import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App1.css";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const ticketNumber = location.state?.ticketNumber;

  return (
    <>
      <Header />
      <div className="success_main">
        <div className="success_subdiv">
          <h1>Complain Received !!</h1><br/>
            <div className="success_subdiv1">
                <p>
                    Thank you for submitting the complain. You can check
                    about your complain in Status. Remember your ticket
                    number also.

                </p>
            {ticketNumber && <p>Ticket Number: {ticketNumber}</p>}
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
