// package main

// import (
// 	"database/sql"
// 	"fmt"
// 	"log"

// 	_ "github.com/go-sql-driver/mysql"
// )

// var db *sql.DB

// func init() {
// 	var err error
// 	db, err = sql.Open("mysql", "root:@tcp(127.0.0.1:3306)/crecord?parseTime=true")
// 	if err != nil {
// 		fmt.Println("Oops Error connecting to database ! ")
// 	}
// 	err = db.Ping()
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// }
// func createTable() {
// 	query := `Create table details(
// 		ticketno int auto_increment,
// 		firstname text not null,
// 		lastname text not null,
// 		email text not null,
// 		phoneno text not null,
// 		complaintype text not null,
// 		complain text not null,
// 		create_at datetime,
// 		primary key(ticketno)
// 		);`
// 	_, err := db.Exec(query)
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// }
// func main() {
// 	createTable()
// 	fmt.Println("Table created sucessfully")
// }
