import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    withCredentials:true
})

export const testApi = async()=>{
    try {
       await api.post(`/test/${'working'}`) 
    } catch (error) {
        alert('error in frontend api')
    }
}