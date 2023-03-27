import axios from "axios";

const Key = 'AIzaSyAbQaWf5BR2JueQQfDpzdUooI-PvMpLNjQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxresults: '5',
        key: Key
    }
})