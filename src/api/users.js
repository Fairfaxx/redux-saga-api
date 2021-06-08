import axios from 'axios';

export const getUsers = () => {
  return axios.get('/result', {
    params: {
      limit: 1000
    }
  })
};

