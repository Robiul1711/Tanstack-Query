import axios from "axios";
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
})

export const fetchPosts = async () => {
    const response = await api.get("/");
    return response.data;
}