import express from "express";
import feedBack from "../common/feedback.js";
import performanceService from "./service.js";

const performanceRouter = express.Router();

//http://localhost:3000/user/getInfo?user=1
performanceRouter.post('/save', async (req, res, next) => {
    performanceService.save(JSON.parse(req.body.proformance_pc)).then((result) => {
        feedBack(result, res);
        next();
    }).catch((err) => {
        feedBack({}, res, { errcode: 500, errmsg: err.toString() })
    })
});

export default performanceRouter;

