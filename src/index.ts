import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import PublishController from "./controllers/publish";

const app = new Hono();

app.post("/publish", PublishController);

serve(app);
