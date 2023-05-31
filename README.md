# E-commerce ORM

## Description
The purpose of this project is to create the back end for an e-commerce site. This backend application uses API, Sequelize, and Express.js to communicate with the MySQL database. It displays the creation of a database using MySQL with models and associations. After the database is built, the app then shows the API routes to perform RESTful CRUD operations.

## Installation

To install this application the user should start by cloning the repo from GitHub. This app requires Node.js, Express.js, and Sequelize. To get connected to the database, the user should run mysql -u root -p and enter the password from the .env. Then run SOURCE db/schema.sql;. To seed the datbase run npm run seed. Then to connect to the server, run npm start.

## Usage

This app will let users to add, edit, and delete categories, products, and tags.

## License

MIT License

Copyright (c) [2023] [TaylorGreen]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
