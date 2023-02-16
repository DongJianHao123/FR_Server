import prisma from "../db.js";

const sirtRepository = {
    save: async (data) => {
        try {
            const createFile = await prisma.info_sirt
                .create({
                    data: data,
                })
                .catch((error) => {
                    console.error("prisma.info_txt.create error: ", error);
                });
            console.log("本次Sirt信息已存入mysql:");
            console.log(createFile);
            return createFile;
        } catch (error) {
            return { code: 500, error }
        }
    },
}

export default sirtRepository 