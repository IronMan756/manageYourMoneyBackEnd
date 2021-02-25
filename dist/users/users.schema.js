"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.userSchema = new mongoose.Schema({
    accessToken: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    login: {
        type: String,
    }
});
//# sourceMappingURL=users.schema.js.map