# API Crud 
Crud API for user registration with a simple and objective design, storing customer data making it possible to add, remove and edit users in the database. Full Stack project based on several technologies for its construction such as React, Vite.Js, Javascript, Styled-Components, Node.Js Nodemon, Express and MySQL.



## Stacks
#### Front End:
![React](https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
#### Back End:
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)



## Learnings
In this project I had the opportunity to put into practice my introductory knowledge about SQL that I obtained in college, in a useful and functional application. I learned in practice fundamental things like which localhost port to use to structure an API, how to make HTTP requests to the database and update it,
how to structure the codes to build the database, etc. I admit that for me the most complex part was managing the HTTP requests to change the application and the database to be able to edit and delete users, for some reason I was blocked from developing this part.
Regarding the Front End, this was my first project using 'Styled-Components', which made it confusing at first to organize the files and do componentization in the way I was used to, for example. My first contact with ‘React-
Toastify’ was also part of this project and I was impressed with the aesthetics and usability of this tool, simple and extremely functional.



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



## Screenshot
![Crud 1](https://github.com/ArthurSantDev/Crud/assets/159972613/a03fb9d7-1fd4-4ccf-bc96-01678899f388)

![Crud 3](https://github.com/ArthurSantDev/Crud/assets/159972613/cd689550-ee04-44be-904a-b6413b01bb52)

![Crud 2](https://github.com/ArthurSantDev/Crud/assets/159972613/fde0370f-bd35-4c31-b7a1-330a9d00cf67)