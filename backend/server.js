require("dotenv").config();
const app = require("./api");
async function main() {
  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log("Server on port", port);
}
main();
