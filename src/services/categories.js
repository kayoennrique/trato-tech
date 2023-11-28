import instance from "commom/config/api";

const categoriesService = {
    search: async () => {
        const response = await instance('/categorias');

        return response.data
    }
}

export default categoriesService;