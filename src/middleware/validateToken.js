const jwt = require('jsonwebtoken');


const validateToken = async (event, context) => {
    let token;
    console.log(event)
//     let authHeder = req.headers.Authorization || req.headers.authorization
//     if (authHeder && authHeder.startsWith("Bearer")) {
//         token = authHeder.split(" ")[1];
//         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//             if(err) {
//                 res.status(401);
//                 throw new Error("User is not authorized");
//             }
//             req.user = decoded.user;
//             next();
//         });
//     }if(!token){
//         res.status(401);
//         throw new Error("User is not authorized or token is missing");
//     }
};

module.exports = validateToken;