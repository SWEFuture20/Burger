var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burger", function(res) {
          cb(res);
        });
      },
//       create: function(objColVals, condition, cb) {
//         orm.create("burger", objColVals, condition, function(res){
//           cb(res)
//         });
//       },
//       update: function(condition, cb) {
//         orm.update("burger", condition, function(res) {
//           cb(res);
//         });
//       },
}
module.exports = burger;