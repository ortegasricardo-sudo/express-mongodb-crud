import "./database";
import app from "./app";
import { PORT } from "./config";

// Starting the server
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
