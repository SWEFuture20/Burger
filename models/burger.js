var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burger", function(res) {
          cb(res);
        });
      },
      create: function(name, cb) {
        orm.create("burger", [
            "burger_name", "devour"
        ], [
            name, false
        ], cb);
      },
      update: function(condition, cb) {
        orm.update("burger", condition, function(res) {
          cb(res);
        });
      },
}
module.exports = burger;