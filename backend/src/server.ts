import app, { init } from "@/app";

const port = +process.env.PORT || 5000;

init()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}.`);
    });
  })
  .catch((error) => {
    console.error("Error occurred while initializing the server:", error);
  });
