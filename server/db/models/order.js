var Sequelize = require('sequelize');

var Hashids = require('hashids');
var hashids = new Hashids();


var db = require('../_db');

module.exports = db.define('order', {
//getter method for total price
}, {
  getterMethods: {
    convertId: function() {
      return "ORDER" + hashids.encode(this.id);
    },
    convertDate: function() {
      return this.createdAt.toString().substring(0,15);
    }
  }
})
