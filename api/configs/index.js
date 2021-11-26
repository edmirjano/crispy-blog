import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { configDB } from "./db.js";

const env = dotenv.config()

export const configApp = (app) => {
  
  app.use(cors());

  dotenv.config();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  configDB(app, env.parsed.DATABASE, env.parsed.PORT);
};

 