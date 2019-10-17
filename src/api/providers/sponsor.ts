import axios from 'axios';
import ENV from 'react-native-config';

const getAllSponsors = (search?: string) => {
    const url = search ? ENV.API_URL+'sponsors/filter/' + search : ENV.API_URL+'sponsors'
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

export const getSponsors = {
    getAllSponsors
}
