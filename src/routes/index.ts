import { Router } from "express";
import seriesRouter from "./seriesRouter.js";

const router = Router();

router.use(seriesRouter);

export default router;