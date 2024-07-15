# Crud API
Crud API for user registration with a simple and objective design, storing customer data making it possible to add, remove and edit users in the database. Full Stack project based on several technologies for its construction such as React, Vite.Js, Javascript, Styled-Components, Node.Js Nodemon, Express and MySQL.


## Stacks
### Front End
![React](https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
### Back End
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)


## Features
- Front End structured in React with Vite.Js Framework
- Styling done with Styled-Components and CSS 
- React-Toastify for notifications of changes made to the Database
- Axios for HTTP requests such as GET, POST, PUT, DELETE
- RESTful APIs through Express.Js and Node.Js
- MySQL as a relational database where data is stored
- Addition, removal and editing of saved users


## Learnings
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) Styled-Components is a library for React and React Native that allows you to write CSS styles directly inside JavaScript components. Using tagged template literals, it combines style and component logic in one place, allowing for more cohesive and modular development. Usanod Styled-Components, styles are applied dynamically and scoped to the component, avoiding global CSS conflicts and making code maintenance and readability much easier.

![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) I was able to learn about creating and maintaining databases where data is structured in tables with rows and columns, facilitating the execution of CRUD (Create, Read, Update, Delete) operations. Its versatility is incredible, allowing the creation of e-commerce and content management systems. I had a somewhat reasonable first look at its support for transactions, high availability, replication and security, which makes MySQL such a popular choice.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) Based on the fact that Node.Js is a JavaScript execution environment, it is predictable that the first contact would be more friendly, taking into account my experience with JavaScript, but the possibilities it offers as an execution environment in a virtual machine were quite surprising. I learned that Node.Js runs outside the browser, which makes it a great option for developing real-time web applications, such as web servers, RESTful APIs, and streaming applications. Its I/O model (non-blocking and event-driven) facilitates the management of asynchronous operations and greatly improves the efficiency and scalability of the application,
In this project I wasn't able to experiment in depth with this part of its features, but knowing that they exist makes me more confident in studying more about them.

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) Being a minimalist and flexible Framework for Node.Js, it helps in simplifying the development of web applications and APIs. Despite being considered simple, I believe that this Framework is very complete for what it proposes, as it facilitates the creation of HTTP servers and the management of routes, in addition to allowing the use of middleware to add features such as authentication, JSON parsing and error handling.

## Installation
#### cd client
```bash
    npm create vite@latest ./
    npm install

    npm install axios
    npm install react-icons --save
    npm install --save react-toastify
    npm install styled-components
    or 
    npm install axios react-icons react-toastify styled-components
```
#### cd server
```bash
    npm init -y
    
    npm install mysql
    npm install -g nodemon
    npm install nodemon
    npm install cors
    or 
    npm install mysql express nodemon cors
```
#### Data Base
Avoid placing 'localhost' on ports that are frequently used for functions other than API (:3306 or :8800), as your application may present an error because of this.
```bash
CREATE TABLE `crud`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `tel` VARCHAR(255) NOT NULL,
  `birthday` DATE NOT NULL,
  PRIMARY KEY (`id`));
```
#### Add Example
```bash
INSERT INTO `crud_database`.`users` (`id`, `name`, `email`, `tel`, `birthday`) 
VALUES ('1', 'Arthur', 'arthur@email.com', '+55 555555555', '2002-08-25');
```
```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '********';
```

## Start Project
```bash
  cd client
  npm run dev

  cd server
  npm start
```


## Screenshots
![Crud Pc 1](https://github.com/user-attachments/assets/139db758-63c9-4e89-991a-0ca98562339e)

![Crud Pc 2](https://github.com/user-attachments/assets/2c290a70-1195-4e5f-a54c-605ffd2a027b)

![Crud Pc 3](https://github.com/user-attachments/assets/e7aace9a-f221-4997-a6d7-d7f7e5909877)