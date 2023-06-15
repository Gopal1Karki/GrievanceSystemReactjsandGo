import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App1.css";
import axios from "axios";

const Status = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState(null);
  const [ticketno, setTicketno] = useState("");
  const [create_at, setCreate_at] = useState("");
  const [complaintype, setComplaintype] = useState("");
  const [complain, setComplain] = useState("");

  const searchHandle = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/status", {
        ticketno,
        email,
      });

      const { ticketno: ticketnu, create_at, complaintype, complain } = response.data;

      setTicketno(ticketnu);
      setCreate_at(create_at);
      setComplaintype(complaintype);
      setComplain(complain);

      setMessage(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="status_main">
        <div className="status_background">
          <h1 className="search_div">Complain status</h1>
          <br />
          <form onSubmit={searchHandle}>
            <div className="search_div">
              <label htmlFor="ticketno">Ticket Number</label>
              <input
                type="text"
                placeholder="Eg: 123"
                value={ticketno}
                onChange={(e) => setTicketno(e.target.value)}
                required
                name="ticketno"
                id="ticketno"
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
                id="email"
              />
              <button id="searchbutton">Search</button>
              <div className="message-container">
                {message && <p>{message}</p>}
              </div>
            </div>
          </form>
          <br />
          <br />
          <br />
          <div className="search_div">
            <table id="statustable">

                <tr>
                  <th>Ticket Number</th>
                  <th>Date</th>
                  <th>Complain type</th>
                  <th>Complain</th>
                  <th>Status</th>
                  <th>Remark</th>
                </tr>

               <tr>
                   <td>{ticketno}</td>
                   <td>{create_at}</td>
                   <td>{complaintype}</td>
                   <td>{complain}</td>
                   <td>null</td>
                   <td>null</td>
               </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Status;
