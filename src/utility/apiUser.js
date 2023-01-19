import axios from "axios";
import config from "../config.json";

export async function getCurrentUser() {
    let response = await axios.get(`${config.domain.backend}/auth/check`, { withCredentials: true });
    return response.data;
}