import axios from "axios";

// Custom instance useful for when using the same base URL multiple times or for security purposes

const authFetch = axios.create({
  baseURL: "https://www.course-api.com",
  headers: {
    Accept: "application/json",
  },
});

export default authFetch;
