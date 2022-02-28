import express from "express";
import {getUrlData } from "../controllers/meta.js";
const router = express.Router();

router.get("/metadata", getUrlData);

export default router;
