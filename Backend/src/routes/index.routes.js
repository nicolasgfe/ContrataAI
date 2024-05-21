const express = require("express");
const curriculoController = require("../constrollers/curriculoController");
const uploadController = require("../config/multer")
const router = express.Router();

router.route("/").get(curriculoController.all).post(curriculoController.create);
router.route("/:id").get(curriculoController.one).put(curriculoController.update).delete(curriculoController.delete);
router.route("/anexo").post(uploadController.single("file"), curriculoController.createAnexo);

module.exports = router;