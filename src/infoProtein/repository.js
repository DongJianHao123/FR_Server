import prisma from "../db.js";

const proteinRepository = {
    save: async (data) => {
        try {
            const createFile = await prisma.info_protein
                .create({
                    data: data,
                })
                .catch((error) => {
                    console.error("prisma.info_txt.create error: ", error);
                });
            console.log("本次protein信息已存入mysql:");
            console.log(createFile);
            return createFile;
        } catch (error) {
            return { code: 500, error }
        }
    },
}

export default proteinRepository 