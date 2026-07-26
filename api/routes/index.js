import express from "express";
import {
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getAllRecipes,
} from "../controllers/index.js";

const router = express.Router();

// Route tanımlamaları
router.route("/api/recipes").get(getAllRecipes).post(createRecipe);

router
  .route("/api/recipes/:id")
  .get(getRecipeById)
  .put(updateRecipe)
  .delete(deleteRecipe);

export default router;
