'use strict';

var users = global.nss.db.collection('users');
var bcrypt = require('bcrypt');

class User{
  static register(obj, fn){
    var user = new User();
    user.email = obj.email;
    user.password = bcrypt.hashSync(obj.password, 8);
    users.save(user, ()=>fn(user));
    }
  }
module.exports = User;
