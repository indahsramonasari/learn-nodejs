## Documentation
This is an example of crud project using Node.js and postgres

- Node.js
- Express.js
- Postgres sql
- Sequelize


### Script database
Install postgres sql and then open the terminal after the installation complete
- psql postgres
- CREATE ROLE postgresdb WITH LOGIN PASSWORD 'Yuhu123';
- ALTER ROLE postgres CREATEDB;
- exit 
- psql postgres -U postgresdb
- CREATE DATABASE learnnode;
- The table will automatically generated because this project was use sequalize


### API Documentation using postman
https://www.getpostman.com/collections/9de64dc273db9a995aea


### How to run this project
- npm install
- npm start
- the application will running on port 8080
- Try to add a product, find all products, find a product by product id, update a product by product id, delete a product by product id using postman


### Reference
- Node.js & Sequalize : https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize
- Express : https://www.npmjs.com/package/express

