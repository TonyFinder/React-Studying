import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '7c15e34d-028e-4653-86ec-6c53c32699db'
    }
})

export const usersAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get<any>(`users?count=${pageSize}&page=${currentPage}`)
            .then((response: AxiosResponse) => response.data)
    }
}

export const followAPI = {
    followUser(user: number) {
        return instance.post<any>(`follow/${user}`)
            .then((response: AxiosResponse) => response.data)
    },
    unFollowUser(user: number) {
        return instance.delete<any>(`follow/${user}`)
            .then((response: AxiosResponse) => response.data)
    }
}
export const profileAPI = {
    getProfile(userID: number){
        return instance.get<any>(`profile/${userID}`)
            .then((response: AxiosResponse) => response.data)
    },
    getStatus(userID: number){
        return instance.get<any>(`profile/status/${userID}`)
    },
    updateStatus(status: string){
        return instance.put<any>(`profile/status`, {status})
    }
}
export const authAPI = {
    authMe() {
        return instance.get<any>(`auth/me`)
            .then((response: AxiosResponse) => response.data)
    }
}