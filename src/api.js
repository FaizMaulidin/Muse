import axios from "axios";

const clientId = "b0f92fc6"

export const getAPI = async() => {
    const dataAPI = await axios.get('https://api.jamendo.com/v3.0/artists/tracks/?client_id=b0f92fc6&format=jsonpretty&track_id=418728')
    console.log(dataAPI.data.results.tracks)
}