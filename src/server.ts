import { Server } from "http";
import mongoose from "mongoose";
import "dotenv/config";
import chalk from "chalk";
import app from "./app";

let server: Server;

const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await mongoose.connect(process.env.mongo_uri as string);
    console.log(chalk.green("✔ Connected to MongoDB Using Mongoose!!"));

    server = app.listen(PORT, () => {
      const localUrl = `http://127.0.0.1:${PORT}`;
      const time = new Date().toLocaleTimeString();
      console.log(`✔   App is running`);
      console.log(`➜   Local:  + ${localUrl}`);
      console.log(`🕝  Started at ${time}`);
    });

  } catch (error) {
    console.log(error);
    console.log(chalk.red("❌ Error starting server:"), error);
  }
}

main();
