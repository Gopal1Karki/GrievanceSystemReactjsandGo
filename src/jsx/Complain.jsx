import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Complain = () => {

    const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [complainRegister, setComplainRegister] = useState({
    Complainttype: "",
    Complaint: "",
    Firstname: "",
    Lastname: "",
    Email: "",
    Phoneno: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setComplainRegister({ ...complainRegister, [name]: value });
  };

  const options = ["Forest", "Road", "Crime", "Education", "Corruption"];

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page refresh

    try {
      const response = await axios.post(
        "http://localhost:8000/api/complain",
        complainRegister
      );

      setComplainRegister({
        Complainttype: "",
        Complaint: "",
        Firstname: "",
        Lastname: "",
        Email: "",
        Phoneno: ""
      });

      const { message, ticketno } = response.data;
      setMessage(message);
      navigate("/complain/success", { state: { ticketNumber: ticketno } });
    } catch (error) {
      console.error(error);
    }
  };


  const onOptionChangeHandler = (event) => {
    const selectedValue = event.target.value;
    setComplainRegister((prevState) => ({
      ...prevState,
      Complainttype: selectedValue
    }));
  };

  return (
    <>
      <Header />
      <div className="complain_main_div">
        <h1 id="formheading">Complaint Form</h1>
        <div className="complainform">
          <div id="complainform">
            <form onSubmit={handleSubmit} id="myform">
              <div>
                <label htmlFor="Firstname" className="text">
                  Firstname
                </label>
                <label htmlFor="Lastname" className="text1">
                  Lastname
                </label>
                <br/>
                <input
                  type="text"
                  autoComplete="off"
                  value={complainRegister.Firstname}
                  onChange={handleInput}
                  name="Firstname"
                 required
                  id="Firstname"
                />
                <input
                  type="text"
                  required

                  autoComplete="off"
                  value={complainRegister.Lastname}
                  onChange={handleInput}
                  name="Lastname"
                  id="Lastname"
                />
              </div>
              <div>
                <label htmlFor="Email" className="text">
                  Email
                </label>
                <label htmlFor="Phoneno" maxlength="10" className="text2">
                  Phone number
                </label>
                <br />
                <input
                  type="email"
                  required
                  autoComplete="off"
                  value={complainRegister.Email}
                  onChange={handleInput}
                  name="Email"
                  id="Email"
                />
                <input
                  required
                  type="number"
                  autoComplete="off"
                  value={complainRegister.Phoneno}
                  onChange={handleInput}
                  name="Phoneno"
                  id="Phoneno"
                />
              </div>

              <div>
                <label htmlFor="Complaint" className="text">
                  Complaint
                </label>
                <label htmlFor="Complainttype" className="text3">
                  Complaint type
                </label>
                <select
                  className="options"
                  onChange={onOptionChangeHandler}
                  value={complainRegister.Complainttype}
                >
                  <option></option>
                  {options.map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
                </select>
                <br />
                <textarea
                  type="text"
                  autoComplete="off"
                  value={complainRegister.Complaint}
                  onChange={handleInput}
                  required

                  name="Complaint"
                  id="Complaint"
                />
              </div>
              <button id="button" type="submit">
                Submit
              </button>
              {message && <p>{message}</p>}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Complain;
