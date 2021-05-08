const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static('uploads'));
app.use(fileUpload());

// db connect 
const db = require("./models");
const dbConfig = require('./config/db.config');

db.mongoose
  .connect(dbConfig.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database mongo altas!");

  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  
// main route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to mutual fund backend application." });
// });

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app); 
require('./routes/upload.routes')(app);

// if(process.env.NODE_ENV === 'production') {
//     // set static folder
//     app.use(express.static('client/build'));
//     app.get('*', (req,res) => {
//       res.sendFile(path.resolve(__dirname,'client','build','index.html'));
//     })
// }

app.use(express.static('client/build'));
    app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
// app.use(express.static(path.join(__dirname, "client/build")));
// app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "/index.html")));


// set port, listen for requests

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});