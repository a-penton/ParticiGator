# Welcome to Particigator Mobile!
We are Awesome.jar, and as part of a larger initiative to increase participation in CISE course discussion sessions, we worked with our faculty advisor Professor Amanpreet Kapoor to build Particigator, an educational resource for COP3530. Specifically, we designed a cross-platform mobile application for Android and iOS devices to help students and instructors manage discussion participation.

Particigator is designed to be a convenient resource for instructors to track attendance and participation in discussion sections. We built our applications using ReactJS, React Native, NodeJS, Express, MongoDB and Expo. This repository features the code specifically for our mobile application for students. It is equipped with a functional login page and an activity component where students will be able to solve a participation question and submit their answer along with a code given to them in class to help track their attendance.

Meanwhile, our web repository (at this link: https://github.com/a-penton/Particigator-Web) features the code specifically for our instructor portal, which is a web application allowing instructors to easily add students to a database, create questions for students to solve, view student submissions, and activate/deactivate questions.

# Setup
1. Download the Expo mobile application from the App Store.
2. Create an account with Expo. 
3. Sign in with the Expo account within the Expo Mobile App.
4. Ensure your iPhone with the Expo Mobile App and your computer running the code are connected to the same WiFi.

# Running the Particigator Mobile Application (on an iPhone)
To run Particigator-Web for instructors:

* Pull the repository from https://github.com/a-penton/ParticiGator.git

IMPORTANT: *In the ../backend/Source folder, replace the MONGO_URI string in the Database.js file with the correct connection string obtained from a contributor.*

Before running the app for the first time on a device:
* Run "npm i" in both the front and back end directories
* Install Expo in the front end directory using "cd frontend" and " npm install expo-cli"
* Run "cd frontend" and "npx expo login" to sign in with your expo account in the front end directory
* Run "ipconfig" (Windows) or "ifconfig" (Mac) to obtain your Wireless LAN Adapter Wi-Fi IPv4 address
* In the ../frontend folder, replace the IP address string in the app.json file with your IPv4 address obtained in the previous ste (make sure you don't delete the port number).

In one Bash terminal, run the backend:
* cd backend
* npm start

In one Bash terminal, run the frontend:
* cd frontend
* npm start

After both terminals are running, open the Expo Mobile Application and chose the development server that is currently running. Upon clicking this server (which should reference your IPv4 address), Particigator will open on your mobile device and show the login screen.

# Contributors
Developers: Julia Harbord, Andrew Penton, Robin Fintz

Advisor: Amanpreet Kapoor (University of Florida)