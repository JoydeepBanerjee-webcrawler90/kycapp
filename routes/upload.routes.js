const { authJwt } = require("../middleware");
const controller = require("../controllers/upload.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

app.post('/api/aadhaar/upload',[authJwt.verifyToken],controller.uploadAadhaar);

app.get('/api/aadhaar/get',[authJwt.verifyToken],controller.getAadhaar);

}