import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    withCredentials:true
})


export const userSignUp = async (userdata:{email:string,password:string,name:string})=>{
    try {
        const response = await api.post('/signup',userdata)
        return response.data
    } catch (error) {
        throw error
    }
}

export const userSignIn = async  (userData:{email:string,password:string}) =>{
    try {
        const response = await api.post('/signin',userData)
        return response.data
    } catch (error) {
        throw error
    }
}

export const logoutUser = async () => {
    try {
        await api.post('/logout')
    } catch (error) {
        throw error
    }
}