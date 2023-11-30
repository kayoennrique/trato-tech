import instance from 'commom/config/api';

const flagsService = {
  searchForId: async flagIds => {
    const query = new URLSearchParams();
    flagIds.forEach(id => query.append('id', id));
    const response = await instance.get(`/flags?${query.toString()}`);

    return response.data;
  }
}

export default flagsService;