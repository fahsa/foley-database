# FoleyDatabase

Web application for uploading and downloading audio files to/from a real-time searchable database. Built with Firebase, Angular 4, and AngularFire2 4.0.

## Getting Started
These instructions are for running a downloaded copy of the project locally  for development and testing purposes.

### Prerequisites

Install Angular CLI  
`npm install -g @angular/cli`

Install Firebase CLI tools  
`npm install -g firebase-tools`

Install Typings and TypeScript  
`npm install -g typings`  
`npm install -g typescript`  

Install AngularFire2 and Firebase  
`npm install angularfire2 firebase --save`

### Create Firebase Application

Create a [Firebase account](https://firebase.google.com/), login to the Firebase console and create a new application.

Import the "foley-database-export.json" file in the project directory to the Firebase real-time database.

Upload the entirety of the "sound-effects" folder in the project directory to Firebase storage/

### Run Angular Application

Move to the project directory and start the application.  
`cd foleydatabase`  
`ng serve`

Open browser with url <http://localhost:4200/> to view and test the application.

## Deployment

These instructions are for deploying the project on a live system.  

### Link Angular Application to Firebase Application

Login to firebase  
`firebase login`

Initialize project  
`firebase init`

Upon initializing, give the following answers to the questions that appear:  
- Which Firebase CLI features? **Hosting**  
- Select a default Firebase project? (Choose the application created above)  
- What do you want to use as your public directory? **dist**  
- Configure as a single-page app? **no**  

### Deploy

To deploy using the existing application:  
`firebase deploy`

If you have made edits to the original Angular application, first create a new production folder and then deploy:  
`ng build --prod`   
`firebase deploy`