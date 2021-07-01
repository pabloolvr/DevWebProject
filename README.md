# DevWebProject

Web Project for SCC0219

## Requirements
 - The system must have 2 types of users: Customers and Administrators
 - Administrators are responsible for registering/managing administrators, products provided and registering customers. The application already comes with an admin account with password admin.
 - Customers are users with access the system to buy products/services.

 - The admin's record includes, at least: name, cpf, birthdate, phone, email.

 - Each customer's record includes: name, cpf, address, birthdate, phone, email

 - Product's records include: name, id, photo, description, price, quantity (in stock), quantity sold.

 - Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.

 - Product Management: Administrators can create/update/read/delete (crud) new products. For example, they can change the stock quantity.

 - Favorite: The customers are able to add a product to their list of favorite products.

 - The system must provide accessibility requirements and provide good usability. The system must be responsive.

## Project Description
Navigation Diagram:
![NavigationDiagram](https://user-images.githubusercontent.com/48020553/119233878-5461f780-bb01-11eb-8074-1bcd124773c3.jpg)
## Source comments
## Test plan
## Test results
## Execution procedure
 - Install NodeJS and NPM from https://nodejs.org/en/download/.
 - Download or clone the project source code.
 - Install all required npm packages by running 'npm install' from the command line in the project root folder 'loja-oculos' (where the package.json is located).
 - Start the application by running 'npm run start' from the command line in the project root folder .
 - Your browser should automatically open at http://localhost:3000
## Issues
 Comments
