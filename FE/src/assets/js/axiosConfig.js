import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create axios instance with cookies enabled
const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,  // Send cookies with every request
    headers: {
        'Content-Type': 'application/json',
    }
});

// Auto-refresh token on 401 errors
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        
        // If 401 error and haven't retried yet
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            
            try {
                // Try to refresh token (cookies sent automatically)
                await axios.post(`${BASE_URL}/api/token/refresh/`, {}, {
                    withCredentials: true
                });
                
                // Retry the original request
                return api(originalRequest);
                
            } catch (refreshError) {
                // Refresh failed - redirect to login
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }
        
        return Promise.reject(error);
    }
);

export default api;
export { BASE_URL };