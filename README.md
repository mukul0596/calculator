# Calculator Web Application

A web app using React and Firestore(for realtime data updates) which logs calculations as they happen and shares those calculations with everyone connected to the app.

## How to run the app
### Setting up Firestore

- create a firestore project. Go to projects setting and copy its Project ID and Web API key
- create a .env file in the root directory of the project
- create two variables in the .env file REACT_APP_FIRESTORE_API_KEY with the Web API key and REACT_APP_FIRESTORE_PROJECT_ID with the Project Id copied from fiestore and save it
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Or you can use mine:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; REACT_APP_FIRESTORE_API_KEY=AIzaSyAks-pEQcVlz1dwr0izmsw5j_IfQ2FjjOE
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; REACT_APP_FIRESTORE_PROJECT_ID=calculator-4aeef

### Installing dependencies

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;npm i

### Starting the server

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;npm start