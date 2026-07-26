import { readDB, validateRecipe, writeDB } from "../utils/helpers.js";
import crypto from "crypto";

const recipes = readDB();

const getAllRecipes = (req, res) => {
  // tarif verilerini tuttuğumuz değişken
  let filtered = [...recipes];
  //isteğin query bölümündeki search parametresine eriş
  const search = req.query?.search?.toLocaleLowerCase("tr");

  //eğer search parametresi varsa adında aratılan kelime geçen tarifleri bul
  if (search) {
    filtered = recipes.filter((i) =>
      i.name.toLocaleLowerCase("tr").includes(search),
    );
  }

  // eğer order parametresi varsa sıralama yap
  if (req.query?.order) {
    // order parametresi asc veya desc olabilir
    if (req.query.order) {
      filtered.sort((a, b) =>
        req.query.order === "asc" ? a.time - b.time : b.time - a.time,
      );
    }
  }

  // client'a yanıt
  res.json({
    success: true,
    message: "Tüm tarifler listelendi",
    result: filtered.length,
    data: filtered,
  });
};

const getRecipeById = (req, res) => {
  //  parametre olarak gelen id değerine eriş
  const id = req.params.id;

  // id'yi dizide ara
  const recipe = recipes.find((i) => i.id === id);

  // bulunamadıysa
  if (!recipe) {
    return res.status(404).json({
      success: false,
      message: "Tarif bulunamadı",
      data: null,
    });
  }

  // client'a yanıt
  res.status(200).json({
    success: true,
    message: "Tarif bulundu",
    data: recipe,
  });
};

const createRecipe = (req, res) => {
  // gelen veri doğru formatta mı?
  if (!validateRecipe(req.body)) {
    return res.status(400).json({
      success: false,
      message: "Geçersiz tarif verisi",
      data: null,
    });
  }

  //veriye id ekle
  const newRecipe = {
    id: crypto.randomUUID(),
    ...req.body,
  };

  // veriyi diziye ekle
  recipes.push(newRecipe);

  // db'yi güncelle
  writeDB(recipes);

  // client'a yanıt
  res.status(201).json({
    success: true,
    message: "Tarif oluşturuldu",
    data: newRecipe,
  });
};

const updateRecipe = (req, res) => {
  // parametre olarak gelen id'li tarifi bul
  //   const recipe = recipes.find((i) => i.id === req.params.id);

  // güncellenecek elemanın sırasını bul
  const index = recipes.findIndex((i) => i.id === req.params.id);

  // bulunamadıysa
  if (!recipes[index]) {
    return res.status(404).json({
      success: false,
      message: "Güncellenmek istenen tarif bulunamadı",
      data: null,
    });
  }

  // bulunduysa body'den gelen veri doğru formatta mı kontrol et
  if (!validateRecipe(req.body)) {
    return res.status(400).json({
      success: false,
      message: "Geçersiz tarif verisi",
      data: null,
    });
  }

  // güncellenenn tarif nesnesi
  const updatedRecipe = {
    ...recipes[index],
    ...req.body,
  };

  // diziyi güncelle
  recipes.splice(index, 1, updatedRecipe);

  // JSON dosyasını güncelle
  writeDB(recipes);

  // client'a yanıt
  res.status(200).json({
    success: true,
    message: "Tarif güncellendi",
    data: updatedRecipe,
  });
};

const deleteRecipe = (req, res) => {
  // parametre olarak gelen id'li elemanın dizideki sırasını bul
  const index = recipes.findIndex((i) => i.id === req.params.id);

  // elemanı bulunamadıysa
  if (!recipes[index]) {
    return res.status(404).json({
      success: false,
      message: "Silinmek istenen tarif bulunamadı",
      data: null,
    });
  }

  //bulunduysa tarifi diziden kaldır
  recipes.splice(index, 1);

  // JSON dosyasını güncelle
  writeDB(recipes);

  // client'a yanıt
  res.status(204).json({
    success: true,
    message: "Tarif silindi",
    data: null,
  });
};

export {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
