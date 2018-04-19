const mongoose = require("mongoose");
const User = mongoose.model("User");


module.exports = {
    auth (req, res) {
        res.send("auth");
    },

    async register (req, res) {
        try {
            const { email, password } = req.body;
            const user = new User({
                email: email,
                password: password
            }).save();
            console.log("saved:", email, password);
            res.status(200).send({
                ok: `created new user with: ${email} ${password}`
            })
        } catch(err) {
            res.send("failed login");
        }
    },

    logout (req, res) {
        req.logout();
        res.redirect('/');
    },

    currentUser (req, res) {
        res.send("user");
    },

    createUser (req, res) {
        res.send("create user here");
    }
};