import axios from 'axios';

const getActiveEventQuestions = () => new Promise((resolve, reject) => {
  axios.get('./fixtures/activeEventQuizzesData.json')
    .then((response) => resolve(response.data[0].questions))
    .catch((error) => reject(error));
});

export default getActiveEventQuestions;
