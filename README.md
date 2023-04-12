# Colour Streak

Colour Streak is my personal project showcasing my love for learning and making art.

This project was created using React, Node.js with Express, and MySQL. React is used to create the core application pages including the game user interface and the leaderboard page, which ranks user scores from highest to lowest. Authentication is implemented and is primarily used to track highscores among users. The colour API (https://www.thecolorapi.com/) is used to obtain all of the relevant colour data for the game. For the backend, Node.js with Express is primarily utilized to make REST API calls to mySQL data tables.

## The Game
The site hosts a fun colour game that tests the user's ability to guess a random colour's name. The game shows the user a colour and provides three buttons with one containing the correct name of the colour. The other two options are randomly chosen colours. 

![Colour-Streak-Screenshot](https://user-images.githubusercontent.com/19713291/231312687-f596328a-ba16-49ef-ab09-8d8dd1d4d9ed.png)

## The Leaderboard
The colour names are pulled from a database by calling a color API (https://www.thecolorapi.com/). A streak starts when the user gets the answer right multiple consecutive times and are shown above the displayed colour. If users are logged in, highscores are recorded into a mySQL data table when the streaks end. Rankings can be seen on the Leaderboard page.

![Colour-Streak-Leaderboard-Screenshot](https://user-images.githubusercontent.com/19713291/231314287-fe101706-be22-495f-810d-d34b1bc39960.png)

## The About Page
The About page provides more detail on the design and the thought process behind the project, including a screencapture of the initial site design sketched on Figma as well as sections discussing the webframeworks used and potential future additions to the site such as plans to add more difficulty to the game and adding another version of the game for users to learn and practice colour theory by guessing the correct colour scheme that is shown.

![Colour-Streak-About-Screenshot](https://user-images.githubusercontent.com/19713291/231314300-ff7fb1d1-73f9-4b7d-b440-647174b06307.png)

## Authentication
Authentication is implemented in this site to remember users highscores and display the ranks in the Leaderboard page. If users don't have an account they can click the link on the Login page to access the Register page. Once registered, the username and hashed password is stored in the mySQL database. When logged in, a session is created to remember the user.

![Colour-Streak-Login-Screenshot](https://user-images.githubusercontent.com/19713291/231317843-e1dfbfe5-9844-4c9a-9926-3f4667cc0f9c.png)

## Build
To run the application locally, the following are required:
- mySQL: version 2.18.1
  - Create **colour_streak** schema
  - Create table named **users** with columns "id" (int AI PK), "username" (varchar(255)), "password" (varchar(255))
  - Create table named **leaderboard** with columns "user_id" (int PK), "highscore" (int)
- npm: latest version

Once the dependencies above exist, run ```npm start``` to launch the application!
