// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./database');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');

const app = express();
app.set('trust proxy', 1)
// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);
require('dotenv')

// default value for title local
const projectName = 'careless-aviation';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// const favicon = require('serve-favicon')
// const path = require('path')
 
// const app = express()
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);


module.exports = app;