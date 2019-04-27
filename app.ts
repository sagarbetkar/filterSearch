import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import logger from "morgan";
import bodyParser from "body-parser";
import { server } from "./graphql/schema";

dotenv.config({
  path: ".env"
});

const mongoUri = process.env.MONGODB_URI_DEVELOPMENT;
(<any>mongoose).Promise = global.Promise;
mongoose.connect(mongoUri, { useNewUrlParser: true }).then(
  () => {
    console.log("\tMongoDB connected successfully.");
    console.log("\tPress CTRL-C to stop\n");
  },
  (err: any) => {
    /** handle initial connection error */
    console.log(
      "MongoDB connection error. Please make sure MongoDB is running. " + err
    );
  }
);

export const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.applyMiddleware({ app });
