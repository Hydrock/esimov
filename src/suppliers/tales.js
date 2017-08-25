import axios from 'axios';

const appUrl = 'http://hydrock.ru'
const dataImages = `${appUrl}/wp-json/wp/v2/stories`

export default function getStoriesData() {
  axios.get(dataImages)
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}
