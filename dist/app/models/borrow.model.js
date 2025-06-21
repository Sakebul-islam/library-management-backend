"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowDetails = void 0;
const mongoose_1 = require("mongoose");
const borrowSchema = new mongoose_1.Schema({
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity must be a positive number"],
        validate: {
            validator: Number.isInteger,
            message: "Quantity must be a positive number",
        },
    },
    dueDate: {
        type: Date,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.BorrowDetails = (0, mongoose_1.model)("Borrow", borrowSchema);
