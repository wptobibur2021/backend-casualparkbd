const path = require("path");
const multer = require("multer");

const UPLOADS_FOLDER = "public/assets/images/product";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName = `${file.originalname
      .replace(fileExt, "")
      .toLowerCase()
      .split(" ")
      .join("-")}-${new Date().toISOString().replace(/:/g, "-")}${fileExt}`;
    cb(null, fileName);
  },
});
// eslint-disable-next-line import/prefer-default-export
const upload = multer({
  storage,
  limits: {
    fileSize: 1000000,
  },
});

module.exports = upload;
