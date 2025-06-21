import { Server } from "http";
import mongoose from "mongoose";
import "dotenv/config";
import chalk from "chalk";
import app from "./app";

let server: Server;

const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(chalk.green("✔ Connected to MongoDB Using Mongoose!!"));

    server = app.listen(PORT, () => {
      const localUrl = `http://127.0.0.1:${PORT}`;
      const time = new Date().toLocaleTimeString();

      console.log();
      console.log(chalk.bold.green("✔   App is running"));
      console.log(chalk.cyan("➜   Local:  ") + chalk.underline.blue(localUrl));
      console.log(chalk.gray("🕝  Started at ") + chalk.yellow(time));
      console.log();
    });

    process.on("SIGINT", async () => {
      console.log(chalk.red("\n✖ Gracefully shutting down..."));
      await mongoose.disconnect();
      server.close(() => {
        console.log(chalk.yellow("🚪 Server closed. Goodbye!"));
        process.exit(0);
      });
    });
  } catch (error) {
    console.log(error);
    console.log(chalk.red("❌ Error starting server:"), error);
  }
}

main();
