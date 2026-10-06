import express from "express";
import { engine } from "express-handlebars";
import indexRoutes from "./routes/index.routes.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

// initialization
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// settings
app.set("views", join(__dirname, "views"));

app.engine(
  ".hbs",
  engine({
    layoutsDir: join(app.get("views"), "layouts"),
    partialsDir: join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  }),
);

app.set("view engine", ".hbs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// routes
app.use(indexRoutes);

// static files
app.use(express.static(join(__dirname, "public")));

export default app;
