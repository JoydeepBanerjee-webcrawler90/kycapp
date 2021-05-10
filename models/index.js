const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
mongoose.set('useFindAndModify', false);

db.user = require("./users.model");
db.role = require("./roles.model");
db.document = require("./documents.model");

db.ROLES = ["customer", "admin", "moderator"];

module.exports = db;