import prisma from "../db.js";

const performanceRepository = {
    save: async (data) => {
        try {
            const createFile = await prisma.performance_pc
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
    //quaryObject->qo
    find: async (qo, pageOptions) => {
        const results = await prisma.performance_pc.findMany({
            where: { ...qo },
            orderBy: { create_time: "asc" },
            skip: pageOptions.pageNumber * pageOptions.pageSize,
            take: pageOptions.pageSize
        })
    },
}

export default performanceRepository 