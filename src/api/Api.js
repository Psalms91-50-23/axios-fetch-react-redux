import request from 'superagent'
import axios from 'axios'
const baseURL = 'https://randomuser.me/api'

export const axiosFetchRandomUsers = async () => {

    try{
        const userData = await axios.get(baseURL)
        // console.log("userData ",userData)
        return userData

    }
    catch(err){
        console.error(err)
    } 

}

export const axiosFetchNextRandomUsers = async (number) => {

    try{
        const userData = await axios.get(`${baseURL}?page=${number}`)
        // console.log("userData ",userData)
        return userData

    }
    catch(err){
        console.error(err)
    } 

}