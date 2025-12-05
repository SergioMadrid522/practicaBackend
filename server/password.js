"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* libraries */
var bcryptjs_1 = require("bcryptjs");
function Password(password) {
    var saltRounds = 10;
    var hash = bcryptjs_1.default.hashSync(password, saltRounds);
    bcryptjs_1.default.hash(password, saltRounds, function (err, hash) {
        if (err) {
            console.error("Error while hashing password", err);
        }
        else {
            console.log("hashed password", hash);
        }
    });
}
Password("sergio1519*91");
function Login() { }
