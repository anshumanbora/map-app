### 1. Description
An application which gets weather updates of your favorite cities.

### 2. Implementation
LoadScreen: The landing page which a user will encounter when they start this application.

MapInterface: The main component which renders a map with some important cities.  

WeatherDetails: A stateless component which generates JSX to fill the contents of a popup box.
I could have made this as a method inside the MapInterface component but as I see as an added functionality to the map component I made it a separate component.      

#### 2.1 Directory Structure
    -> public
        index.html
        manifest.json
    -> src
        -> data
            cities.json
        -> resource
            -> gifs
                [all gif files]
        App.js
        index.js
        LoadScreen.js
        MapInterface.js
        WeatherDetails.js
        index.css
        LoadScreen.css
        MapInterface.css
        WeatherDetails.css
    package.json
                
#### 2.2 API

#### 2.2.1 react-map-gl
React wrapper for MapBox: [react-map-gl](https://uber.github.io/react-map-gl/#/)

####  2.2.2 Open Weather Map
Weather data for cities: [openweathermap](https://openweathermap.org)

### 3. Features
I had a great time working with this project. In addition to completing the basic requirements I thought of adding some stuff. 
#### 3.1 Landing Page 
I came up with a landing page which has some pretty neat weather gifs to give the user a welcoming feeling. 
#### 3.2 Transition Animation
When the map is being loaded, I added some transition animation which helps the map gradually fade into existance. In addition to being a cool effect, the animation hides the delay in the API response.   
#### 3.3 Important Info
 To represent the weather info, I picked out the details which in my view are the most important to an user. The curent temperature, humidity, wind speed and a description of the weather are the most relevant information extracted from the API response.
Out of all these features, a user is most likely looking for the temperature when looking at the weather report. Hence, the temperature is shown with the biggest fonts. 
#### 3.4 Universal Signals
Also, to make life even easier, I came up with a color code for the current temperature. A user can casually glance over a city's weather status and without even focusing on the figures, they can tell if it's hot or cold out there. This feature is also helpful for people from other countries who follow the metric system and have a tough time converting the temperature into a scale that they are familiar with.

    The color code is as follows:

    Blue: for really cold temperature(below 60F),

    Green: stands for a pleasant weather(between 60F and 80F),

    Red: when it's really hot(over 80F).
#### 3.5 Responsive
I have also tried to make the application responsive with some basic media queries and Bootstrap classes.      
##### Landing Page
![Main list](https://raw.githubusercontent.com/anshumanbora/map-app/master/images/landingPage.PNG)

##### The Map
![Details](https://raw.githubusercontent.com/anshumanbora/mapp-app/master/images/Map.PNG)

##### Weather Details
![Details](https://raw.githubusercontent.com/anshumanbora/mapp-app/master/images/WeatherUpdate.PNG)


### Running the application

    1. Clone this application.
    2. On your command line, go to the root of this project and "npm install" to install all dependencies.
    3. "npm run start" to start the application. It should launch automatically on your browser(or check at http://localhost:3000).
    
### Link
[coming up]()