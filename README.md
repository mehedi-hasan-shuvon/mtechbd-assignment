# MTechBD Assignment(Add to Cart & Place Order)




## Project Description

This is Add to cart and order placing project created with Reactjs and no front-end framework is used. As it is a cart system and users can visit without authentication i used localhost for data storing as users may close the window but can visit again.The main work features of the website is given below:

- In the navbar section, there is Manush Technology Limited's logo and cart icon. Moreover, in the cart icon, there is a badge at the top which indicates how many different products are stored in the cart. To achieve real-time updating of badge number that, I used context api to share cart information globally to navbar section.
- In the product component, i fetch all the products using custom hooks with useEffect, then displayed them in a grid layout(3 columns for windows, 2 columns for Tab, and 1 column for mobile view). The product card contains the product title, product price, ratings, product quantity(which we and to add to the cart) and lastly add to cart button.
- By clicking add to cart button item will be added to the cart menu and cart badge icon will be updated and after clicking cart badge icon cart section will showup from the right side of the screen.in the cart all the enlisted items will be displayed. User can  also update quantity from the cart section and it will be dynamically updated to the whole website.After the items, subtotal and delivery charges (which i manually give $5 dollars per item) will be shown. Lastly, the Grand Total price will be displayed.
- After the grand total price, There are two buttons, first one is the checkout button and after clicking it a modal will pop up asking for the necessary information(name, email, address, mobile number, etc). and after submitting the form a react toastify will notify that order have been placed. But if there is nothing in the cart it will show to ask items on the cart first.(*it its a dummy form it will not lead to anywhere).
- And the last button is the clear cart button which by on click will make tha cart empty and notify about that. But if the cart is already empty,will show that there is nothing to make cart empty.  
- Lastly,The whole UI is responsive for windows, tabs and mobile view.And the  cart section is hidden until is cart icon is clicked.


## How to set up the project:
- Firstly, the project has to be cloned from the Github repository.

- Then, from the command line, all the dependencies have to be installed. As it is a small project and dependencies are limited manually dependencies can be installed or we can command "npm install" to install the required dependencies altogether.

- As, Localhost is used for storing data and no server side configaration needed, so the project can be start with react run command "npm start". Thus, the project will be set up and start!

List of Technologies I used:
- HTML
- Plain CSS
- ReactJS
- React-toast
- Firebase
- React-font-awesome
- React-spinner
- Heroku

## Live Site Link:
Heroku link:
[https://fathomless-gorge-00894.herokuapp.com/](https://fathomless-gorge-00894.herokuapp.com/)

Netlify link: [https://mtechbd-cart-system-assignment.netlify.app/](https://mtechbd-cart-system-assignment.netlify.app/)

## Screenshot

![App Screenshot](https://i.ibb.co/qn5c2s4/1.jpg)


