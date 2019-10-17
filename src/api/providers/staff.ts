import axios from 'axios';
import ENV from 'react-native-config';

const getAllStaff = (search?: string) => {
    const url = search ? ENV.API_URL+'staff/filter/' + search : ENV.API_URL+'staff'
    return axios.get(url)
        .then(response => {
            return response;
        })
        .catch(err => {
            if (err.response)
                throw err.response;
            throw err;
        })
}

export const getStaff = {
    getAllStaff
}
