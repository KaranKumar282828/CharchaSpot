// export const func1 = (req, res, next) => {
//     console.log("hello I am func1");
//     next();
// }
// export const func2 = (req, res, next) => {
//     console.log("hello I am func2");
//     next();
// }

import User from '../models/user.model.js';


export const register = (req, res, next) => {
    try {
        const { fullName, username, password, gender } = req.body;
        console.log(fullName);
    } catch (error) {

    }
}

export const login = (req, res, next) => {
    res.send("hello I am login route");
}






