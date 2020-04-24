/*  Execute this file from the command line by typing:
 *    mysql -u student -p < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE checkout_info (
  id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  names VARCHAR(255),
  email VARCHAR(225),
  passwords VARCHAR(225),
  line1 VARCHAR(225),
  line2 VARCHAR(225),
  city VARCHAR(225),
  states VARCHAR(225),
  zip VARCHAR(225),
  ccn VARCHAR(225),
  expiration VARCHAR(225),
  cvv VARCHAR(225)
);


INSERT INTO checkout_info (names, email, passwords, line1, line2, city, states, zip, ccn, expiration, cvv) VALUES ("Aloysius", "aloysiuslai13@gmail.com", "pw", "123 Drive", "apt #1", "San Francisco", "CA", "94158", "123456", "04/23/20", "123");
