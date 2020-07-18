
import axios from 'axios'
export const setNews=(news)=>{
    return{
        type:'SET_NEWS',
        payload:news
    }
}

export const startSetNews=()=>{
    return (dispatch)=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=3f7e8b1b56a64d82a4892ef4bbfafaa5', {})
            .then((response)=>{
                const news=response.data.articles
                // console.log('news',news)
                dispatch(setNews(news))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}
