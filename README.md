## SuperFood

### Color Pallete
Primary:
#debfe8 
#fff2ff
#ac8fb6

Secondary:
#dcedc8
#fffffb
#aabb97


### Restrictions
Chronic diseases:
Diabetes
Hypertension

Allergies:
To peanuts
To milk


### Update Menu
<!-- To install firebase admin npm package, run: $npm install firebase-admin --save -->
Run updateMenu.js using node to update the database
Somehow you need to end the program manually because the code will keep require. Thanks if anyone could fix it.

* region: "global" or "country name",
* breakfast, health restrictions: boolean
* nutrition: an array of sodium, protein and fat
* imageurl


### Classes/Pages

App.js - Control which page is shown. Use states to debug.new Date();
Main.js - Main page of the website where personalized meals are shown
Meal.js - Div shown to participants with recommended meal for breakfast/lunch/dinner
MealInfo.js - Right-hand frame on Main.js containing all meals
NutrientIntake.js - Controls nutrient intake graph
PersonalRegister.js - Page for personal registration (pt 1/3)
AllergyRegister.js - Page for allergies during registration (pt 2/3)
ProfileInfo.js - Left-hand frame on Main.js containing nutrient intake graph and user info
RecipeInfo.js - Recipe page with more information about meal
Register.js - Controls registration
TiredModal.js - Pop-up for "I'm tired of this"

<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
 -->