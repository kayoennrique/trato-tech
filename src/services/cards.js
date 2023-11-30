import instance from "commom/config/api";

const cardsService = {
    searchForIdUser: async (userId) => {
        const response = await instance(`/cards?userId=${userId}`);

        return response.data;
    }
}

export default cardsService;