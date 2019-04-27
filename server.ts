import { app } from "./app";
import { config } from "./config";

app.listen({ port: config.server.port }, () => {
  console.log(`🚀 Server ready at http://localhost:${config.server.port}`);
});
