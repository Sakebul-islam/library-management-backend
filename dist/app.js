"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./app/controllers/book.controller");
const borrow_controller_1 = require("./app/controllers/borrow.controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/books", book_controller_1.booksRoutes);
app.use("/api/borrow", borrow_controller_1.borrowRoutes);
app.get("/", (req, res) => {
    res.send("Welcome from Library Management System API");
});
// 404 error for rout not found
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        error: {
            path: req.originalUrl,
        },
    });
});
// global error handler middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Something went wrong",
        error: err,
    });
});
exports.default = app;
