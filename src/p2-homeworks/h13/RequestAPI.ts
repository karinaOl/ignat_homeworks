import axios from "axios";

type RequestAPIType = {
    errorText: string
    info: string
    yourBody: {success: true}
    yourQuery: {}
}


export const requestAPI = {
    createRequest (success: boolean) {
        return axios.post<RequestAPIType>("https://neko-cafe-back.herokuapp.com/auth/test", {success})
            .then(response => response.data)

    }
}