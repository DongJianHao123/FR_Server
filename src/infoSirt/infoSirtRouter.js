import express from "express";
import feedBack from "../common/feedback.js";
import sirtService from "./service.js";

const sirtRouter = express.Router();

//http://localhost:3000/user/getInfo?user=1
sirtRouter.post('/save', async (req, res, next) => {
    try {
        sirtService.save(JSON.parse(req.body.info_sirt)).then((result) => {
            feedBack(result, res);
            next();
        }).catch((err) => {
            feedBack({}, res, { errcode: 500, errmsg: err.toString() })
        })
    } catch (error) {
        console.error('保存sirt信息失败' + error)
    }

});

export default sirtRouter;

