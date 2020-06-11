import axios from "axios";

// axios.defaults.withCredentials = true;

const Fetch = async (type, endpoint, body) => {
  let response;
  let error = null;
  var config;

  const headers = {
    "Content-Type": "application/json",
  };

  if (!body) {
    config = {
      method: type,
      url: endpoint,
      headers: headers,
    };
  } else {
    config = {
      method: type,
      url: endpoint,
      headers: headers,
      data: JSON.stringify(body),
    };
  }

  await axios(config)
    .then(async (res) => {
      response = await res.data;
      console.log(response);
    })
    .catch((err) => {
      if (err.response) {
        if (err.response.status === 401) {
          error = {
            statusCode: 401,
            message: err.response.data.message,
          };
        } else {
          error = err;
        }
      } else {
        error = err;
      }
      return [response, error];
    });
  return [response, error];
};

export default Fetch;
