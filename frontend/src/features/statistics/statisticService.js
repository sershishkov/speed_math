import axios from 'axios';

const API_URL = '/api/statistics';

//update user statistic
const update__statistic = async (statisticData) => {
  const token = JSON.parse(localStorage.getItem('token'));
  // console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(`${API_URL}`, statisticData, config);

  return response.data ? response.data : null;
};

const Service = {
  update__statistic,
};

export default Service;
