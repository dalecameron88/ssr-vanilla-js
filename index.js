const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require("./routes");

const app = express();

// Use handlbars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routing
app.use(routes);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// If port variable is not definied in the .env file
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${ PORT }`));