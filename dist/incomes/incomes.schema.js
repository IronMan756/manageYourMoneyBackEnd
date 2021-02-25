"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.incomeSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    purseId: {
        type: String
    },
    suma: {
        type: Number
    },
    data: {
        type: Date
    },
    name: {
        type: String
    },
    description: {
        type: String
    }
});
//# sourceMappingURL=incomes.schema.js.map