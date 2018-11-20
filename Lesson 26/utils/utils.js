
module.exports.add = (a, b) => a + b;

module.exports.square = (a = 0) => a ** 2;

module.exports.setName = (user, fullName) => {
  const names = fullName.split(' ');
  user.firstName = names[0]; // setting props for user object
  user.lastName = names[1];
  return user; // returning user object
};

// Async code
module.exports.asyncAdd = (a ,b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};


module.exports.asyncSquare = (a, callback) => {
  setTimeout(() => {
    callback(a * a);
  }, 500);
};
