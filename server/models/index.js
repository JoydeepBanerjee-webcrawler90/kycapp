const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;


db.user = require("./users.model");
db.role = require("./roles.model");

db.ROLES = ["customer", "admin", "moderator"];

module.exports = db;