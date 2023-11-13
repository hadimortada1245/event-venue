const con =require('./config/connection');
const creatingTables=()=>{
    con.query(`CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        fullName VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL)`, (error, result) => {
        if (error)  
          console.error('Creating users table failed: ' + error);
         else 
          console.log('Users table created successfully');
      });
      con.query(`CREATE TABLE IF NOT EXISTS venues (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description longtext NOT NULL,
        capacity INT NOT NULL,
        image VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL
     
      )`, (error, result) => {
        if (error) 
          console.error('Creating venues table failed: ' + error);
         else 
          console.log('Venues table created successfully');
      });
      con.query(`CREATE TABLE IF NOT EXISTS events (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        date DATE NOT NULL,
        ticketPrice INT NOT NULL,
        description VARCHAR(255) NOT NULL,
        venueId INT NOT NULL,
        FOREIGN KEY (venueId) REFERENCES venues(id) ON DELETE CASCADE ON UPDATE CASCADE
      )`, (error, result) => {
        if (error) 
          console.error('Creating events table failed: ' + error);
         else 
          console.log('events table created successfully');
      });
      con.query(`CREATE TABLE IF NOT EXISTS reservations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        venueId INT NOT NULL,
        userId INT NOT NULL,
        FOREIGN KEY (venueId) REFERENCES venues(id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
      )`, (error, result) => {
        if (error) 
          console.error('Creating reservations table failed: ' + error);
         else 
          console.log('reservations table created successfully');
      });
      
}
module.exports=creatingTables;