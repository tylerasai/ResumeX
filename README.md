# ResumeX
## A platform for checking and editing your resume to qualify for job's description or get job suggestions matching your resume.
=========

## Visit the website on: https://resumex2020.herokuapp.com/



## --------------------------------------------

A project built by Lighthouse Labs students.

ResumeX allows users to upload job description and resume and get results whether your resume qualifies for the job! You can also get job suggestions matching your resume. It is user friendly and uses modern frameworks such as React, css, express and more!

Please enjoy our application and get hired!

---  Built by: Tyler, Jay Ho and Sher Arsalaie. ---

## Screenshots

!["landing page/Home"](https://raw.githubusercontent.com/codertyler/final_project_LHL/master/resumex/src/assets/app-imgs/resumex-home.png)
!["Main page with resume and job description and results"]()
!["Job suggestions matching resume"](https://raw.githubusercontent.com/codertyler/final_project_LHL/master/resumex/src/assets/app-imgs/resumex-jobsearch.png)


## Details about app:

The app will help users in their careers by speeding up the resume and editing process. The app can be easily used and is user friendly. User can cut and paste the job description and resume in the text field, or they can upload the docx file and press submit. The submit button will give all the results in matter of seconds and will recommend the changes in resume in order to meet the job requirements. The user can also decide to look for a job using our job search option that uses api calls to hob websites and recommend jobs matching your resume automatically.

## Getting Started

1. Fork and clone the project.
2. Update the .env file with your correct local information 
  - DB_HOST = localhost
  - DB_USER = labber  
  - DB_PASS = labber
  - DB_NAME = vagrant
  - DB_PORT = 5432 
3. Install dependencies: `npm install`
4. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
5. Run the server: `npm start`
  - Note: nodemon is used, so you should not have to restart your server
6. Run the App in another terminal: `npm start`
  - Note: nodemon is used, so you should not have to restart your server
7. Visit `http://localhost:3000/`


## Dependencies

- "axios": "^0.21.0",
- "cookie-parser": "~1.4.4",
- "cors": "^2.8.5",
- "debug": "~2.6.9",
- "dotenv": "^8.2.0",
- "express": "~4.16.1",
- "morgan": "~1.9.1",
- "pg": "^8.5.1",
- "pg-native": "^3.0.0"
