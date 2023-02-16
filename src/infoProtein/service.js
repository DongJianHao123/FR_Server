import proteinRepository from "./repository.js";


const proteinService = {
    save: async (data) => {
        //数据审核操作
        //...
        console.log(data);
        return await proteinRepository.save(data);
    }
}

export default proteinService