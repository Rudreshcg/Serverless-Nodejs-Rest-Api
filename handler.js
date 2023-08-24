const { userRegister, loginUser} = require("./src/controller/users")
const validateToken = require("./src/middleware/validateToken")
const  createProduct = require("./src/controller/products")

module.exports.userRegister = userRegister
module.exports.loginUser = loginUser
module.exports.validateToken = validateToken
module.exports.createProduct = createProduct
