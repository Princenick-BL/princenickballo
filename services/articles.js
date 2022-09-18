import { config } from "../constants";
import axios from 'axios'

export const getArticle = async ()=>{
    const res = await axios.get(`${config.API_ENDPOINT}/article`)
    if(res){
        return res.data
    }
    return null
}

export const count = async ()=>{
    const res = await axios.get(`${config.API_ENDPOINT}/article/count`)
    if(res.data.success){
        return res.data.data
    }
    return null
}

export const getTopArticles = async ()=>{
    const res = await axios.get(`${config.API_ENDPOINT}/article/top`)
    if(res.data.success){
        return res.data.data
    }
    return null
}

export const getArticleByCat = async (category)=>{
    const res = await axios.get(`${config.API_ENDPOINT}/article/category/${category}`)
    if(res){
        return res.data
    }
    return null
}

