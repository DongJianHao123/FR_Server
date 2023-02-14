import express from "express";
import feedBack from "../common/feedback.js";
import signWrapService from "./service.js";

const signWrapRouter = express.Router();

//http://localhost:3000/user/getInfo?user=1
signWrapRouter.post('/save', async (req, res, next) => {
    signWrapService.save(JSON.parse(req.body.signWrap)).then((result) => {
        feedBack(result, res);
        next();
    }).catch((err) => {
        feedBack({}, res, { errcode: 500, errmsg: err.toString() })
    })
});

export default signWrapRouter;

