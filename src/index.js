import app from "./app.js";
import { PORT } from "./config.js";

import "./database.js";

// Starting the server
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
