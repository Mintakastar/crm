# crm
Project for https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring



## go to postman and hit
    http://localhost:8080/api

this will return ;
    
    {
        "_links": {
            "contacts": {
            "href": "http://localhost:8080/api/contacts"
        },
        "profile": {
            "href": "http://localhost:8080/api/profile"
        }
        }
    }



## for react

application creation is using this (once node,npm, nvm are installed):

    npx create-react-app client

this creates a "client" folder

to start the client , open new terminal

    cd client
    npm start

## materialized CSS was added

adding materialized from here     (in index.html under public folder)
    https://materializecss.com/getting-started.html

    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

add icons from here  (in index.html under public folder) https://materializecss.com/icons.html

    adding this, from the usage section:
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            