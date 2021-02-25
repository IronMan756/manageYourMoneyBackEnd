"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.categorySchema = new mongoose.Schema({
    img: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    }
});
//# sourceMappingURL=category.schema.js.map