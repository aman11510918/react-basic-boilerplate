import WebServer from "./web.server";
import "regenerator-runtime/runtime";

describe("Started", () => {
  let webServer;

  beforeAll(() => {
    webServer = new WebServer();
  });

  test("Server should start and trigger a callback", async () => {
    let promise = webServer.start();
    await expect(promise).resolves.toBeUndefined();
  });

  test("Server should stop and trigger a callback", async () => {
    let promise = webServer.stop();
    await expect(promise).resolves.toBeUndefined();
  });
});
