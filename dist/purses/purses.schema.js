"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.purseSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: "",
    },
    name: {
        type: String,
        default: "",
    },
    categoryId: {
        type: String,
        default: "",
    },
    balance: {
        type: Number,
        default: 0,
    },
});
//# sourceMappingURL=purses.schema.js.map