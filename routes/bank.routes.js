const { authJwt } = require("../middleware");
const controller = require("../controllers/bank.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

app.post('/api/bank/verify',[authJwt.verifyToken],controller.verifyBank);

app.get('/api/bank/get',[authJwt.verifyToken],controller.getBankDetails);

app.post('/api/bank/remove',[authJwt.verifyToken],controller.removeBankDetail);

}