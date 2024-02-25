# Express.JS 
its a node.js framework
it is a web application framework that provides you with a simple API to build websites, web apps and back ends.

# Need for express.js
try to write a small rest api server in node and express, the latter will take you 5-10x less time and lines of code


`Create an Express application`
const app = express();

`API` 
get
post 
put 
delete
app.get(route, callback)


`callback function has two parameters `
1. request(req) : req object represents Http request and has properties for request query String, parameters, body, Http Headers, etc 
2. response(res): Http response

# serving static files in Express
to serve static files such as images, CSS files, and Javascript files, use the express.static build-in middleware function in Express.
express.static(root, [options])

# Using template engines with Express
the template engine enables you to use static template files in your application. At runtime, the template engine replaces the variables in the template file with the actual values and tramsforms the template into an HtML file sents to the client. This approach makes it easier to design an Html page.
`popular Template engines`
1. Pug
2. Mustache
3. EJS Express application generator.
4. Handlebar `npm i hbs`

# Handlebar
application setting properties
1. `views`: the directory where the template files are located. 
app.set('views', './view)
2. `view engine`: which template engine to use. 
app.set('view engine', 'pug')