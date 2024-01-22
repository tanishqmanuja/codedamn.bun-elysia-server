import { Elysia } from "elysia";

// Codedamn specific port, DO NOT CHANGE
const PORT = process.env.PUBLIC_PORT || 1337;

const app = new Elysia().get("/", () => "Hello Elysia").listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
