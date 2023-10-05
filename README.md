# express-crud-api

//Database 
create database student;
use student;

//table
create table student(
id integer auto_increment,
firstName varchar(50) not null,
lastName varchar(50), 
standard smallint not null ,
dob date not null,
gender enum('M','F') not null,
address varchar(255) not null,
primary key(id),
check (standard between 1 and 13)
);

//

API Endpoints

Methods	      Urls	              Description
GET	          /student	          Get all students
GET	          /student/id	        Get a specific student
POST	        /student/create	    Create a new student
Sample data ====>>>

{
   "firstname" : "something",
   "lastname" : "something",
   "standard" : something,
    "dob" : "YYYY-MM-DD",
    "gender" : "m/f",
    "address" : "something" 
}



PATCH	        /student/update/id	Update an existing student
Sample data ====>>>

{
   "firstname" : "newName",
   "lastname" : "newName",
   "standard" : values greater than 0 and less than 13,
    "address" : "something" 
}
DELETE	      /student/delete/id	Delete an existing student
