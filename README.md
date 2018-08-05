# Neighborhood Map Project

This application displays a list of points of interests (POIs) in Santa Barbara, CA. Each destination name can be selected from the list and viewed on a map. The application uses a third party **Wikipedia API** - to display information about each POI when selected from the left side menu or clicked on the map.

Without a network connection, the application defaults to its own POI descriptions stored in **data.json**.

The list of points of interests can be filtered by typing a term in the input box at the top of the list. For example, filtering by 'beach', shows only the points of interests having the word 'beach' in their name.


## How To Install the Application

The project can be installed with NPM.
Just run
 * npm install
at the prompt.

## How To Run the Application

The project can be started with NPM.
Just run
 * npm start
at the prompt.

## This application was built using:

- [ReactJs](https://github.com/facebook/create-react-app)
- [React Google Maps](https://tomchentw.github.io/react-google-maps/#introduction) - provides a set of React components wrapping the underlying Google Maps JavaScript API.
- [ReactStrap](https://reactstrap.github.io/) - Easy to use React Bootstrap 4 components
- [Lodash](https://lodash.com/) - JavaScript utility library delivering modularity, performance & extras

# Third party APIs:

- [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page)
