import {getRepositoriesFailed, getRepositoriesSuccess} from "../redux/actions/github.action";

const moment = require('moment');
const axios = require('axios');

export const getLastWeekRepositories = (language) => {
    const date = moment().subtract(7, 'days').format('YYYY-MM-DD');
    const url = `https://api.github.com/search/repositories?q=created:>${date}${language ? ` language:${language}` : ''}&sort=stars&order=desc`
    return axios.get(url)
        .then(response => {
            return getRepositoriesSuccess(response.data.items);
        })
        .catch(error => {
            return getRepositoriesFailed(error.response.statusText);
        })
}