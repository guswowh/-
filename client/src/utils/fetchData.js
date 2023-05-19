import axios from "axios";

export const fetchData = (httpMethod, url, data, config) => {
  if (httpMethod === 'get') {
    axios[httpMethod](url).then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  } else {
    axios[httpMethod](url, data, config).then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }
}