//----------------
//  for real app
//----------------
import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    // replace url
    baseURL: 'http://test.com/api',
    params: {
        // enter key
        key: ''
    }
})

class APIClient<T> {
    endpoint: string
    constructor(endpoint: string){
        this.endpoint = endpoint
    }
    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<T[]>(this.endpoint, config)
            .then(res => res.data)
    }
    get = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<T>(this.endpoint, config)
            .then(res => res.data)
    }
    add = (data: T) => {
        return axiosInstance.post<T>(this.endpoint, data)
            .then(res => res.data)
            
    } 
    delete =(id: number) => {
        axiosInstance.delete(`${this.endpoint}/${id}`)
            .then(res => res.data)
    }
    
    
}

export default APIClient