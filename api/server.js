import express from "express";
import cors from "cors";
import recipeRoutes from "./routes/index.js";

const app = express();
const port = 4000;

// CORS HATALARI ÖNLEYEN MIDDLEWARE
app.use(cors());

// JSON VERİLERİNİ İŞLEYEN MIDDLEWARE
app.use(express.json());

// Tarif routelarını express'e tanıt
app.use(recipeRoutes);

// api'ı belirlediğimiz portu dinleme
app.listen(port, () => {
  console.log(`🚨 Server ${port} portunu dinliyor... 🚨 `);
});
