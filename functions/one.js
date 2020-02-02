exports.handler = (event, context, callback) => {
    callback(null, {
      statusCode: 200,
      body: 'No worries, all is working fine!'
    })
  }

// event.path the request path
// event.httpMethod the request HTTP method
// event.headers the request headers
// event.queryStringParameters the request query parameters
// event.body the request body in JSON format




// fetch.js
// import fetch from "node-fetch";

// const API_ENDPOINT = "https://icanhazdadjoke.com/";

// exports.handler = async (event, context) => {
//   return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
//     .then(response => response.json())
//     .then(data => ({
//       statusCode: 200,
//       body: data.joke
//     }))
//     .catch(error => ({ statusCode: 422, body: String(error) }));
// };