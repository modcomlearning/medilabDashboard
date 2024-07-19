## Introduction

In this Git Repo, we create an admin Dashboard for Medilab. Please go through through  https://github.com/modcomlearning/medilab   to find out how to create an API used by this dashboard.  <br>

Also, check https://github.com/modcomlearning/medilabapp  for the Android Mobile App<br>

This Dashboard will consume an APi created from https://github.com/modcomlearning/medilab <br>


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Part 1
Create a react app named medilabDash, below are the command to use

#### Step 2 (optional)

    npm install -g create-react-app

#### Step 3

    npx create-react-app medilabDash

#### Step 4

    cd medilabDash

#### Step 5

    npm start


Access Your App through this link http://127.0.0.1:3000/ <br>

#### Step 6 - Install Other Packages
While inside medilabDash Folder, Install below.

     npm install react-icons@latest

     npm install react-dom@latest

     npm install styled-components@latest

#### Step 7 - Directory Structure
First, ensure you are in your project's root directory and navigate to the src folder: (cd medilabDash/src). You can also create these folders by right clicking on src the new folder.<br>
Use the following commands to create the components, helpers, images, and styles folders.

Here’s how you can explain the purpose of each folder:

<b>components:</br>
This folder will contain all the reusable React components. Components are the building blocks of your React application and are typically organized by feature or functionality.

<b>helpers:</b>
This folder is for utility functions and helper modules that can be used across the application. These might include functions for data manipulation, API calls, or other common tasks.

<b>images:</b>
This folder will store all the image assets used in your application. Organizing images in a separate folder helps in managing assets and improves the readability of your project structure.

<b>styles:</b>
This folder will contain all the stylesheets, whether you are using CSS, SCSS, or styled-components. Keeping styles in a dedicated folder helps maintain a clean and organized codebase.



### Part 2
In this Part, we will create All components needed in our Application, Use belo command to be inside the components folder.

    cd medilabDash/src/components

Then while in components, use below command to create all components.

      touch Signin.jsx Signup.jsx SideBar.jsx Topbar.jsx AddNurses.jsx AddTests.jsx LabTests.jsx MainContent.jsx MyBookings.jsx Nurses.jsx NursesDialog.jsx Profile.jsx


Below are the codes for each component.
#### Example for Each Component
##### 1. Signin.jsx

jsx

    import React from 'react';

    const Signin = () => {
    return (
        <div>
        <h1>Signin</h1>
        </div>
    );
    };

    export default Signin;

##### 2. Signup.jsx

jsx

    import React from 'react';

    const Signup = () => {
    return (
        <div>
        <h1>Signup</h1>
        </div>
    );
    };

    export default Signup;

##### 3. SideBar.jsx

jsx

    import React from 'react';

    const SideBar = () => {
    return (
        <div>
        <h1>SideBar</h1>
        </div>
    );
    };

    export default SideBar;

##### 4. Topbar.jsx

jsx

    import React from 'react';

    const Topbar = () => {
    return (
        <div>
        <h1>Topbar</h1>
        </div>
    );
    };

    export default Topbar;

##### 5. AddNurses.jsx

jsx

    import React from 'react';

    const AddNurses = () => {
    return (
        <div>
        <h1>Add Nurses</h1>
        </div>
    );
    };

    export default AddNurses;

##### 6. AddTests.jsx

jsx

    import React from 'react';

    const AddTests = () => {
    return (
        <div>
        <h1>Add Tests</h1>
        </div>
    );
    };

    export default AddTests;

##### 7. LabTests.jsx

jsx

    import React from 'react';

    const LabTests = () => {
    return (
        <div>
        <h1>Lab Tests</h1>
        </div>
    );
    };

    export default LabTests;

##### 8. MainContent.jsx

jsx

    import React from 'react';

    const MainContent = () => {
    return (
        <div>
        <h1>Main Content</h1>
        </div>
    );
    };

    export default MainContent;

##### 9. MyBookings.jsx

jsx

    import React from 'react';

    const MyBookings = () => {
    return (
        <div>
        <h1>My Bookings</h1>
        </div>
    );
    };

    export default MyBookings;

##### 10. Nurses.jsx

jsx

    import React from 'react';

    const Nurses = () => {
    return (
        <div>
        <h1>Nurses</h1>
        </div>
    );
    };

    export default Nurses;

##### 11. NursesDialog.jsx

jsx

    import React from 'react';

    const NursesDialog = () => {
    return (
        <div>
        <h1>Nurses Dialog</h1>
        </div>
    );
    };

export default NursesDialog;

##### 12. Profile.jsx

jsx

    import React from 'react';

    const Profile = () => {
    return (
        <div>
        <h1>Profile</h1>
        </div>
    );
    };

    export default Profile;



## Part 3
In App.js, Create a Router to define paths or routes to your created components.
Modify your App.js to loo line below code.

    import logo from './logo.svg';
    import './App.css';

    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import MainContent from './components/MainContent';
    import Signin from './components/Signin';
    import Signup from './components/Signup';
    import AddNurses from './components/AddNurses';
    import Nurses from './components/Nurses';
    import AddTests from './components/AddTests';
    import LabTests from './components/LabTests';
    import Profile from './components/Profile';
    import MyBookings from './components/MyBookings';

    function App() {
    return (
        <Router>
        <div className="App">
        <Routes>
            <Route path='/' element = {<MainContent/>} ></Route>
            <Route path='/signin' element={<Signin />} ></Route>
            <Route path='/signup' element={<Signup />} ></Route>
            <Route path='/profile' element={<Profile />} ></Route>
            <Route path='/addnurses' element={<AddNurses />} ></Route>
            <Route path='/viewnurses' element={<Nurses />} ></Route>
            <Route path='/addtests' element={<AddTests />} ></Route>
            <Route path='/viewtests' element={<LabTests />} ></Route>
            <Route path='/mybookings' element={<MyBookings />} ></Route>
        </Routes>  

        </div>
    </Router>
    );
    }

    export default App;




##### Explanation

    import logo from './logo.svg';
    import './App.css';

    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import MainContent from './components/MainContent';
    import Signin from './components/Signin';
    import Signup from './components/Signup';
    import AddNurses from './components/AddNurses';
    import Nurses from './components/Nurses';
    import AddTests from './components/AddTests';
    import LabTests from './components/LabTests';
    import Profile from './components/Profile';
    import MyBookings from './components/MyBookings';



<b>Logo and CSS:</b>
logo.svg and App.css are imported for the application's logo and styling.

<b>React Router:</b>
BrowserRouter (aliased as Router), Routes, and Route are imported from react-router-dom for setting up client-side routing.

<b>Components:</b>
Various components (MainContent, Signin, Signup, etc.) are imported from the components folder.



    function App() {
    return (
        <Router>
        <div className="App">
            <Routes>
            <Route path='/' element={<MainContent />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/addnurses' element={<AddNurses />} />
            <Route path='/viewnurses' element={<Nurses />} />
            <Route path='/addtests' element={<AddTests />} />
            <Route path='/viewtests' element={<LabTests />} />
            <Route path='/mybookings' element={<MyBookings />} />
            </Routes>
        </div>
        </Router>
    );
    }





<b>Router:</b>
The Router component wraps the entire application, enabling routing capabilities. It uses BrowserRouter under the hood, which uses the HTML5 history API to keep your UI in sync with the URL.

<b>Routes:</b>
The Routes component is a container for all Route components.

<b>Route Configuration:</b>
Each Route specifies a path and an element: <br>
path='/: Renders the MainContent component when the root URL (/) is accessed.<br>
path='/signin': Renders the Signin component when /signin is accessed.<br>
path='/signup': Renders the Signup component when /signup is accessed.<br>
path='/profile': Renders the Profile component when /profile is accessed.<br>
path='/addnurses': Renders the AddNurses component when /addnurses is accessed.<br>
path='/viewnurses': Renders the Nurses component when /viewnurses is accessed.<br>
path='/addtests': Renders the AddTests component when /addtests is accessed.<br>
path='/viewtests': Renders the LabTests component when /viewtests is accessed.<br>
path='/mybookings': Renders the MyBookings component when /mybookings is accessed.<br>




Now, Run you App and Access the routes you defined, example below shows how to Access sign up route

    http://127.0.0.1:3000/signup

Try out the rest.











































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
