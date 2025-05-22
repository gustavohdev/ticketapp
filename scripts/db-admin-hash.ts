// script to create your admin account password
// route is protected by the api for other users
const bcrypt = require("bcryptjs");

const hash = (async () => await bcrypt.hash("adminpass123", 10))().then(
  (data) => console.log(data)
);
