# Event Finder - Phase 4 Assessment

## Technologies Used
| ReactJS | 16.14.0 |
| ------ | ------- |
| redux | 4.0.5 | 
| react-redux | 7.2.1 |
| parcel-bundler | 1.12.4 |
| json-server | 0.16.2 |


## File Structure

```
├── README.md
├── db.json
├── package.json
├── src
│   ├── actions
│   │   ├── alertActions.js
│   │   ├── eventActions.js
│   │   ├── index.js
│   │   └── searchActions.js
│   ├── components
│   │   ├── App.js
│   │   ├── CreateEvent.js
│   │   ├── DeleteEvent.js
│   │   ├── Event.js
│   │   ├── EventsCatalog.js
│   │   ├── Landing.js
│   │   ├── Navbar.js
│   │   ├── Routes.js
│   │   └── SearchBar.js
│   ├── configureStore.js
│   ├── constants
│   │   ├── alertConstants.js
│   │   ├── eventConstants.js
│   │   └── index.js
│   ├── index.html
│   ├── index.js
│   ├── reducers
│   │   ├── alertReducer.js
│   │   ├── eventReducer.js
│   │   └── searchReducer.js
│   ├── reducers.js
│   └── services
│       ├── eventService.js
│       └── index.js
├── yarn-error.log
└── yarn.lock
```

## Project Structure

This Project uses ReactJS for Components and Redux for State Management ( acting as single source of truth for state)

For bundling/serving application parcel-bundler is being used.

For Fake APIs Json-server has been utilized.
