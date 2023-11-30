import instance from "commom/config/api";

const userService = {
    searchForId: async () => {
        const response = await instance.get(`/usuarios/${id}`);

        return response.data;
    }
}

export default usersService;