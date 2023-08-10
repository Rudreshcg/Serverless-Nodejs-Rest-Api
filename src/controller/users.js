const connection = require("../config/database");
const bcrypt = require("bcrypt");
const { executeQuery, response } = require("../utils");
const jwt = require('jsonwebtoken');




const userRegister = async (event, context) => {
    try {
        const { username, email, password } = JSON.parse(event.body);
        const hashedPassword = await bcrypt.hash(password, 10);

        const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        const values = [username, email, hashedPassword];

        try {
            await executeQuery(query, values);

            console.log(`User created: ${username}`);
            return response(200, 'Successfully Registered', username);
        } catch (err) {
            console.error(`Error creating user ${username}:`, err.message);
            if (err.code === 'ER_DUP_ENTRY') {
                return response(409, 'Email already exists', null);
            } else {
                return response(500, 'Error creating user ' + err.message, null);
            }
        }
    } catch (error) {
        console.error('Error:', error);
        return response(400, 'Error!', error.message);
    }
};



const loginUser = async (event) => {
    try {
        const { email, password } = JSON.parse(event.body);

        const query = "SELECT * FROM users WHERE email = ?";
        const values = [email];

        const rows = await executeQuery(query, values);

        user = rows[0]

        if (!user) {
            return response(404, 'User not found', null);
        }

        const verifyPassword = await bcrypt.compare(password, user.password);

        console.log(verifyPassword)

        if (!verifyPassword) {
            return response(400, 'Invalid credentials', null);
        }

        user.token = await generateToken(user.id);
        return response(200, 'Success', user);
    } catch (error) {
        console.error('Error:', error);
        return response(400, 'ERROR', error);
    }
};



function generateToken(userId) {
    return new Promise((resolve, reject) => {
        const secretKey = 'softsuave';
        const tokenOptions = { expiresIn: '1h' };

        jwt.sign({ userId }, secretKey, tokenOptions, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}


module.exports = {
    userRegister, loginUser
}