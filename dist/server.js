"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const chalk_1 = __importDefault(require("chalk"));
const app_1 = __importDefault(require("./app"));
let server;
const PORT = process.env.PORT || 5000;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(process.env.MONGODB_URI);
            console.log(chalk_1.default.green("✔ Connected to MongoDB Using Mongoose!!"));
            server = app_1.default.listen(PORT, () => {
                const localUrl = `http://127.0.0.1:${PORT}`;
                const time = new Date().toLocaleTimeString();
                console.log(chalk_1.default.bold.green("✔   App is running"));
                console.log(chalk_1.default.cyan("➜   Local:  ") + chalk_1.default.underline.blue(localUrl));
                console.log(chalk_1.default.gray("🕝  Started at ") + chalk_1.default.yellow(time));
            });
            // process.on("SIGINT", async () => {
            //   console.log(chalk.red("\n✖ Gracefully shutting down..."));
            //   await mongoose.disconnect();
            //   server.close(() => {
            //     console.log(chalk.yellow("🚪 Server closed. Goodbye!"));
            //     process.exit(0);
            //   });
            // });
        }
        catch (error) {
            console.log(error);
            console.log(chalk_1.default.red("❌ Error starting server:"), error);
        }
    });
}
main();
