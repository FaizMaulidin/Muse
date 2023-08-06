import axios from "axios";

const clientId = "b0f92fc6"

export const getAPI = async(getX, limit, ids) => {
    if(ids === undefined){ids = ''}
    const dataAPI = await axios.get(`https://api.jamendo.com/v3.0/${getX}/?client_id=${clientId}&format=jsonpretty&limit=${limit}${ids}`)
    return dataAPI.data.results
}