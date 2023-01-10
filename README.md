# FullStacks Cafe Menu and Ordering Application
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Link to deployed app on Heroku: [![HerokuButton](./public/images/button.svg)](https://fullstackscafe.herokuapp.com/home.html)

## Description
This full stack application serves as an ordering system for a cafe. This MVP iteration works as an ordering app on in-house kiosks at each table, customers can select their order and send it  to the kitchen where each order can veviewd on a command line interface system. This application is scalable to become a full service online ordering website and menu page, as well as being tied in to an automated ticket printer.

![Image](./public/images/readmephoto.png)

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Testing](#testing)
* [Questions](#questions)

## Installation
For this demonstration the application is deployed to Heroku. For full deployment in a restaurant environment, a server would be setup and connected to the ordering kiosks, as well as a terminal available to the manager or potentially tied in to the existing POS system.

# Usage

## Front End

When you first load into the page, you'll be greeted by a slideshow of various items available at FullStacks Cafe!

 ![IntroPage](/public/images/README/HomePage.png)

After clicking the "Place Your Order" button, you'll be greeted by our comforting menu of breakfast favorites! Use the arrows next to the images to browse through our catalogue, and then use the plus and minus buttons to add or remove items from your plate! 

![MenuPage](/public/images/README/MenuPage.png)

Finally, you can look at your order and decide if everything looks right. If it doesn't, feel free to go back to the menu and edit it as you see fit. The total will be reflective of what was on your plate. After that, click confirm. An alert will pop up confirming your order! 

![CheckoutPage](/public/images/README/CheckoutPage.png)

#

## Back End

This project utilizes localStorage to store the order as an array called customerOrder. 

![localstorage](/public/images/README/LocalStorage.png)

Once the order is confirmed it is added to a table called orderDetails that a manager can view. 

![orderDetails](/public/images/README/Table.png)

If a manager wants to look at the order history themselves, they can log-in to the CLI to view order details and other information! 

![Manager](/public/images/README/Manager.png)
# 

## License
This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT</a> license.

## Contribution
Contributors: Julia Johnson, Josh Icard, Joshua Toback, David Stewart, and Mark Turner.

## Testing
The ordering routes can be tested from insomnia to verify their functionality to communicate with the database.

## Questions
For questions about this repo, application, or to provide feedback please contact me at 

Our GitHub repo can be found at [GitHub](https://github.com/JoshuaToback/FullStacks-Cafe)
