import prisma from "../db.js";

const signWrapRepository = {
    save: async (data) => {
        try {
            const createFile = await prisma.signinWrap
                .create({
                    data: data,
                })
                .catch((error) => {
                    console.error("prisma.info_txt.create error: ", error);
                });
            console.log("本次性能指标信息已存入mysql:");
            console.log(createFile);
            return createFile;
        } catch (error) {
            return { code: 500, error }
        }
    },
}

export default signWrapRepository 