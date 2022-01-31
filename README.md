# Megathon-API

API For an Ongoing Personal Project( An App That Lets You View And Enlist Upcoming/Ongoing Hackathons And Create Tech Blogs).

# Getting Started

Download the ZIP file and extract it. Open The Terminal in the Project Folder and run "npm install" to install the dependencies and then "npm start" to run the server.

# Configuring Environment Variables

Create a .env in the main directory and set mongoUri and myKey(secret key for jwt signing and verification

# Code Structure

  Index.js :   Entry Point of The Program that Hoists up The Server.
  
  App.js : Contains Express App Configurations, Database Connection and Endpoints.
  
  DB.js : Contains Code for Connecting to MongoDB.
  
  src/middleware : Contains The JWT Verification Code that Blocks access to Applied Routes for Anyone Who isn't Logged in.
  
  src/Routes : Contains The Routes for the Endpoints. 
  
  src/Models : Defines The Model Schema for Data.
  
  src/controllers : Contains the Controller Code That Handles Different Type of Requests on Routes.
  
# Endpoints and Functionalities

1). http://localhost:3000/user/

  Data Model
    
    {
      emailId: "EMAIL_ID",
      userName: "USERNAME",
      password: "password"
    }

  GET {/} : Gets all The Profiles of Existing Users From The DB.

  GET {/:name} : Gets The Profile of User matching the Name if it exists.
  
  Patch {/:name} : Updates The Profile of An Existing User in The DB.
  
  POST {/signup} : Saves and Create A User Profile in The DB.
  
  POST {/login} : Verifies The Request Credentials and Signs a JWT Token with emailId and userName.
  
  DELETE {/delete} : deletes The User Profile as per EmailId Given In The Request.
  
2). http://localhost:3000/hackathon/

  Data Model
    
    {
      name: "Name Of The Hackathon", 
      organizer: "Name of The Organizer",
      duration: number_of_days(Number), 
      link: "Hackathon Website OR Social Media LINK",
      date: "yy-mm-dd"
    }
   
  POST {/create} : Saves and Enlists A Hackathon in The DB.
  
  GET {/} : Gets a List of All Existing Hackathons From the DB.
  
  GET{/:name} : Gets the Details of the Named Hackathon From the DB.
  
  PATCH{/:name} : Updates The Named Hackathon Data as per the Request.
  
  DELETE{/delete/} : Deletes The Hackathon Listed in the Request.
  
3). http://localhost:3000/blog/

  Data Model
    
    {
      author: "Author of Blog",
      title: "Title of Blog",
      content: "Blog Content"
    }
  
  POST{/create} : Saves and Creates A Blog in the DB.
  
  GET{/} : Gets All The Existing Blogs from The DB.
  
  GET{/:title} : Gets The Titled Blog From The DB.
  
  PATCH{/:title} : Updates The Titled Blog as Per The Request.
  
  DELETE{/:title} : Deletes The Titled Blog From The DB.
    
  
