// figure out what set of credentials to return
if (proccess.env.NODE_ENV === "production") {
  // we are in production - return production keys
  module.exports = require("./prod");
} else {
  // we are in development - return development keys
  module.exports = require("./dev");
}
