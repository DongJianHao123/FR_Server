import signWrapRepository from "./repository.js";


const signWrapService = {
    save: async (data) => {
        //数据审核操作
        //...
        console.log(data);
        return await signWrapRepository.save(data);
    }
}

export default signWrapService