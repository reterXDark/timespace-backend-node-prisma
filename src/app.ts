import express, { Request, Response, Application, NextFunction } from "express";
import bodyparser from "body-parser";
import usersRouter from "./routers/userRoutes";

const app = express();

app.use(bodyparser.json());

const PORT: number = 3000; //port

app.use("/timespace/api/v1/users", usersRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("<h1>Node + TypeScript + Express - REST API</h1>");
});

app.listen(PORT, () =>
  console.log(`Server Running : http://localhost:${PORT}`)
);
