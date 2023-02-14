import performanceRepository from "./repository.js"


const performanceService = {
    save: async (data) => {
        //数据审核操作
        //...
        console.log(data);
        return await performanceRepository.save(data);
    }
}

export default performanceService