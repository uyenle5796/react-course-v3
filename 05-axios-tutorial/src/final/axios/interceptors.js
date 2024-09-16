import axios from "axios";

/** Interceptors -
 * functions that Axios calls for every request
 * and we can use them to transform the request before it leaves the application
 * as well as add some custom logic when we handle the response.
 * Useful for complex logic (eg. authentication)
 */

const authFetch = axios.create({
  baseURL: "https://www.course-api.com",
});

// Request
authFetch.interceptors.request.use(
  (request) => {
    // old version: request.headers.common['Accept'] = 'application/json';
    request.headers["Accept"] = "application/json";
    console.log("request sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response
authFetch.interceptors.response.use(
  (response) => {
    console.log("got response");
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      console.log("NOT FOUND");
    }
    return Promise.reject(error);
  }
);

export default authFetch;
