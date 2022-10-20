import "reflect-metadata";
import "dotenv/config";

import cors from "cors";
import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import container from "./config/inversify.config";

const app = express();
const server = new InversifyExpressServer(container, null, null, app);

server.setConfig((app) => {
  app.use(cors());
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  app.disable("x-powered-by");
});

const serverInstance = server.build();

serverInstance.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(404).send({
      message: `Route '${req.path}', NOT found...`,
      status: "error",
    });
  }
);

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}!`)
);
