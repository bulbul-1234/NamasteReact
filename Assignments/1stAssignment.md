# _chapter 01 - Inception_ 

## Q1. what is`Emmet`?
`Emmet` is a essential toolkit for web developers. Emmet is a plugin for many text editors which greatly improves HTML AND CSS Workflow.
a lot of shotcuts.
https://docs.emmet.io/cheat-sheet/
Nesting operators: Child: >, Sibling: +,Multiplication: *

Child: >  => div>ul>li 

#### output : 
```html
<div>
    <ul>
       	<li></li>
    </ul>
</div>
```

## Q2. Difference between a Library and Framework?
 Library gives us to some basic functionalities to our app but Framework gives us to bunch of functionality like routing etc. using framework is sufficient for making fully fleged app.

## Q3. What is `CDN`? Why do we use it?
A `content delivery network(CDN)` is a geographically distributed network of server which help to us to get the data from that server.
The main benefit of using a CDN is that it can help to improve website performance by reducing latency and providing a more reliable connection.


## Q4. Why is React known as React? 
React goal is to react/respond accordingly whenever the state changes.
“And it's called React because it reacts. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface
 development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.”
 

## Q5. What is `crossorigin` in script tag?
`Cross-Origin Resource Sharing (CORS)` is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

## Q6. What is diference between `React` and `ReactDOM`?
- `React`: responsible for creating React elements (like document.createElement ())

- `ReactDOM`: responsible for rendering React elements to the DOM.

- Note: the reason that React and ReactDOM are separate is because ReactJs support other platforms as well like React Native.
 
## Q7. What is difference between react.development.js and react.production.js files via CDN?

- react.development.js is used when we are in development.

- react.production.js is used when we have to launch our web-app in production ( minifies app ).


## Q8. What is `async` and `defer`?

- In Normal script tag -> html parsing is stopped and script is fetched and executes and after that html parsing will be continue.

- `async` -> html parsing running and file downloads parallelly after sometime html parsing is stopped and js is executes and after that html parsing will be continue.

- `defer` -> js file download parallelly with html parsing and after sometime html parsing is fully completed then js file will be execute.

Git vs Github?
Github is a client which can host git repositories or a service while git is a software or version control system to manage source code history.
github is a gui while git is installed locally in the system.



 







