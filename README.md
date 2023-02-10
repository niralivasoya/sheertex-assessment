# GitHub Common Followers Web App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project has built a simple web app that accepts two GitHub usernames and displays a list of their common followers. The app utilizes the GitHub API to fetch the followers of a user and the endpoint can be accessed via `fetch`.

## Features

- Accepts two GitHub usernames as input
- Displays a list of their common followers
- Utilizes the GitHub API to fetch the followers of a user
- No authentication required

## GitHub API Utilization

The endpoint for fetching a user's followers is `https://api.github.com/users/{username}/followers` and the app follows the API's pagination mechanism as described in the [GitHub API documentation](https://docs.github.com/en/rest/users/followers#list-followers-of-a-user).

## Testing

The app has been tested using the usernames `tumiduong` and `mildlywilde` (with a common follower `wolever`) and `wolever` and `shazow` (with multiple common followers).

- Test cases are written in `App.test.js` file

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
