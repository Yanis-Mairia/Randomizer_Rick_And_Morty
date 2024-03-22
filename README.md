# Randomizer_Rick_And_Morty
Contains the source code for the frontend of the application. Includes graphic resources for project Randomizer Rick and Morty with an API.

Language HTML,CSS and JS.


Technical Documentation:  Randomizer Rick and Morty Website

Overview:
The Randomizer Rick and Morty website is a web application designed to provide information and entertainment related to the popular animated series "Rick and Morty." It consists of two HTML pages, each with its corresponding CSS file. The application utilizes the Rick and Morty API to randomly select and display information about 12 characters from the series.

File Structure:

index.html: This is the main landing page of the websiteies and offering navigation to the other page with a button.

homepage.html: This page providing an introduction to the series . They have a displays information about 12 randomly selected characters from the series. It also contains interactive features to filter characters based on their status.

home.css: This file contains the styles for  index.html. It defines the layout, colors, fonts, and other visual aspects of the website.

style.css : This file contains the styles for  homepage.html. It defines the layout, colors, fonts, and other visual aspects of the website

app.js: This JavaScript file is responsible for fetching data from the Rick and Morty API and dynamically updating the content of the characters.html page based on user interactions.

Functionality:

Random Character Selection: Upon loading the homepage.html page, the application fetches data from the Rick and Morty API to randomly select 12 characters. These characters are then displayed on the page along with their images, names, statuses, genders, and species.

Filtering Characters: The characters.html page allows users to filter characters based on their status (Alive, Dead, or Unknown). Clicking on the corresponding filter button triggers the application to fetch and display characters that match the selected status.

Dynamic Content Update: Whenever a filter button is clicked or the page is loaded, the application dynamically updates the displayed characters without requiring a full page reload. This is achieved using JavaScript to manipulate the DOM based on user interactions.

API Integration:
The application integrates with the Rick and Morty API to retrieve information about characters from the series. The API provides endpoints for querying characters based on various parameters such as status, gender, and species.

Future Enhancements:
Implementing additional features such as searching for characters by name.
Enhancing the user interface with animations and transitions.
Adding more information about each character, such as their origin and location.
Optimizing the application for better performance and scalability.
Dependencies:
Rick and Morty API: Used for retrieving character information.
Fetch API: Utilized in JavaScript for making HTTP requests to the API endpoints.
Conclusion:
The Rick and Morty website provides an engaging platform for fans of the series to explore information about various characters. With its intuitive user interface and seamless integration with the Rick and Morty API, the website offers an immersive experience for users interested in discovering more about their favorite characters from the show.
