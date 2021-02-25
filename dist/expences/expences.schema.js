"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.expenceSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    purseId: {
        type: String,
    },
    suma: {
        type: Number,
    },
    data: {
        type: Number,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
});
//# sourceMappingURL=expences.schema.js.map