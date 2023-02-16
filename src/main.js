import { createRequire } from "module";
import { fileURLToPath } from "url";
import config from "./config.js";
import bodyParser from "body-parser";
import performanceRouter from "./performancePc/performanceRouter.js";
import signWrapRouter from "./signWrap/signWrapRouter.js";
import proteinRouter from "./infoProtein/infoProteinRouter.js";
import sirtRouter from "./infoSirt/infoSirtRouter.js";

const require = createRequire(import.meta.url);
const filename = fileURLToPath(import.meta.url);
const express = require("express"); //引入express
const path = require("path"); //引入path
var url = require("url");


const _dirname = path.dirname(filename);

//创建服务器
const app = express();
const port = config.SERVER_PORT;
//监听端口

//设置静态文件目录
app.use(express.static("public"));
app.use("/", express.static(path.join(_dirname, "public")));
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }))

//router
app.use('/performance_pc', performanceRouter)
app.use('/sign', signWrapRouter)
app.use('/protein', proteinRouter)
app.use('/sirt', sirtRouter)


app.post("/sign_in", (req, res) => {
  console.log("用户登录");
  console.log(req.body);
  res.send(JSON.stringify(JSON.parse(req.body.user)))
})

app.listen(port, function () {
  console.log("服务器已启动:");
  console.log("http://localhost:" + port + "/ ");
  console.log("--------------------------------------------");
});
