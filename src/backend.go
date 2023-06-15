package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

func init() {
	var err error
	db, err = sql.Open("mysql", "root:@tcp(127.0.0.1:3306)/crecord?parseTime=true")
	if err != nil {
		fmt.Println("Oops Error connecting to database ! ")
	}
	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}
}

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type Complain struct {
	Firstname    string `json:"Firstname"`
	Lastname     string `json:"Lastname"`
	Email        string `json:"Email"`
	Phoneno      string `json:"Phoneno"`
	Complaintype string `json:"Complainttype"`
	Complain     string `json:"Complaint"`
}

type Search struct {
	Ticketno string `json:"ticketno"`
	Email    string `json:"email"`
}

func main() {
	http.HandleFunc("/api/login", loginHandler)
	http.HandleFunc("/api/complain", complainHandler)
	http.HandleFunc("/api/status", DisplayHandler)
	http.Handle("/", http.FileServer(http.Dir("../build")))

	fmt.Println("Server started on localhost:8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	defer r.Body.Close()
	var Un = "Admin"
	var Pw = "user1234"
	if user.Username == Un && user.Password == Pw {
		fmt.Fprintf(w, "Success")
	} else {
		fmt.Fprintf(w, "Invalid Username or Password !")
	}
}

func complainHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	var complain Complain
	err := json.NewDecoder(r.Body).Decode(&complain)
	if err != nil {
		fmt.Fprintf(w, "Invalid body request")
	}
	defer r.Body.Close()

	ticketno := 0
	create_at := time.Now()
	result, err := db.Exec(`Insert into details(ticketno ,firstname, lastname,email,phoneno,complaintype,complain,create_at ) values(?,?,?,?,?,?,?,?)`,
		ticketno, complain.Firstname, complain.Lastname, complain.Email, complain.Phoneno, complain.Complaintype, complain.Complain, create_at)
	if err != nil {
		fmt.Fprintf(w, "Error! Check and resubmit again.", http.StatusInternalServerError)
	}

	lastInsertedID, err := result.LastInsertId()
	if err != nil {
		http.Error(w, "Error! Failed to get ticket number.", http.StatusInternalServerError)
		return
	}
	ticketno = int(lastInsertedID)

	type Response struct {
		Message  string `json:"message"`
		TicketNo int    `json:"ticketno"`
	}

	response := Response{
		Message:  "Complain is successfully registered with Ticket Number =",
		TicketNo: ticketno,
	}

	w.Header().Set("content-type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func DisplayHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var search Search
	err := json.NewDecoder(r.Body).Decode(&search)
	if err != nil {
		fmt.Fprintf(w, "Invalid Body Request")
	}
	var storedEmail, storedComplaintype, storedComplain string
	var storedDnT time.Time
	defer r.Body.Close()
	err = db.QueryRow("SELECT email, create_at, complaintype ,complain FROM details where ticketno = ?", search.Ticketno).Scan(&storedEmail, &storedDnT, &storedComplaintype, &storedComplain)
	if err != nil {
		fmt.Fprintf(w, "Invalid Ticket Number.")
		return
	}
	if search.Email == storedEmail {
		fmt.Fprintf(w, "Check the result below")
		type Response struct {
			TicketNumber string    `json:"ticketno"`
			DateandTime  time.Time `json:"create_at"`
			Complaintype string    `json:"complaintype"`
			Complain     string    `json:"complain"`
		}
		response := Response{
			TicketNumber: search.Ticketno,
			DateandTime:  storedDnT,
			Complaintype: storedComplaintype,
			Complain:     storedComplain,
		}
		w.Header().Set("Content-type", "application/json")
		// json.NewEncoder(w).Encode(response)
		json.NewDecoder(r.Body).Decode(response)

	} else {
		fmt.Fprintf(w, "Invalid email!")
	}

}
