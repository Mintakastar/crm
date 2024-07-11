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


## Materialized CSS was added

adding materialized from here     (in index.html under public folder)
    https://materializecss.com/getting-started.html

    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

### add icons from here  (in index.html under public folder) https://materializecss.com/icons.html

    adding this, from the usage section:
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            

### Create a card using https://materializecss.com/cards.html
and copy Basic Card code (to the new component):

    <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>



### Adding a form from https://materializecss.com/text-inputs.html

and copy the code (to the new component):

    <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input disabled value="I am not editable" id="disabled" type="text" class="validate">
          <label for="disabled">Disabled</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          This is an inline input field:
          <div class="input-field inline">
            <input id="email_inline" type="email" class="validate">
            <label for="email_inline">Email</label>
            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
        </div>
      </div>
    </form>
    </div>


## CORS

a file ContactsController was created to resolve the CORS error 


    @RestController
    @RequestMapping("/api")
    @CrossOrigin(origins="http://localhost:3000")   //this is to avoid issue with CORS error, because node is on port 3000 and java on 8080
    public class ContactsController {
    
    }