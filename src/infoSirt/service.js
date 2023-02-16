import sirtRepository from "./repository.js";


const sirtService = {
    save: async (data) => {
        //数据审核操作
        console.log(data);
        return await sirtRepository.save(data);
    }
}

export default sirtService