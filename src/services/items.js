const { default: instance } = require("commom/config/api")

const itemsService = {
    search: async () => {
        const response = await instance.get('/items');
        
        return response.data;
    }
}

export default itemsService;