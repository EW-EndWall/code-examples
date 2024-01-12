const fs = require("fs");
const path = require("path");

function searchInFolder(mainFolderPath, currentPath = "") {
  const folderPath = path.join(mainFolderPath, currentPath);

  const result = [];

  try {
    const files = fs.readdirSync(folderPath);

    if (files.length === 0) {
      return [
        { filePath: null, folderPath: [currentPath], textData: undefined },
      ];
    }

    files.forEach((file) => {
      const filePath = path.join(currentPath, file);
      const fullPath = path.join(mainFolderPath, filePath);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        // Eğer dosya bir klasörse, bu klasörde de arama yap
        result.push(...searchInFolder(mainFolderPath, filePath));
      } else if (stats.isFile() && path.extname(file) === ".md") {
        // Eğer dosya bir Markdown dosyasıysa, içinde arama yap
        const mdContent = fs.readFileSync(fullPath, "utf8");
        const encodedContent = encodeURIComponent(mdContent);

        // Sonuçları kaydet
        const folderPathArray = [...filePath.split(path.sep).slice(0, -1)];
        const fileName = path.basename(filePath);
        result.push({
          filePath: fileName,
          folderPath: folderPathArray,
          textData: encodedContent,
        });
      }
    });
  } catch (error) {
    console.error("Error reading folder:", error);
    return [{ filePath: null, folderPath: [currentPath], textData: undefined }];
  }

  return result;
}

const mainFolderPath = "./data";
const results = searchInFolder(mainFolderPath);
console.log(results);
