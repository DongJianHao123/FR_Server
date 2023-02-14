import express from "express";
const userRouter = express.Router();

//http://localhost:3000/user/getInfo?user=1
userRouter.post('/add',(req,res,next)=>{
    res.send(req.body);
    next();
});

export default userRouter;