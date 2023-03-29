# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Process
1.  Create a new CRA app. :heavy_check_mark:
2. Create a Header that has a Nav. :heavy_check_mark:
3. Create a Cart Icon component and position this next to your Nav. This Cart Icon component will have an overlay that displays the number of items in the cart. :heavy_check_mark:
4. Create a Footer component. :heavy_check_mark:
5. Create a Layout component that has your Header and Footer. :heavy_check_mark:
6. Create the other pages: :heavy_check_mark:
- 6.1 ContactPage
- 6.2 ProductPage
- 6.3 CheckoutPage
- 6.4 CheckoutSuccessPage
7. Add React Router and route to each of the pages. The ProductPage page will be using a dynamic segment. :heavy_check_mark:
8. Fetch the list of products on the Homepage and store this as a state. :heavy_check_mark:
9. On the homepage, loop through the products and display a Product component for each of the values. This Product component should look like a product card. Each Product component will have a View product button which will link to the ProductPage page. :heavy_check_mark:
10. The homepage should have a lookahead/auto-complete Search bar component. Typing values in the search bar should display products where the title matches the search input. Clicking on an item should take the user to the ProductPage page. Tip: Filter the user input and then display products that match the input. :heavy_check_mark:
11. On the ProductPage, use the ID of the product as the params for the dynamic segment. Add the product details as mentioned in the brief. :heavy_check_mark:
12. Create a cart state. When the Add to cart button on the ProductPage is clicked, add the product to the cart. :heavy_check_mark:
13. Clicking on the Cart Icon component will take the user to the CheckoutPage page. :heavy_check_mark:
14. The CheckoutPage must list all of the products in the cart, show a total at the bottom and a Checkout button. :heavy_check_mark:
15. Clicking the Checkout button will take the user to the CheckoutSuccessPage. :heavy_check_mark:
16. The CheckoutSuccessPage should display that the order was successful and clear the cart. There should be a link to go back to the store. :x:
17. On the ContactPage, create the following inputs with the following requirements. :heavy_check_mark:
- 17.1 Full name (Minimum number of characters is 3, required)
- 17.2 Subject (Minimum number of characters is 3, required)
- 17.3 Email (Must be a valid email address, required)
- 17.4 Body (Minimum number of characters is 3, required)
- 17.5 Submit button

18. console.log the data from the form once validation requirements are met. :heavy_check_mark:
19. Once your project is done, deploy it to Netlify. :x:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
