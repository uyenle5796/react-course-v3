import axios from "axios";

// Axios custom instance

const customFetch = axios.create({
  baseURL: "http://localhost:5001/api/tasks",
});

export default customFetch;
