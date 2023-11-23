const express = require("express");
const router = express.Router();
const handler = require("../handler/testingHandler");
const upload = reuqire("../middleware/fileUpload");
// router.get('/image', uploadImageHandler.renderImg)

router.post("/upload", upload.single("image"), handler.uploadImg);

module.exports = router;
