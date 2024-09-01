import axios from "axios"


const api = axios.create({
    baseURL: "https://the-one-api.dev/v2",
})

api.interceptors.request.use(async (config) => {
    const token = "rqkX8Hxmcgo4DnARIzbA";

    config.headers.authorization = `Bearer ${token}`

    return config
})

export default api