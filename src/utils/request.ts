import axios from "axios";

export const req = axios.create({

    baseURL: "https://localhost:44306/api/",
    headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
    }
})