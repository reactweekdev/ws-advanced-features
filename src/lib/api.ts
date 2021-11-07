import axios from 'axios'

import { BASE_URL } from 'config/constants'

import { authHeader } from './authHeader'
import { authErrorHandler, errorHandler } from './errorHandler'

class ApiService {
    private readonly http = axios.create({
        baseURL: BASE_URL || undefined,
        timeout: 30000,
    })

    httpService = axios

    constructor() {
        this.http.interceptors.request.use((config) => {
            return config
        })
    }

    async get(path: string, config?: {}) {
        const options = {
            headers: authHeader(),
            ...config,
        }
        return this.http
            .get(path, options)
            .then((response) => response.data)
            .catch(authErrorHandler)
            .catch(errorHandler)
    }

    async getFull(path: string, config?: {}) {
        const options = {
            headers: authHeader(),
            ...config,
        }
        return this.http.get(path, options).catch(authErrorHandler).catch(errorHandler)
    }

    async post(path: string, payload: {}, config?: any) {
        const options = {
            headers: authHeader(),
            ...config,
        }
        return this.http
            .post(path, payload, options)
            .catch(authErrorHandler)
            .catch(errorHandler)
    }

    async put(path: string, payload: {}, config?: any) {
        const options = {
            headers: authHeader(),
            ...config,
        }
        return this.http
            .put(path, payload, options)
            .catch(authErrorHandler)
            .catch(errorHandler)
    }

    async delete(path: string, config?: any) {
        const options = {
            headers: authHeader(),
            ...config,
        }
        return this.http.delete(path, options).catch(authErrorHandler).catch(errorHandler)
    }

    async patch(path: string, payload: {}, config?: any) {
        const options = {
            headers: authHeader(),
            ...config,
        }
        return this.http
            .patch(path, payload, options)
            .catch(authErrorHandler)
            .catch(errorHandler)
    }

    async postFile(path: string, file: any, config?: any) {
        const options = {
            headers: { ...authHeader(), 'Content-Type': 'multipart/form-data' },
            ...config,
        }
        let formData = new FormData()
        formData.append('file', file)
        return this.http
            .post(path, formData, options)
            .catch(authErrorHandler)
            .catch(errorHandler)
    }

    async postFormData(path: string, formData: any, config?: any) {
        const options = {
            headers: { ...authHeader(), 'Content-Type': 'multipart/form-data' },
            ...config,
        }
        return this.http
            .post(path, formData, options)
            .catch(authErrorHandler)
            .catch(errorHandler)
    }
}

export const API = new ApiService()
