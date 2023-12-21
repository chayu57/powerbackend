const express = require('express');

const router = express.Router();

const storeddataController=require("../controllers/storeddataController");

router.post("/postdata",storeddataController.storeddataHandler);

module.exports=router;