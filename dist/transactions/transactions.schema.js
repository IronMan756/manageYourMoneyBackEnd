"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.transactionSchema = new mongoose.Schema({
    purseIdTo: {
        type: String
    },
    purseIdFrom: {
        type: String
    },
    incomeId: {
        type: String
    },
    categoryId: {
        type: String
    },
    expenceId: {
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
//# sourceMappingURL=transactions.schema.js.map