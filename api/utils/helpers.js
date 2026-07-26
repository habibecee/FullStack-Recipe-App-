import fs from "fs";

// JSON dosyasındaki içeriği okuyup js formatına çevirir
const readDB = () => {
  try {
    const jsonData = fs.readFileSync("./data/db.json", "utf-8");

    const jsData = JSON.parse(jsonData);

    return jsData;
  } catch (error) {
    console.error("Veri okunurken hata oluştu:", error);
  }
};

// Parametre olarak aldığı veriyi JSON dosyasına yazan fonksiyon
const writeDB = (data) => {
  try {
    fs.writeFileSync("./data/db.json", JSON.stringify(data));
  } catch (error) {
    console.error("Veri yazılırken hata oluştu:", error);
  }
};

// İsteğin body bölümünde gelen verilerin eksiksiz olup olmadığını kontrolü yapan fonksiyon
// const obj = {
//   name: "",
//   image: "",
//   category: "",
//   ingredients: [],
//   time: 0,
//   country: "",
//   instructions: [],
//   serving: "",
// };

const validateRecipe = (data) => {
  if (
    typeof data.name !== "string" ||
    typeof data.image !== "string" ||
    typeof data.category !== "string" ||
    !Array.isArray(data.ingredients) ||
    typeof data.time !== "number" ||
    typeof data.country !== "string" ||
    !Array.isArray(data.instructions) ||
    typeof data.serving !== "string"
  ) {
    return false;
  }

  return true;
};

export { readDB, writeDB, validateRecipe };
