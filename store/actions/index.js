import axios from "axios";
import config from '../configApiKey'

export function getTopHeadlines(){

    const request = axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.apikey}`)
    .then( response => response.data.articles )

    return {
        type: 'GET_HEADLINES',
        payload: request
    }
}



export function getSourceNews(source){

    const request = axios.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${config.apikey}`)
    .then( response => response.data.articles )

    return {
        type: 'GET_SOURCES',
        payload: request
    }
}