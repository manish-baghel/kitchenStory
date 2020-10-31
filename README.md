# Kitchen Story  - Phase 4 Assessment

## Technologies Used
| ReactJS | 16.14.0 |
| ------ | ------- |
| redux | 4.0.5 | 
| react-redux | 7.2.1 |
| parcel-bundler | 1.12.4 |
| json-server | 0.16.2 |


## Usage 
### Yarn -
```
yarn start
```

### NPM - 
```
npm start
```

### Default Login Credentials - 
Email: p@q.com
Password: q1w2e3r4#

### Note - The JSON Server by default runs on `3000` port and the frontend application relies on `3000` port if you want to run on different port then before running on different port please edit src/.env



## File Structure

```
src/
├── actions
│   ├── alertActions.js
│   ├── eventActions.js
│   ├── index.js
│   ├── searchActions.js
│   └── userActions.js
├── components
│   ├── AdminLogin.js
│   ├── App.js
│   ├── CreateEvent.js
│   ├── DeleteEvent.js
│   ├── Event.js
│   ├── EventsCatalog.js
│   ├── Landing.js
│   ├── Navbar.js
│   ├── PrivateRoute.js
│   ├── Routes.js
│   └── SearchBar.js
├── configureStore.js
├── constants
│   ├── alertConstants.js
│   ├── eventConstants.js
│   ├── index.js
│   └── userConstants.js
├── index.html
├── index.js
├── reducers
│   ├── adminAuthReducer.js
│   ├── alertReducer.js
│   ├── eventReducer.js
│   └── searchReducer.js
├── reducers.js
└── services
    ├── eventService.js
    ├── index.js
    └── userService.js
```


## Project Structure

This Project uses ReactJS for Components and Redux for State Management ( acting as single source of truth for state)

For bundling/serving application parcel-bundler is being used.

For Fake APIs Json-server has been utilized.
