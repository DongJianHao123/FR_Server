import express from "express";
import feedBack from "../common/feedback.js";
import proteinService from "./service.js";

const proteinRouter = express.Router();

//http://localhost:3000/user/getInfo?user=1
proteinRouter.post('/save', async (req, res, next) => {
    proteinService.save(JSON.parse(req.body.info_protein)).then((result) => {
        feedBack(result, res);
        next();
    }).catch((err) => {
        feedBack({}, res, { errcode: 500, errmsg: err.toString() })
    })
});

export default proteinRouter;

