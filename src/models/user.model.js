// collects functions to create, delete, get user
import fs from 'fs';

class User {
  constructor() {
    const rawdata = fs.readFileSync(`${__dirname}/users.json`);
    this.users = JSON.parse(rawdata);
  }

  getAll() {
    // return all users
    return this.users;
  }

  get(id) {
    // get user from json file using id
    // returns -1 if not found
    const user = this.users.filter((usr) => usr.id === id);
    const result = user.length === 0 ? -1 : user[0];
    return result;
  }

  // create(user){
  //     // adds user to json file
  //     return user;
  // }

  // delete(id){
  //     // delete user from file
  //     // throws error if not found
  //     return { id };
  // }

  // update(id, key, val){
  //     // to do
  //     // update user details
  //     return { id, key, val }
  // }
}

export default User;
