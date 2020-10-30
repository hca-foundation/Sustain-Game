import axios from 'axios';

// FIXME: For local data
// const getActiveEvent = () => new Promise((resolve, reject) => {
//   axios.get('/fixtures/activeEventQuizzesData.json')
//     .then((response) => resolve(response.data))
//     .catch((error) => reject(error));
// });

const getActiveEvent = () => new Promise((resolve, reject) => {
  axios.get('https://sustaingame-admin.herokuapp.com/active_event_info/')
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getActiveEvent;
